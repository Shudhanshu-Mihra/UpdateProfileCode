export interface ISelectItem {
  id: string;
  created: string;
  name: string;
}

export interface IINBOX_INITIAL_STATE {
  count: number | null;
  totalCount: number | null;
  receipts: IReceipt[];
  selectedReceipt: IReceipt | null;
  selectedReceiptIndex: number | null;
  isFetchingData: boolean;
  isAllChecked: boolean;
  isCompanyChanged: boolean;
  s3UploadStatus: {key: string, url: string, job_id: string}[] | [],
}

export interface IGetReceiptsParams {
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
  receipts: string[];
  to: string;
  subject: string;
}

export interface IuseInboxState {
  isFetchingReceipts: boolean;
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
  dateValue: Date | null;
  dateRangeValue: Date[] | null;
  formattedDate: string;
  isInputDate: boolean;
  showActions: boolean;
  checkedIds: string[];
  isLoading: boolean;
  csvData: string;
  receiptsToSend: string[];
  excelUrl: string;
}
