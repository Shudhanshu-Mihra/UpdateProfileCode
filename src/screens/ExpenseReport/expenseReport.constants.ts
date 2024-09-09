export const REPORT_INITIAL_STATE = {
  isEdit: false,
  searchValue: '',
  isLoading: false,
  isEmptyData: false,
  isFetchingReports: true,
  isContentLoading: false,
  isFocus: false,
  checkedReportIds: [],
  searchedItems: [],
  isSearching: false,
  isNewReport: true,
  modalInputReportFor: '',
  modalInputReportDate: '',
  modalInputReportSelectedDate: new Date(),
  modalInputReportName: '',
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
