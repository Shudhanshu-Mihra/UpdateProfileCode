export const INVOICE_INITIAL_STATE = {
  statusValue: { value: 'all', label: 'Status - All' },
  dateFilterValue: { value: 'all', label: 'Date - All' },
  searchValue: '',
  invoiceDate: null,
  datePickerValue: null,
  datePickerRangeValue: null,
  formattedDate: '',
  isFocus: false,
  isInputDate: false,
  showActions: false,
  checkedInvoiceIds: [],
  isLoading: false,
  dataToSend: [],
  excelUrl: '',
  csvData: '',
  isFetchingInvoice: true,
  isContentLoading: false,
};

export const formikInitialValues = {
  to: '',
  subject: '',
  message: '',
};