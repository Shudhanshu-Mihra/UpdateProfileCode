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


import { getAllReportsApi, createExpenseReportApi } from './expenseReport.api';
import { REPORT_INITIAL_STATE } from './expenseReport.constants';
import {
  IcreateReportHandlerParams,
  IuseReportState,
} from './types/expenseReport.types';
import {
  setReports,
  selectReport,
  selectReportWithId,
  setIsFetchingDate,
  updateReport,
  setReportCheckedItem,
  setCheckedAllItems,
  setIsCompanyChanged
} from './reducer';
// import { ModalInputs } from 'components/InsertUserModalWindow/ModalInputs';

export const useExpenseReportState = () => {
  const {
    reports: {
      totalCount,
      count,
      reportsList,
      isCompanyChanged,
      isAllChecked,
    },
    user: { user: { active_account, accounts }, userInfo: { company }, token },
  } = useSelector((state: IState) => state);
  // const {reports, user} = useSelector((state: IState) => state);
  // console.log('***FROM-reports', reports, user);

  const userRole = getUserRole(accounts || [], active_account || '')
    ?.role as TRoles;

  const initialState = REPORT_INITIAL_STATE;
  const [state, setState] = useState<IuseReportState>(initialState);

  const dispatch = useDispatch();
  const location = useLocation();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const debouncedValue = useDebounce(state.searchValue, 250);

  const [isCreateReportModalOpen, onReportModalToggle] = useToggle();
  // const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onFetchAllReportHandler = async (params?: IcreateReportHandlerParams) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        checkedIds: [],
      }));
      const { data } = await getAllReportsApi({
        ...params,
        active_account: active_account || '',
      });
      // console.log(data);
      isCompanyChanged && dispatch(setIsCompanyChanged(false));
      dispatch(
        setReports({
          count: data.count,
          data: data.data,
          totalCount: data.totalCount,
        })
      );
      setState((prevState) => ({
        ...prevState,
        isEmptyData: data.totalCount ? false : true,
        isFetchingReports: false,
        isContentLoading: false,
      }));
    } catch (error) {
      dispatch(setIsFetchingDate(false));
      setState((prevState) => ({
        ...prevState,
        isFetchingReports: false,
        isEmptyData: false,
        isContentLoading: false,
        checkedIds: [],
      }));
      console.log(error);
    }
  };

  const onChangePage = async ( {selected}: {selected: number}) => {
    await onFetchAllReportHandler({
      ...reportFetchParams,
      skip: selected * +itemsPerPage.value,
    });
    onChangePageHandler(selected);
    // onChangePageHandler(selected);
  };

  const onChangeStateFieldHandler = (
    optionName: keyof typeof REPORT_INITIAL_STATE,
    value: boolean | string | number | IuseReportState | SingleValue<IOption> | any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  // useEffect(() => {
  //   !count && onChangeStateFieldHandler('isEmptyData', true);
  // }, []);
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
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({
    onChangePage,
  });

  const reportFetchParams = {
    search: debouncedValue,
    take: +itemsPerPage.value,
    skip: currentPage * +itemsPerPage.value,
    active_account: active_account || '',
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isSearching: true,
      isContentLoading: true,
    }));
  };

  const onChangeReportFormType = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputReportFor', event.target.value);

  const onChangeReportForHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputReportFor', event.target.value);

  const onChangeReportDateHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputReportDate', event.target.value);

  const onChangeReportNameHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputReportName', event.target.value);

  const modalReportCreateButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      !count && onChangeStateFieldHandler('isFetchingReports', true);

      await createExpenseReportApi(
        { report_for: state.modalInputReportFor, report_date: state.modalInputReportDate, report_name: state.modalInputReportName, report_receipt: [], active_account },
      );
      onChangePageHandler(0);
      await onFetchAllReportHandler({
        take: +itemsPerPage.value,
      });

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        modalInputValue: '',
      }));
      onReportModalToggle();
    } catch (error) {
      console.log(error);
      onReportModalToggle();
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        isFetchingData: false,
        modalInputValue: '',
      }));
    }
  };

  const onEnterCreateCategoryClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    modalReportCreateButtonHandler();
    // state.isEdit ? onSaveButtonClickHandler() : onCreateReportHandler();
  };

  const onCheckedReportHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setReportCheckedItem(event.target.id));
      setState((prevState) => ({
        ...prevState,
        checkedReportIds: prevState.checkedReportIds.includes(event.target.id)
          ? prevState.checkedReportIds.filter(
            (item: string) => item !== event.target.id
          )
          : [...prevState.checkedReportIds, event.target.id],
      }));
      console.log(state.checkedReportIds);
    },
    []
  );
  // console.log(state.checkedReportIds);

  const onCheckedAllReportHandler = useCallback(() => {
    dispatch(setCheckedAllItems(!isAllChecked));
    setState((prevState) => ({
      ...prevState,
      checkedReportIds: !isAllChecked ? reportsList?.map((report) => report.expense_report_id) : [],
    }));
  }, [dispatch, isAllChecked, reportsList]);

  // const onDeleteItemClickHandler = async (itemId: string) => {
  //   try {
  //     const { data } = await getTabItemById(itemId, 'category', active_account);
  //     dispatch(setTabItem(data));
  //     onReportModalToggle();
  //   //  onDeleteModalWindowToggle();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onDeleteButtonClickHandler = async () => {
  //   try {
  //     const isLastElementOnPage = categoriesList.length === 1;
  //     count === 1 && onChangeStateFieldHandler('isFetchingData', true);
  //     onChangeStateFieldHandler('isLoading', true);

  //     const skip =
  //       currentPage === 0
  //         ? 0
  //         : isLastElementOnPage && count !== 1
  //         ? (currentPage - 1) * +itemsPerPage.value
  //         : currentPage * +itemsPerPage.value;

  //     await deleteTabItem(
  //       selectedCategory?.id || '',
  //       'category',
  //       active_account
  //     );
  //     const { data } = await getAllTabItems('category', {
  //       take: +itemsPerPage.value,
  //       skip,
  //       active_account,
  //     });

  //     onDeleteItem(count, isLastElementOnPage);
  //     dispatch(setCategories({ count: data.count, data: data.data }));
  //     onChangeStateFieldHandler('isLoading', false);
  //     onChangeStateFieldHandler('searchValue', '');
  //     onChangeStateFieldHandler('isEmptyData', data.count ? false : true);
  //     count === 1 && onChangeStateFieldHandler('isFetchingData', false);
  //     onReportModalToggle();
  //   } catch (error) {
  //     onChangeStateFieldHandler('isEmptyData', !count ? true : false);
  //     onChangeStateFieldHandler('isFetchingData', false);
  //     onChangeStateFieldHandler('isLoading', false);
  //     onChangeStateFieldHandler('searchValue', '');
  //     onReportModalToggle();
  //     console.log(error);
  //   }
  // };

  // const onEditItemClickHandler = async (itemId: string) => {
  //   try {
  //     const { data } = await getTabItemById(itemId, 'category', active_account);
  //     dispatch(setTabItem(data));
  //     onReportModalToggle();
  //     setState((prevState) => ({
  //       ...prevState,
  //       modalInputValue: data?.name || '',
  //       prevInputValue: data?.name,
  //       isEdit: true,
  //     }));
  //   } catch (error) {
  //     setState((prevState) => ({
  //       ...prevState,
  //       modalInputValue: '',
  //       prevInputValue: '',
  //       isEdit: false,
  //     }));
  //     console.log(error);
  //   }
  // };

  const isActionMenuDisabled = !state.checkedReportIds.length;

  const onChangeReportsPerPage = async (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');

    await onFetchAllReportHandler({
      take: +itemsPerPage.value,
    });

    onChangeStateFieldHandler('isContentLoading', false);
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(+newValue?.value, count);
  };
  // const isDisableButton = state.modalInputReportName === state.prevInputValue && state.modalInputDate === state.prevInputValue;

  const modalReportCancelButtonHandler = () => {
    setState((prevState) => ({
      ...prevState,
      modalInputValue: '',
      modalInputDate: '',
      modalInputName: '',
      isEdit: false,
    }));
    onReportModalToggle();
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  // const {
  //   items: sortedReports,
  //   requestSort,
  //   sortField,
  //   sortOrder,
  // } = useSortableData({
  //   items: reportsList,
  // });
  const sortedReports = reportsList;
  const sortField = '';
  const sortOrder:TSorterOrder = 'asc'; 

  const paginationCustomStyle: IPaginationPanelProps['paginationCustomStyle'] = {
    position: "fixed"
  }
  const expReportActionList = [
    {
      actionListlabel: "Send",
      actionListHandler: () => console.log('Hi! Jigar')
    },
    {
      actionListlabel: "Export to Excel",
      actionListHandler: () => console.log('Hi! krishiv')
    },
    {
      actionListlabel: "Export to CSV",
      actionListHandler: () => console.log('Hi! krishiv')
    },
    {
      actionListlabel: "Export to PDF",
      actionListHandler: () => console.log('Hi! krishiv')
    },
    {
      actionListlabel: "Dummy",
    }
  ];

  return {
    ...state,
    userRole,
    reportsList,
    sortedReports,
    sortField,
    sortOrder,
    debouncedValue,
    active_account,
    onBlurHandler,
    onFocusSearchHandler,
    // onChangePagesAmount,
    onChangeSearchValueHandler,
    // onGetAllCategoriesHandler,
    // onDeleteModalWindowToggle,
    isCreateReportModalOpen,
    onReportModalToggle,
    onEnterCreateCategoryClick,

    // form handler
    onChangeReportFormType,
    onChangeReportForHandler,
    onChangeReportDateHandler,
    onChangeReportNameHandler,
    modalReportCreateButtonHandler,
    modalReportCancelButtonHandler,

    onCheckedReportHandler,
    onCheckedAllReportHandler,

    company,
    isCompanyChanged,
    count,

    isAllChecked,
    selectReport,
    selectReportWithId,
    setIsFetchingDate,
    updateReport,
    setReportCheckedItem,
    setCheckedAllItems,
    setIsCompanyChanged,
    // onDeleteItemClickHandler,
    // onDeleteButtonClickHandler,
    // onEditItemClickHandler,
    // onSaveButtonClickHandler,
    // isDisableButton,

    onFetchAllReportHandler,
    reportFetchParams,
    expReportActionList,
    isActionMenuDisabled,

    //pagination Props
    paginationCustomStyle,
    itemsPerPage,
    currentPage,
    inputPaginationValue,
    pages,
    setCurrentPage,
    onChangePagesAmount,
    onChangePage,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onGoToClick,
    onChangePaginationInputValue,
    onChangeReportsPerPage,
  };
};
