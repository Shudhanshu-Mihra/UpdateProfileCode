
export const DASHBOARD_INITIAL_STATE = {
  dateFilterValue: { value: 'all', label: 'Date - All' },
  datePickerValue: null,
  datePickerRangeValue: null,
  formattedDate: '',
  isInputDate: false,
  isLoading: false,
  isFetchingDashboard: true,
  isContentLoading: false,
};
export const getTimeFilterOptions = () => [
  { value: 'all', label: `All` },
  { value: 'today', label: `Today` },
  { value: 'yesterday', label: `YesterDay` },
  { value: 'thisweek', label: `This Week` },
  { value: 'lastweek', label: `Last Week` },
  { value: 'thismonth', label: `This Month` },
  { value: 'lastmonth', label: `Last Month` },
  { value: 'thisyear', label: `This Year` },
  { value: 'lastyear', label: `Last Year` },
  { value: 'range', label: `Range (From - To)` },
  { value: 'customdate', label: `Particular Date` },
];

