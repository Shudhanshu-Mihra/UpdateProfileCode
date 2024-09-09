import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUserRole } from 'services/utils';

import { ActionMeta, SingleValue } from 'react-select';
import { FormikHelpers, useFormik } from 'formik';
import { format } from 'date-fns';
import { CSVLink } from 'react-csv';

import { setAndFormatDateToISO } from 'services/utils';
import { emailSendValidationSchema } from 'services/validation';
import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { useSelectFiles } from 'hooks/useSelectFiles';
import { usePagination } from 'hooks/usePagination';
import { useSortInvoiceTable } from 'hooks/useSortInvoiceTable';

// import { formikInitialValues, INITIAL_STATE } from './inbox.constants';

import { ROUTES } from 'constants/routes';
import { IuseSalesInvoicesState, /* IGetReceiptsParams, */  IPostEmail, } from './types/salesInvoices.types';
import { formikInitialValues, INVOICE_INITIAL_STATE } from './salesInvoices.constants';
import { updateInvoiceItem, postEmail, getInvoices, invoiceDeleteAPI, markAsInvoicePaid, markAsInvoiceUnpaid, markAsInvoiceApproved, markAsInvoiceRejected, markAsInvoicePublished, markAsInvoiceUnpublished, markAsInvoiceWithdrawlApproval, markAsInvoiceWithdrawlRejection } from './sales.api';
import { setInvoicesList, setIsCompanyChanged, setIsFetchingData, setCheckedItem, setCheckedAllItems } from './reducer/salesInvoices.reducer';

export const useSalesInvoicesState = () => {
  const {
    invoices: {
      totalCount,
      count,
      invoicesList,
      isCompanyChanged,
      isAllChecked,
    },
    user: { user: { active_account, accounts }, userInfo: { company }, token },
  } = useSelector((state: IState) => state);
  console.log('IN-LIST', invoicesList);

  const userRole = getUserRole(accounts || [], active_account || '')
    ?.role as TRoles;

  const [state, setState] = useState<IuseSalesInvoicesState>(INVOICE_INITIAL_STATE);

  const invoice_formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: async (values, actions) => values,
    validationSchema: emailSendValidationSchema,
  });

  const onChangeStateFieldHandler = (
    optionName: keyof typeof INVOICE_INITIAL_STATE,
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
  const debouncedValue = useDebounce(state.searchValue, 900);

  const dateStart = state.datePickerValue && setAndFormatDateToISO(state.datePickerValue.toISOString());
  const dateEnd = state.datePickerValue && setAndFormatDateToISO(state?.datePickerValue.toISOString(), true);

  const onChangePage = async ({ selected }: { selected: number }) => {
    await onFetchSalesInvoicesHandler({
      ...fetchParams,
      skip: selected * +itemsPerPage.value,
    });
    onChangePageHandler(selected);
  };

  const onChangeItemsPerPage = async (newValue: IOption) => {
    setItemsPerPage(newValue);
    if (!totalCount) return;
    await onFetchSalesInvoicesHandler({
      ...fetchParams,
      take: +newValue.value,
      skip: 0,
    });
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
    setCurrentPage,
    itemsPerPage,  //: receiptsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({
    onChangePage,
  });

  const fetchParams = {
    search: debouncedValue,
    status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
    take: +itemsPerPage.value,
    skip: currentPage * +itemsPerPage.value,
    date_start: dateStart || '',
    date_end: dateEnd || '',
    active_account: active_account || '',
  };

  const onSelectFiles = useSelectFiles();

  const onSelectSalesFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectFiles({
      files: event.target.files,
      location,
      route: ROUTES.filesUploadPreviewsales,
      upload_action: 'sales-invoices'   // this will help to which api to be called. if you not passed it upload purchase receipts
    });
  };

  const onFetchSalesInvoicesHandler = async (params?: any) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        checkedInvoiceIds: [],
      }));
      console.log('loading true');
      const { data } = await getInvoices({
        ...params,
        active_account: active_account || '',
      });
      console.log('loading to be false');

      console.warn('%%%%%', data);
      isCompanyChanged && dispatch(setIsCompanyChanged(false));
      dispatch(
        setInvoicesList({
          count: data.count,
          data: data.data,
          totalCount: data.totalCount,
        })
      );
      setState((prevState) => ({
        ...prevState,
        isEmptyData: data.totalCount ? false : true,
        isFetchingInvoice: false,
        isContentLoading: false,
      }));
      console.log('loading false');
    } catch (error) {
      dispatch(setIsFetchingData(false));
      setState((prevState) => ({
        ...prevState,
        isFetchingInvoice: false,
        isEmptyData: false,
        isContentLoading: false,
        checkedInvoiceIds: [],
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
      const isEqual = Array.isArray(state.datePickerRangeValue) ? state.datePickerRangeValue[0]?.toISOString() === date[0].toISOString() && state.datePickerRangeValue[1]?.toISOString() === date[1].toISOString() : null;
      setState((prevState) => (
        {
          ...prevState,
          dateRangeValue: isEqual ? null : date,
          formattedDate: isEqual ? '' : `${format(date[0], company.date_format)} - ${format(date[1], company.date_format)}`,
        }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date[0].toISOString());
      const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);

      await onFetchSalesInvoicesHandler({
        ...fetchParams,
        date_start: isEqual ? '' : dateStart,
        date_end: isEqual ? '' : dateEnd,
      });
    } else {
      const isEqual = state.datePickerValue?.toISOString() === date.toISOString();
      setState((prevState) => ({
        ...prevState,
        dateValue: isEqual ? null : date,
        formattedDate: isEqual ? '' : format(date, company.date_format),
      }));
      setIsDatePickerOpen();
      const dateStart = setAndFormatDateToISO(date.toISOString());
      const dateEnd = setAndFormatDateToISO(date.toISOString(), true);

      await onFetchSalesInvoicesHandler({
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
    await onFetchSalesInvoicesHandler({
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
      await onFetchSalesInvoicesHandler({
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

  const onCloseModalWindowHandler = () => {
    onEmailModalWindowToggle();
  };

  const onActionsClick = () => onChangeStateFieldHandler('showActions', !state.showActions);
  const onActionsClose = () => onChangeStateFieldHandler('showActions', false);

  const onCheckedItemHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setCheckedItem(event.target.id));
      setState((prevState) => ({
        ...prevState,
        checkedInvoiceIds: prevState.checkedInvoiceIds.includes(event.target.id)
          ? prevState.checkedInvoiceIds.filter(
            (item: string) => item !== event.target.id
          )
          : [...prevState.checkedInvoiceIds, event.target.id],
      }));
    },
    []
  );

  const onCheckedAllItemsHandler = useCallback(() => {
    dispatch(setCheckedAllItems(!isAllChecked));
    setState((prevState) => ({
      ...prevState,
      checkedInvoiceIds: !isAllChecked ? invoicesList?.map((invoice) => invoice.id) : [],
    }));
  }, [dispatch, isAllChecked, invoicesList]);

  const onCheckedPaidHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedInvoice = invoicesList?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateInvoiceItem({
          id: event.target.id,
          payment_status: !selectedInvoice?.payment_status,
          active_account: active_account || '',
        });
        await onFetchSalesInvoicesHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, invoicesList]
  );
  const onCheckedApproveHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedInvoice = invoicesList?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateInvoiceItem({
          id: event.target.id,
          // approve_status: !selectedInvoice?.approve_status,
          status: selectedInvoice?.status == 'approved' ? 'review' : 'approved',
          active_account: active_account || '',
        });
        await onFetchSalesInvoicesHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, invoicesList]
  );
  const onCheckedPublishMockFuncHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
        const selectedInvoice = invoicesList?.find(
          (receipt: { id: string }) => receipt.id === event.target.id
        );
        await updateInvoiceItem({
          id: event.target.id,
          publish_status: !selectedInvoice?.publish_status,
          active_account: active_account || '',
        });
        await onFetchSalesInvoicesHandler(fetchParams);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, invoicesList]
  );

  // =============================================================>
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
    postEmailValues: Omit<IPostEmail, 'invoices' | 'active_account'>,
    actions: FormikHelpers<typeof formikInitialValues>
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await postEmail({
        ...postEmailValues,
        invoices: state.checkedInvoiceIds,
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

  const csvLink = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);

  const excelRef = useRef<HTMLAnchorElement>(null);

  const onDownloadExcelFileHandler = async () => {
    try {
      if (!state.checkedInvoiceIds.length) return;

      const url = URL.createObjectURL(new Blob([]));
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
      onChangeStateFieldHandler('csvData', '');
      setTimeout(() => csvLink.current && csvLink.current.link.click(), 100);
    } catch (error) {
      console.log(error);
    }
  };

  const isActionMenuDisabled = !state.checkedInvoiceIds.length;


  const onDeleteInvoiceHandler = async () => {
    try {
      const isLastReceiptOnPage = totalCount === state.checkedInvoiceIds.length;
      const isEqualAmount = invoicesList.length === state.checkedInvoiceIds.length;
      let skipReceipts = 0;

      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        // isFetchingInvoice: true,
        checkedInvoiceIds: [],
      }));
      await invoiceDeleteAPI(
        { receipts: state.checkedInvoiceIds, active_account: active_account || '' },
        token
      );

      setState((prevState) => ({
        ...prevState,
        searchValue:
          invoicesList.length === 1 || state.searchValue
            ? ''
            : prevState.searchValue,
        // isContentLoading: InvoiceActionList.length !== 1 ? true : false,
        // isFetchingReceipts: isLastReceiptOnPage ? true : false,
        statusValue: isLastReceiptOnPage
          ? INVOICE_INITIAL_STATE.statusValue
          : prevState.statusValue,
        dateValue: isLastReceiptOnPage ? null : prevState.datePickerValue,
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
        (await onFetchSalesInvoicesHandler({
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
        await markAsInvoicePaid({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'unpaid') {
        await markAsInvoiceUnpaid({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'approved') {
        await markAsInvoiceApproved({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'withdrawlapproval') {
        await markAsInvoiceWithdrawlApproval({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'rejected') {
        await markAsInvoiceRejected({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'withdrawlrejection') {
        await markAsInvoiceWithdrawlRejection({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'published') {
        await markAsInvoicePublished({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      } else if (mark === 'unpublished') {
        await markAsInvoicePublished({
          receipts: state.checkedInvoiceIds,
          active_account: active_account || '',
        });
      }      
      onFetchSalesInvoicesHandler(fetchParams);
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  // const onDeleteReceiptHandler = async () => {
  //   try {
  //     const isLastReceiptOnPage = totalCount === state.checkedIds.length;
  //     const isEqualAmount = receipts.length === state.checkedIds.length;
  //     let skipReceipts = 0;

  //     await receiptDelete(
  //       { receipts: state.checkedIds, active_account: active_account || '' },
  //       token
  //     );

  //     setState((prevState) => ({
  //       ...prevState,
  //       searchValue:
  //         receipts.length === 1 || state.searchValue
  //           ? ''
  //           : prevState.searchValue,
  //       isContentLoading: receipts.length !== 1 ? true : false,
  //       isFetchingReceipts: isLastReceiptOnPage ? true : false,
  //       statusValue: isLastReceiptOnPage
  //         ? INITIAL_STATE.statusValue
  //         : prevState.statusValue,
  //       dateValue: isLastReceiptOnPage ? null : prevState.dateValue,
  //       formattedDate: isLastReceiptOnPage ? '' : prevState.formattedDate,
  //     }));

  //     if (currentPage === 0) {
  //       skipReceipts = 0;
  //     } else {
  //       skipReceipts = currentPage * +itemsPerPage.value;
  //     }

  //     if (isEqualAmount && !!currentPage && count) {
  //       skipReceipts = (currentPage - 1) * +itemsPerPage.value;
  //       onChangePageHandler(currentPage - 1);
  //     }

  //     !state.searchValue &&
  //       (await onFetchReceiptsHandler({
  //         ...fetchParams,
  //         skip: skipReceipts,
  //       }));
  //     onActionsClick();
  //   } catch (error) {
  //     onActionsClick();
  //     console.log(error);
  //   }
  // };

  const onMarkAsPaidButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('isContentLoading', true);
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };
  // const onMarkAsHandler = async () => {
  //   try {
  //     onChangeStateFieldHandler('isContentLoading', true);
  //     onActionsClick();
  //   } catch (error) {
  //     onActionsClick();
  //     console.log(error);
  //   }
  // };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsDatePickerOpen();
  };

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const {
    items: sortedInvoices,
    requestSort,
    sortField,
    sortOrder,
  } = useSortInvoiceTable({
    items: invoicesList,
  });

  const InvoiceActionList = [
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
      actionListHandler: () => onEmailModalWindowToggle()
    },
    {
      actionListlabel: "Delete",
      actionListHandler: () => onDeleteInvoiceHandler()
    },
    {
      actionListlabel: "Export to Excel",
      // actionListHandler: () => console.log('Hi! krishiv')
    },
    {
      actionListlabel: "Export to CSV",
      // actionListHandler: () => console.log('Hi! krishiv')
    },
    {
      actionListlabel: "Export to PDF",
      // actionListHandler: () => console.log('Hi! krishiv')
    },
  ];

  return {
    ...state,
    userRole,
    invoice_formik,
    isCompanyChanged,
    totalCount,
    fetchParams,
    sortedInvoices,
    requestSort,
    sortField,
    sortOrder,
    datePickerRef,
    count,
    location,
    isAllChecked,
    dateEnd,
    dateStart,
    debouncedValue,
    onDownloadExcelFileHandler,
    isActionMenuDisabled,
    csvLink,
    excelRef,
    isDatePickerOpen,
    setIsDatePickerOpen,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    isEmailModalWindowOpen,
    onEmailModalWindowToggle,
    onEmailClick,
    InvoiceActionList,  //
    onPostEmailHandler,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseModalWindowHandler,
    onChangeDate,
    onChangeSearchValueHandler,
    onSelectSalesFilesHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onChangeItemsPerPage,
    onActionsClick,
    onActionsClose,
    onCheckedItemHandler,
    onClickDownloadCSVButtonHandler,
    onCheckedPublishMockFuncHandler,
    onDeleteInvoiceHandler,
    onMarkAsPaidButtonHandler,
    onMarkAsHandler,
    onClickOutsideDatePickerHandler,
    onFocusSearchHandler,
    onBlurHandler,

    onFetchSalesInvoicesHandler,
    active_account,
    onCheckedAllItemsHandler,
    company,

    //props for pagination
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
    onChangePage,
  };
};
