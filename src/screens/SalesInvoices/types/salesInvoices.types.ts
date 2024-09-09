// import { IINBOX_INITIAL_STATE } from '../../Inbox/types/inbox.types';
import { ICurrency } from '../../SignUp/types/signup.types';

export interface ISelectItem {
  id: string;
  created: string;
  name: string;
}

export interface IINVOICE_INITIAL_STATE {
  count: number | null;
  totalCount: number | null;
  invoicesList: IInvoice[];
  selectedInvoice: IInvoice | null;
  selectedInvoiceIndex: number | null;
  isFetchingData: boolean;
  isAllChecked: boolean;
  isCompanyChanged: boolean;
}

export interface IGetInvoicesParams {
  active_account?: string;
  status?: string;
  date_filter?: string;
  search?: string;
  date_start?: string;
  date_end?: string;
  take?: number;
  skip?: number;
}

export interface IPostEmail {
  active_account: string;
  message?: string;
  invoices: string[];
  to: string;
  subject: string;
}

export interface IuseSalesInvoicesState {
  isFetchingInvoice: boolean;
  statusValue: {
    value: string;
    label: string;
  };
  dateFilterValue: {
    value: string;
    label: string;
  };
  isContentLoading: boolean;
  searchValue: string;
  datePickerValue: Date | null;
  datePickerRangeValue: Date[] | null;
  invoiceDate: Date | null;
  formattedDate: string;
  isInputDate: boolean;
  showActions: boolean;
  checkedInvoiceIds: string[];
  isLoading: boolean;
  csvData: string;
  dataToSend: string[];
  excelUrl: string;
}

export interface ISalesInvoice {
  currency: ICurrency;
  id: string;
  custom_id: string;
  net: number | null;
  photos: string[];
  invoice_date: Date;
  due_date: Date;
  status: string;
  supplier: string | null;
  tax: number | null;
  total: number | null;
  vat_code: string | null;
  publish_status: boolean;
  payment_status: boolean;
  isChecked: boolean;
}
// export interface ISALES_INVOICES_INITIAL_STATE
//   extends Omit<
//     IINVOICE_INITIAL_STATE,
//     'invoices' | 'selectedInvoices' | 'selectedInvoicetIndex'
//   > {
//   salesInvoices: ISalesInvoice[];
//   selectedSalesInvoice: ISalesInvoice | null;
//   selectedSalesInvoiceIndex: number | null;
// }

