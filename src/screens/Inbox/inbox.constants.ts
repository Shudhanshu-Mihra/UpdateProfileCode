export const statusFilterOptions = [
  { value: 'all', label: `All` },
  { value: 'processing', label: `Processing` },
  { value: 'accepted', label: `Accepted` },
  { value: 'review', label: `Review` },
  { value: 'rejected', label: `Rejected` },
];

export const dateFilterOptions = [
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

export const formikInitialValues = {
  to: '',
  subject: '',
  message: '',
};

export const emailInputs = [
  {
    labelText: 'To',
    inputName: 'to',
  },
  {
    labelText: 'Subject',
    inputName: 'subject',
  },
  {
    labelText: 'Message',
    inputName: 'message',
    isTextArea: true,
    inputHeight: '159px',
  },
];

export const INITIAL_STATE = {
  statusValue: { value: 'all', label: 'Status - All' },
  dateFilterValue: { value: 'all', label: 'Date - All' },
  searchValue: '',
  dateValue: null,
  dateRangeValue: null,
  formattedDate: '',
  isInputDate: false,
  showActions: false,
  checkedIds: [],
  isLoading: false,
  receiptsToSend: [],
  excelUrl: '',
  csvData: '',
  isFetchingReceipts: true,
  isContentLoading: false,
  isFocus: false,
};

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
export const todayDateReceiptToEmail = `Receiptlist-${dd + mm + yyyy}_XLSX`;

export const mockedReceipts = [
  {
    category: null,
    currency: 'ICurrency',
    description: null,
    id: '1',
    custom_id: 'rc1',
    net: null,
    photos: [],
    receipt_date: new Date(),
    status: 'review',
    supplier: null,
    supplier_account: null,
    tax: null,
    total: null,
    payment_type: null,
    vat_code: null,
    payment_status: false,
    approve_status: false,
    publish_status: false,
    isChecked: false,
  },
];
