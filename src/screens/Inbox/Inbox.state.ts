import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ActionMeta, SingleValue } from 'react-select';
import { FormikHelpers, useFormik } from 'formik';
import { format } from 'date-fns';
import { CSVLink } from 'react-csv';
import { getUserRole } from 'services/utils';

import { setAndFormatDateToISO } from 'services/utils';
import { emailSendValidationSchema } from 'services/validation';
import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { useSelectFiles } from 'hooks/useSelectFiles';
import { usePagination } from 'hooks/usePagination';
import { useSortableData } from 'hooks/useSortTableData';

import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';

import {
  downloadCSV,
  downloadXLXS,
  getReceipts,
  markAsPaid,
  markAsUnpaid,
  markAsApproved,
  markAsWithdrawlApproval,
  markAsRejected,
  markAsWithdrawlRejection,
  markAsPublished,
  markAsUnpublished,
  postEmail,
  receiptDelete,
} from './inbox.api';
import { formikInitialValues, INITIAL_STATE } from './inbox.constants';
import {
  IGetReceiptsParams,
  IPostEmail,
  IuseInboxState,
} from './types/inbox.types';
import {
  setCheckedAllItems,
  setCheckedItem,
  setIsCompanyChanged,
  setIsFetchingData,
  setReceipts,
} from './reducer/inbox.reducer';

import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

import { ROUTES } from 'constants/routes';
// import { ReactPaginateProps } from 'react-paginate';
import { useExpenseReportState } from "screens/ExpenseReport/ExpenseReportstate";


export const useInboxState = () => {
  const {
    inbox: { totalCount, count, receipts, isCompanyChanged, isAllChecked },
    user: {
      user: { active_account, accounts },
      userInfo: { company },
      token,
    },
  } = useSelector((state: IState) => state);
  console.log(receipts);
  console.log(active_account);
  const userRole = getUserRole(accounts || [], active_account || '')
    ?.role as TRoles;

  const initialState = INITIAL_STATE;
  const [state, setState] = useState<IuseInboxState>(initialState);

  const onChangeStateFieldHandler = (
    optionName: keyof typeof INITIAL_STATE,
    value: string | number | boolean | SingleValue<IOption>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const debouncedValue = useDebounce(state.searchValue, 250);

  const dateStart =
    state.dateValue && setAndFormatDateToISO(state.dateValue.toISOString());
  const dateEnd =
    state.dateValue &&
    setAndFormatDateToISO(state?.dateValue.toISOString(), true);

  // --------------------------------------> Pagination
  const onChangePage = async ({ selected }: {selected: number}) => {
    await onFetchReceiptsHandler({
      ...fetchParams,
      skip: selected * +itemsPerPage.value, 
    });
    onChangePageHandler(selected);
  };

  const onChangeItemsPerPage = async (newValue: IOption) => {
    setItemsPerPage(newValue);
    if (!totalCount) return;
    await onFetchReceiptsHandler({
      ...fetchParams,
      take: +newValue.value,
      skip: 0,
      // skip: currentPage * +itemsPerPage.value,
    });
    // const currentSkip = currentPage * +itemsPerPage.value;
    // const newValueNumber = parseInt(newValue)
    // const newPage = currentSkip/newValue
    setCurrentPage(0);
  };

  const {
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,   // used in state.ts only, don't need to export 
    itemsPerPage, 
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({
    onChangePage,
  });

  const fetchParams = {
    search: debouncedValue,
    status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
    date_filter: state.dateFilterValue.value === 'all' ? '' : state.dateFilterValue.value,
    take: +itemsPerPage.value,
    skip: currentPage * +itemsPerPage.value,
    date_start: dateStart || '',
    date_end: dateEnd || '',
    active_account: active_account || '',
  };

  const onSelectFiles = useSelectFiles();

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectFiles({
      files: event.target.files,
      location,
      route: ROUTES.filesUploadPreview,
    });
  };

  const onFetchReceiptsHandler = async (params?: IGetReceiptsParams) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        checkedIds: [],
      }));
      const { data } = await getReceipts({
        ...params,
        active_account: active_account || '',
      });
      isCompanyChanged && dispatch(setIsCompanyChanged(false));
      dispatch(
        setReceipts({
          count: data.count,
          data: data.data,
          totalCount: data.totalCount,
        })
      );
      setState((prevState) => ({
        ...prevState,
        isEmptyData: data.totalCount ? false : true,
        isFetchingReceipts: false,
        isContentLoading: false,
      }));
    } catch (error) {
      dispatch(setIsFetchingData(false));
      setState((prevState) => ({
        ...prevState,
        isFetchingReceipts: false,
        isEmptyData: false,
        isContentLoading: false,
        checkedIds: [],
      }));
      console.log(error);
    }
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
    }));
  };

  const onChangeDate = async (date: Date) => {
    if (Array.isArray(date)) {
      const isEqual = Array.isArray(state.dateRangeValue) ? state.dateRangeValue[0]?.toISOString() === date[0].toISOString() && state.dateRangeValue[1]?.toISOString() === date[1].toISOString() : null;
      setState((prevState) => (
        {
          ...prevState,
          dateRangeValue: isEqual ? null : date,
          formattedDate: isEqual ? '' : `${format(date[0], company.date_format)} - ${format(date[1], company.date_format)}`,
        }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date[0].toISOString());
      const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);

      await onFetchReceiptsHandler({
        ...fetchParams,
        date_start: isEqual ? '' : dateStart,
        date_end: isEqual ? '' : dateEnd,
      });
    } else {
      console.log(date);
      const isEqual = state.dateValue?.toISOString() === date.toISOString();
      setState((prevState) => ({
        ...prevState,
        dateValue: isEqual ? null : date,
        formattedDate: isEqual ? '' : format(date, company.date_format),
      }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date.toISOString());
      const dateEnd = setAndFormatDateToISO(date.toISOString(), true);

      await onFetchReceiptsHandler({
        ...fetchParams,
        date_start: isEqual ? '' : dateStart,
        date_end: isEqual ? '' : dateEnd,
      });
    }
  };

  const onChangeStatusValueHandler = async (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      statusValue: {
        value: newValue.value,
        label: `Status - ${newValue.label}`,
      },
    }));
    await onFetchReceiptsHandler({
      ...fetchParams,
      skip: 0,
      status: newValue.value === 'all' ? '' : newValue.value,
    });
    setCurrentPage(0);
  };

  const onChangeDateFilterValueHandler = async (
    newValue: any,
    actionMeta?: ActionMeta<unknown>
  ) => {
    if (newValue?.value !== 'range' && newValue?.value !== 'customdate') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        statusValue: {
          value: 'all',
          label: `Status - All`,
        },
        formattedDate: '',
        isInputDate: false
      }));
      await onFetchReceiptsHandler({
        ...fetchParams,
        skip: 0,
        status: '',
        date_filter: newValue.value === 'all' ? '' : newValue.value,
        date_start: '',
        date_end: ''
      });
      setCurrentPage(0);
    } else if (newValue.value === 'range') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: false
      }));
    } else if (newValue.value === 'customdate') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: false
      }));
    }
  };

  const [isDatePickerOpen, setIsDatePickerOpen] = useToggle();
  const [isEmailModalWindowOpen, onEmailModalWindowToggle] = useToggle();

  const onCloseEmailModalHandler = () => {
    onEmailModalWindowToggle();
    formik.resetForm();
  };

  const onEmailClick = () => {
    onEmailModalWindowToggle();
    onActionsClose();
  };

  const onPostEmailHandler = async (
    postEmailValues: Omit<IPostEmail, 'receipts' | 'active_account'>,
    actions: FormikHelpers<typeof formikInitialValues>
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await postEmail({
        ...postEmailValues,
        receipts: state.checkedIds,
        active_account: active_account || '',
      });
      formik.resetForm();
      onChangeStateFieldHandler('isLoading', false);
      setIsSentSuccessPopup();
      onEmailModalWindowToggle();
    } catch (error: any) {
      const { data } = error.response;
      data.message &&
        actions.setErrors({
          to: ' ',
          subject: ' ',
          message: `${data.message}`,
        });
      console.log(error);
      onChangeStateFieldHandler('isLoading', false);
    }
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values, actions) => onPostEmailHandler(values, actions),
    validationSchema: emailSendValidationSchema,
  });

  const onActionsClick = () =>
    onChangeStateFieldHandler('showActions', !state.showActions);
  const onActionsClose = () => onChangeStateFieldHandler('showActions', false);

  const onCheckedItemHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setCheckedItem(event.target.id));
      setState((prevState) => ({
        ...prevState,
        checkedIds: prevState.checkedIds.includes(event.target.id)
          ? prevState.checkedIds.filter(
            (item: string) => item !== event.target.id
          )
          : [...prevState.checkedIds, event.target.id],
      }));
    },
    []
  );

  const onCheckedPaidHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedReceipt = receipts?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateReceiptItem({
          id: event.target.id,
          payment_status: !selectedReceipt?.payment_status,
          active_account: active_account || '',
        });
        await onFetchReceiptsHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, receipts]
  );
  const onCheckedApproveHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedReceipt = receipts?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateReceiptItem({
          id: event.target.id,
          // approve_status: !selectedReceipt?.approve_status,
          status: selectedReceipt?.status == 'approved' ? 'review' : 'approved',
          active_account: active_account || '',
        });
        await onFetchReceiptsHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, receipts]
  );
  const onCheckedPublishMockFuncHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedReceipt = receipts?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateReceiptItem({
          id: event.target.id,
          publish_status: !selectedReceipt?.publish_status,
          active_account: active_account || '',
        });
        await onFetchReceiptsHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, receipts]
  );

  const onCheckedAllItemsHandler = useCallback(() => {
    dispatch(setCheckedAllItems(!isAllChecked));
    setState((prevState) => ({
      ...prevState,
      checkedIds: !isAllChecked ? receipts?.map((receipt) => receipt.id) : [],
    }));
  }, [dispatch, isAllChecked, receipts]);

  const csvLink = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);

  const excelRef = useRef<HTMLAnchorElement>(null);

  const onDownloadExcelFileHandler = async () => {
    try {
      if (!state.checkedIds.length) return;
      const { data } = await downloadXLXS(
        { receipts: state.checkedIds, active_account: active_account || '' },
        token
      );
      const url = URL.createObjectURL(new Blob([data]));
      onChangeStateFieldHandler('excelUrl', url);
      excelRef.current &&
        excelRef.current.setAttribute('download', 'receipt.xlsx');
      setTimeout(() => excelRef.current && excelRef.current.click(), 100);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDownloadCSVButtonHandler = async () => {
    try {
      const { data } = await downloadCSV({
        receipts: state.checkedIds,
        active_account: active_account || '',
      });
      onChangeStateFieldHandler('csvData', data);
      setTimeout(() => csvLink.current && csvLink.current.link.click(), 100);
    } catch (error) {
      console.log(error);
    }
  };

  const isActionMenuButtonDisabled = !state.checkedIds.length;

  const onDeleteReceiptHandler = async () => {
    try {
      const isLastReceiptOnPage = totalCount === state.checkedIds.length;
      const isEqualAmount = receipts.length === state.checkedIds.length;
      let skipReceipts = 0;

      await receiptDelete(
        { receipts: state.checkedIds, active_account: active_account || '' },
        token
      );

      setState((prevState) => ({
        ...prevState,
        searchValue:
          receipts.length === 1 || state.searchValue
            ? ''
            : prevState.searchValue,
        isContentLoading: receipts.length !== 1 ? true : false,
        isFetchingReceipts: isLastReceiptOnPage ? true : false,
        statusValue: isLastReceiptOnPage
          ? INITIAL_STATE.statusValue
          : prevState.statusValue,
        dateValue: isLastReceiptOnPage ? null : prevState.dateValue,
        formattedDate: isLastReceiptOnPage ? '' : prevState.formattedDate,
      }));

      if (currentPage === 0) {
        skipReceipts = 0;
      } else {
        skipReceipts = currentPage * +itemsPerPage.value;
      }

      if (isEqualAmount && !!currentPage && count) {
        skipReceipts = (currentPage - 1) * +itemsPerPage.value;
        onChangePageHandler(currentPage - 1);
      }

      !state.searchValue &&
        (await onFetchReceiptsHandler({
          ...fetchParams,
          skip: skipReceipts,
        }));
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  const onMarkAsHandler = async (mark: string) => {
    try {
      onChangeStateFieldHandler('isContentLoading', true);
      if (mark === 'paid') {
        await markAsPaid({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'unpaid') {
        await markAsUnpaid({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'approved') {
        await markAsApproved({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'withdrawlapproval') {
        await markAsWithdrawlApproval({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'rejected') {
        await markAsRejected({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'withdrawlrejection') {
        await markAsWithdrawlRejection({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'published') {
        await markAsPublished({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      } else if (mark === 'unpublished') {
        await markAsPublished({
          receipts: state.checkedIds,
          active_account: active_account || '',
        });
      }      
      onFetchReceiptsHandler(fetchParams);
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsDatePickerOpen();
  };

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const {
    items: sortedReceipts,
    requestSort,
    sortField,
    sortOrder,
  } = useSortableData({
    items: receipts,
  });

  const primaryAction = "upload-receipt"

  // resolve with chatgpt search
  // type yesyes = IPaginationPanelProps['paginationCustomStyle'] extends undefined ? undefined : IPaginationPanelProps['paginationCustomStyle']['position'];
  const paginationCustomStyle: IPaginationPanelProps['paginationCustomStyle'] = {
    position: "fixed"
  }

  const isActionMenuDisabled = !state.checkedIds.length;
  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const {
		isLoading,
		isCreateReportModalOpen,
		// modalInputValue,
		// modalInputDate,
		// modalInputName,
		// onChangeExpenseUserValueHandler,
		// onCreateExpenseHandler,
		onEnterCreateCategoryClick,
		onReportModalToggle,
		// isDeleteModalWindowOpen,
		// onDeleteModalWindowToggle,
		// onDeleteButtonClickHandler,
		// selectedCategory,
		// isEdit,
		// isDisableButton,
		// onSaveButtonClickHandler,
		// onModalWindowCancelClickButtonHandler,
		// onChangeExpenseDateValueHandler,
		// onChangeExpenseNameValueHandler,
	} = useExpenseReportState();

  const InBoxActionList = [
    {
      actionListlabel: "Add to Expense",
      actionListHandler: () => onReportModalToggle()
    },
    {
      actionListlabel: "Mark as Paid",
      actionListHandler: () => onMarkAsHandler('paid')
    },
    {
      actionListlabel: "Mark as Unpaid",
      actionListHandler: () => onMarkAsHandler('unpaid')
    },
    {
      actionListlabel: "Mark as Approved",
      actionListHandler: () => onMarkAsHandler('approved')
    },
    {
      actionListlabel: "Mark as Rejected",
      actionListHandler: () => onMarkAsHandler('rejected')
    },
    {
      actionListlabel: "Mark as Published",
      actionListHandler: () => onMarkAsHandler('published')
    },
    {
      actionListlabel: "Mark as Unpublished",
      actionListHandler: () => onMarkAsHandler('unpublished')
    },
    {
      actionListlabel: "Withdrawl Approval",
      actionListHandler: () => onMarkAsHandler('withdrawlapproval')
    },
    {
      actionListlabel: "Withdrawl Rejection",
      actionListHandler: () => onMarkAsHandler('withdrawlrejection')
    },
    {
      actionListlabel: "Send as Email",
      actionListHandler: () => onEmailClick()
    },
    {
      actionListlabel: "Delete",
      actionListHandler: () => onDeleteReceiptHandler()
    },
    {
      actionListlabel: "Export to Excel",
      actionListHandler: () => onDownloadExcelFileHandler()
    },
    {
      actionListlabel: "Export to CSV",
      actionListHandler: () => onClickDownloadCSVButtonHandler()
    },
    {
      actionListlabel: "Export to PDF",
      actionListHandler: () => onClickDownloadCSVButtonHandler()
    },
  ];

  const [isUploadingModalOpen, onUploadingModalToggle] = useToggle();

  return {
    //common
    ...state,
    active_account,
    userRole,
    count,  //no of data send to user, currently to display
    totalCount, //total no of data in database
    company,
    debouncedValue,
    isCompanyChanged,
    fetchParams,  //APi
    sortedReceipts,
    requestSort,
    sortField,
    sortOrder,
    receipts, //real data for the module
    onFetchReceiptsHandler, // handler for fetching real data
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    isAllChecked,

    //header pannel
    //header-pannel search
    onChangeSearchValueHandler,
    //Action Button
    primaryAction,
    onSelectFilesHandler,
    location, // this is a location for Routing after upload
    //item status filter
    onChangeStatusValueHandler,
    //datePicker
    onChangeDateFilterValueHandler,
    datePickerRef, 
    dateEnd,
    dateStart,
    onClickOutsideDatePickerHandler,
    isDatePickerOpen,
    setIsDatePickerOpen,
    onChangeDate,
    onBlurHandler,
    onFocusSearchHandler,
    //Action 
    InBoxActionList,
    onDownloadExcelFileHandler,
    isActionMenuButtonDisabled,
    onActionsClick,
    onActionsClose,
    onClickDownloadCSVButtonHandler,
    onCheckedPublishMockFuncHandler,
    onDeleteReceiptHandler,
    onMarkAsHandler,
    csvLink,
    excelRef,
    //Email
    isEmailModalWindowOpen,
    onEmailModalWindowToggle,
    onCloseEmailModalHandler,
    onEmailClick,
    onPostEmailHandler,
    formik, // for email validation

    //pagination props
    paginationCustomStyle,
    setCurrentPage,
    itemsPerPage,
    currentPage,
    inputPaginationValue,
    pages,
    onChangePagesAmount,
    onChangePage,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onGoToClick,
    onChangeItemsPerPage,
    onChangePaginationInputValue,

    //Table content
    onCheckedItemHandler,
    onCheckedAllItemsHandler,
    onCheckedPaidHandler,
    onCheckedApproveHandler,

    isUploadingModalOpen,
    onUploadingModalToggle,
  };
};


// receiptsPerPage,