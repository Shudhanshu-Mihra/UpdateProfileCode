import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionMeta } from 'react-select';
import { useToggle } from 'hooks/useToggle';
import { getUserCompanies } from 'components/Header/header.api';
import { format } from 'date-fns';
import { IState } from 'services/redux/reducer';
import {
  getLastMonthDateRange,
  getTodayDateRange,
  getYesterdayDateRange,
  getThisMonthDateRange,
  getThisYearDateRange,
  getLastYearDateRange,
  getThisWeekDateRange,
  getLastWeekDateRange,
} from 'services/utils';
import { useGetCompanyLogo } from 'hooks/useGetCompanyLogo';
import { useSelectFiles } from 'hooks/useSelectFiles';

import { updateUserData } from '../SignUp/reducer/signup.reducer';
import { setCompanySwitcher } from '../Settings/reducer/settings.reducer';
import { getReceiptStatistic } from './dashboard.api';
import { DASHBOARD_INITIAL_STATE, getTimeFilterOptions } from './dashboard.constants';
import { setAndFormatDateToISO } from 'services/utils';
import { setStatistic } from './reducer/dashboard.reducer';
import { ITimeFIlterValue, IUserInfoData } from './types';
import { ROUTES } from '../../constants/routes';
import { updateInvoiceItem, postEmail, getInvoices, invoiceDeleteAPI, markAsInvoicePaid, markAsInvoiceUnpaid, markAsInvoiceApproved, markAsInvoiceRejected, markAsInvoicePublished, markAsInvoiceUnpublished, markAsInvoiceWithdrawlApproval, markAsInvoiceWithdrawlRejection } from '../../screens/SalesInvoices/sales.api';

import { setInvoicesList, setIsCompanyChanged, setIsFetchingData, setCheckedItem, setCheckedAllItems } from '../../screens/SalesInvoices/reducer/salesInvoices.reducer';
import { boolean } from 'yup';
export interface IuseDashboardState {
  isFetchingDashboard: boolean;
  dateFilterValue: {
    value: string;
    label: string;
  };
  isContentLoading: boolean;
  datePickerValue: Date | null;
  datePickerRangeValue: Date[] | null;
  formattedDate: string;
  isInputDate: boolean;
  isLoading: boolean;
}


export const useDashboardState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getCompanyLogo = useGetCompanyLogo();
  const {
    dashboard: { metric, receipts, companies },
    user: {
      userInfo: { company },
      user,
      token,
    },
    settings: { companySwitcher },
  } = useSelector((state: IState) => state);

  const [state, setState] = useState<IuseDashboardState>(DASHBOARD_INITIAL_STATE);
  const timeFilterOptions = getTimeFilterOptions();
  //new
  const [newData, setNewData] = useState();
  const [salesDash, setSalesDash] = useState({});
  const [purchaseDash, setPurchaseDash] = useState({});
  const [latestTimeLineData, setLatestTimeLineData] = useState([]);
  const onFetchDashboardHandler = () => {
    console.log("onFetchDashboardHandler is calling");
  }
  const totalReceiptCount =
    Number(metric?.accepted) +
    Number(metric?.rejected) +
    Number(metric?.processing) +
    Number(metric?.review);

  const [timeFilterValue, setTimeFilterValue] = useState<ITimeFIlterValue>(
    timeFilterOptions[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isContentLoading, setIsContentLoading] = useState(false);

  const onSelectFiles = useSelectFiles();

  const navigateToInvites = () => navigate(ROUTES.invites, { replace: true });

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSelectFiles({
      files: event.target.files,
      location,
      route: 'inbox/files-upload-preview',
    });
  const getReceiptsStatisticHandler = async (
    timeFrames?: { date_start: string; date_end: string },
    isTimeFilter?: boolean
  ) => {
    try {
      if (isTimeFilter) {
        setIsContentLoading(true);
      } else {
        setIsLoading(true);
      }
      const payload = {
        date_start: timeFrames?.date_start || '',
        date_end: timeFrames?.date_end || '',
        // active_account: user?.active_account || '',
      };
      const { data } = await getReceiptStatistic(payload);
      setNewData(data);
      const companiesWithLogo = await getCompanyLogo(data.companies, token);
      const salesDash = {
        processing: data.metrics.receipt.processing.toString() || "0",
        review: data.metrics.receipt.review.toString() || "0",
        rejected: data.metrics.receipt.rejected.toString() || "0",
        approved: data.metrics.receipt.approved.toString() || "0",
      };
      const purchaseDash = {
        processing: data.metrics["sale-invoice"].processing.toString() || "0",
        review: data.metrics["sale-invoice"].review.toString() || "0",
        rejected: data.metrics["sale-invoice"].rejected.toString() || "0",
        approved: data.metrics["sale-invoice"].approved.toString() || "0",
      };
      setSalesDash(salesDash);
      setPurchaseDash(purchaseDash);
      const latestTimeLineData = data.recent.slice(0, 5);
      setLatestTimeLineData(latestTimeLineData)
      //new
      dispatch(setStatistic({ ...data, companies: companiesWithLogo, salesDash, purchaseDash, latestTimeLineData}));
      
      if (!user.accounts?.length && !user.active_account && !company.name) {
        const { account, company } = data.companies[0];
        setUserInfo({ active_account: account.id, account, company });
      }
      if (isTimeFilter) {
        setIsContentLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsContentLoading(false);
      setIsLoading(false);
      console.log(error);
    }
  };
  const lastReceipts = receipts?.data.slice(0, 5);

  const dateHashMapping: Record<
    string,
    { date_start: string; date_end: string }
  > = {
    Today: getTodayDateRange(),
    Yesterday: getYesterdayDateRange(),
    'Last Week': getLastWeekDateRange(),
    'This Week':getThisWeekDateRange(),
    'This Month':getThisMonthDateRange(),

    'Last Month': getLastMonthDateRange(),
    'This Year':getThisYearDateRange(),
    'Last Year':getLastYearDateRange()
  
  };

  const onChangeCategoryFieldHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    if (timeFilterValue.value === newValue.value) return;
    setTimeFilterValue(newValue);
    getReceiptsStatisticHandler(dateHashMapping[newValue.value], true);
  };

  const setUserInfo = async (userData: IUserInfoData) => {
    try {
      if (!companySwitcher.length) {
        const { data } = await getUserCompanies();
        dispatch(setCompanySwitcher(data || []));
      }
      const { company, active_account, account } = userData;
      dispatch(updateUserData({ company, account, active_account }));
    } catch (err) {
      console.log(err);
    }
  };

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const [isDatePickerOpen, setIsDatePickerOpen] = useToggle();

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsDatePickerOpen();
  };
  // const onChangeDate = async (date: Date) => {
  //   if (Array.isArray(date)) {
  //     const isEqual = Array.isArray(state.datePickerRangeValue) ? state.datePickerRangeValue[0]?.toISOString() === date[0].toISOString() && state.datePickerRangeValue[1]?.toISOString() === date[1].toISOString() : null;
  //     setState((prevState) => (
  //       {
  //         ...prevState,
  //         dateRangeValue: isEqual ? null : date,
  //         formattedDate: isEqual ? '' : `${format(date[0], company.date_format)} - ${format(date[1], company.date_format)}`,
  //       }));
  //     setIsDatePickerOpen();
  //     const dateStart = setAndFormatDateToISO(date[0].toISOString());
  //     const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);

  //     // await onFetchSalesInvoicesHandler({
  //     //   ...fetchParams,
  //     //   date_start: isEqual ? '' : dateStart,
  //     //   date_end: isEqual ? '' : dateEnd,
  //     // });
  //   } else {
  //     const isEqual = state.datePickerValue?.toISOString() === date.toISOString();
  //     setState((prevState) => ({
  //       ...prevState,
  //       dateValue: isEqual ? null : date,
  //       formattedDate: isEqual ? '' : format(date, company.date_format),
  //     }));
  //     setIsDatePickerOpen();
  //     const dateStart = setAndFormatDateToISO(date.toISOString());
  //     const dateEnd = setAndFormatDateToISO(date.toISOString(), true);
  //     // await onFetchSalesInvoicesHandler({
  //     //   ...fetchParams,
  //     //   date_start: isEqual ? '' : dateStart,
  //     //   date_end: isEqual ? '' : dateEnd,
  //     // });
  //   }
  // };
  const formatDateonly = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
const onChangeDate = async (date: Date | Date[]) => {
  if (Array.isArray(date)) {
    const isEqual = Array.isArray(state.datePickerRangeValue) 
      ? state.datePickerRangeValue[0]?.toISOString() === date[0].toISOString() && 
        state.datePickerRangeValue[1]?.toISOString() === date[1].toISOString() 
      : false;
    setState((prevState) => ({
      ...prevState,
      dateRangeValue: isEqual ? null : date,
      formattedDate: isEqual ? '' : `${formatDateonly(date[0])} - ${formatDateonly(date[1])}`,
      
    }));
    setIsDatePickerOpen();
    const dateStart = setAndFormatDateToISO(date[0].toISOString());
    const dateEnd = setAndFormatDateToISO(date[1].toISOString(), true);
    const {data} = await getReceiptStatistic({
      date_start: isEqual ? '' : dateStart,
      date_end: isEqual ? '' : dateEnd,
    });
    setNewData(data);
    const salesDash = {
      processing: data.metrics.receipt.processing.toString() || "0",
      review: data.metrics.receipt.review.toString() || "0",
      rejected: data.metrics.receipt.rejected.toString() || "0",
      approved: data.metrics.receipt.approved.toString() || "0",
    };
    const purchaseDash = {
      processing: data.metrics["sale-invoice"].processing.toString() || "0",
      review: data.metrics["sale-invoice"].review.toString() || "0",
      rejected: data.metrics["sale-invoice"].rejected.toString() || "0",
      approved: data.metrics["sale-invoice"].approved.toString() || "0",
    };
    setSalesDash(salesDash);
    setPurchaseDash(purchaseDash);
    const latestTimeLineData = data.recent.slice(0, 5);
    setLatestTimeLineData(latestTimeLineData)
    //new
    dispatch(setStatistic({ ...data, salesDash, purchaseDash, latestTimeLineData}));
    
  } else {
    const isEqual = state.datePickerValue?.toISOString() === date.toISOString();
    setState((prevState) => ({
      ...prevState,
      dateValue: isEqual ? null : date,
      formattedDate: isEqual ? '' : formatDateonly(date),
    }));
    setIsDatePickerOpen();

    const dateStart = setAndFormatDateToISO(date.toISOString());
    const dateEnd = setAndFormatDateToISO(date.toISOString(), true);

    const {data} = await getReceiptStatistic({
      date_start: isEqual ? '' : dateStart,
      date_end: isEqual ? '' : dateEnd,
    });
    setNewData(data);
    const salesDash = {
      processing: data.metrics.receipt.processing.toString() || "0",
      review: data.metrics.receipt.review.toString() || "0",
      rejected: data.metrics.receipt.rejected.toString() || "0",
      approved: data.metrics.receipt.approved.toString() || "0",
    };
    const purchaseDash = {
      processing: data.metrics["sale-invoice"].processing.toString() || "0",
      review: data.metrics["sale-invoice"].review.toString() || "0",
      rejected: data.metrics["sale-invoice"].rejected.toString() || "0",
      approved: data.metrics["sale-invoice"].approved.toString() || "0",
    };
    setSalesDash(salesDash);
    setPurchaseDash(purchaseDash);
    const latestTimeLineData = data.recent.slice(0, 5);
    setLatestTimeLineData(latestTimeLineData)
    //new
    dispatch(setStatistic({ ...data, salesDash, purchaseDash, latestTimeLineData}));
  }
};
  // const onChangeDateFilterValueHandler = async (
  //   newValue: any,
  //   actionMeta?: ActionMeta<unknown>
  // ) => {
  //   if (newValue?.value !== 'range' && newValue?.value !== 'customdate') {
  //     setState((prevState) => ({
  //       ...prevState,
  //       dateFilterValue: {
  //         value: newValue.value,
  //         label: `Date - ${newValue.label}`,
  //       },
  //       statusValue: {
  //         value: 'all',
  //         label: `Status - All`,
  //       },
  //       formattedDate: '',
  //       isInputDate: false
  //     }));
  //     await getReceiptStatistic({
  //       // ...fetchParams,
  //       // skip: 0,
  //       // status: '',
  //       //date_filter: newValue.value === 'all' ? '' : newValue.value,
  //       date_start: '',
  //       date_end: ''
  //     });
  //   } else if (newValue.value === 'range') {
  //     setState((prevState) => ({
  //       ...prevState,
  //       dateFilterValue: {
  //         value: newValue.value,
  //         label: `Date - ${newValue.label}`,
  //       },
  //       formattedDate: '',
  //       isInputDate: false
  //     }));
  //   } else if (newValue.value === 'customdate') {
  //     setState((prevState) => ({
  //       ...prevState,
  //       dateFilterValue: {
  //         value: newValue.value,
  //         label: `Date - ${newValue.label}`,
  //       },
  //       formattedDate: '',
  //       isInputDate: false
  //     }));
  //   }
  // };
  const onChangeDateFilterValueHandler = async (
    newValue: any,
    actionMeta?: ActionMeta<unknown>
  ) => {
    let dateRange;
    if (newValue?.value !== 'range' && newValue?.value !== 'customdate') {
      switch (newValue.value) {
        case 'today':
          dateRange = getTodayDateRange();
          break;
        case 'yesterday':
          dateRange = getYesterdayDateRange();
          break;
        case 'thisweek':
          dateRange = getThisWeekDateRange();
          break;
         case 'lastweek':
          dateRange = getLastWeekDateRange();
          break;
        case 'thismonth':
          dateRange = getThisMonthDateRange();
          break;
        case 'lastmonth':
          dateRange = getLastMonthDateRange();
          break;
        case 'thisyear':
          dateRange = getThisYearDateRange();
          break;
        case 'lastyear':
          dateRange = getLastYearDateRange();
          break;
        default:
          dateRange = { date_start: '', date_end: '' };
      }
  
      const formattedDateStart = dateRange?.date_start
        ? formatDateTime(new Date(dateRange.date_start))
        : '';
      const formattedDateEnd = dateRange?.date_end
        ? formatDateTime(new Date(dateRange.date_end))
        : '';
  
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
        formattedDate: `${formattedDateStart} - ${formattedDateEnd}`,
        isInputDate: false,
      }));
  
      const {data} = await getReceiptStatistic({
        date_start: formattedDateStart,
        date_end: formattedDateEnd,
      });
      setNewData(data);
      const salesDash = {
        processing: data.metrics.receipt.processing.toString() || "0",
        review: data.metrics.receipt.review.toString() || "0",
        rejected: data.metrics.receipt.rejected.toString() || "0",
        approved: data.metrics.receipt.approved.toString() || "0",
      };
      const purchaseDash = {
        processing: data.metrics["sale-invoice"].processing.toString() || "0",
        review: data.metrics["sale-invoice"].review.toString() || "0",
        rejected: data.metrics["sale-invoice"].rejected.toString() || "0",
        approved: data.metrics["sale-invoice"].approved.toString() || "0",
      };
      setSalesDash(salesDash);
      setPurchaseDash(purchaseDash);
      const latestTimeLineData = data.recent.slice(0, 5);
      setLatestTimeLineData(latestTimeLineData)
      dispatch(setStatistic({ ...data,salesDash, purchaseDash, latestTimeLineData}));
    } else if (newValue.value === 'range') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: true,
      }));
    } else if (newValue.value === 'customdate') {
      setState((prevState) => ({
        ...prevState,
        dateFilterValue: {
          value: newValue.value,
          label: `Date - ${newValue.label}`,
        },
        formattedDate: '',
        isInputDate: true,
      }));
    }
  };
  return {
    ...state,
    timeFilterValue,
    navigateToInvites,
    onSelectFilesHandler,
    getReceiptsStatisticHandler,
    onChangeCategoryFieldHandler,
    isLoading,
    isContentLoading,
    companies,
    totalReceiptCount,
    timeFilterOptions,
    lastReceipts,
    receipts,
    company,
    user,
    datePickerRef,
    isDatePickerOpen,
    salesDash,
    purchaseDash,
    latestTimeLineData,
    // salesData,
    // formattedDate,
    // isInputDate,
    onChangeDate,
    setIsDatePickerOpen,
    onChangeDateFilterValueHandler,
    onClickOutsideDatePickerHandler,
    
    
  };
};

