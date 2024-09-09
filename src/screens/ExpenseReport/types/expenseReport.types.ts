import { ICurrency } from '../../SignUp/types/signup.types';

export interface IReportTableProps {
  onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedAllItemsHandler?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isAllChecked: boolean;
  dateFormat: string;
  sortField: string;
  sortOrder: TSorterOrder;
  requestSort?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  sortedReportList?: IReportGetAll[];
}
type TSorterOrder = 'asc' | 'desc' | '';

export interface IReportGetAll {
  expense_report_id: string;
  expense_created_date: Date;
  expense_report_for: string;
  expense_report_name: string;
  report_receipt: any[];
  report_total_amount: number;
  report_total_tax: number;
  description?: string | null;
  isChecked: boolean;
}

export interface IReportList {
  expense_report_id: string;
  expense_created_date: Date;
  expense_report_for: string;
  expense_report_name: string;
  report_total_amount: number | null;
  report_total_tax: number | null;
  isChecked: boolean;
  description?: string | null;
}

export interface ISelectItemReport {
  id: string;
  created: string;
  name: string;
}

export interface IREPORT_INITIAL_STATE {
  count: number | null;
  totalCount: number | null;
  reportsList: IReportGetAll[];
  selectedReport: IReportGetAll | null;
  selectedReportIndex: number | null;
  isFetchingReportData: boolean;
  isAllChecked: boolean;
  isCompanyChanged: boolean;
}

export interface IuseReportState {
  isEdit?: boolean;
  searchValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingReports?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  checkedReportIds: string[];
  searchedItems: ITabItem[];
  isSearching: boolean;
  isNewReport: boolean;
  modalInputReportFor: string;
  modalInputReportDate: string;
  modalInputReportSelectedDate: Date | null;
  modalInputReportName: string;
}

export interface ICreateReportApi {
  report_for: string;
  report_date: Date | null | string;
  report_name: string;
  report_receipt?: string[];
  active_account?: string | null;
}
export interface IcreateReportHandlerParams {
  active_account?: string;
  search?: string;
  take?: number;
  skip?: number;
}


interface IReportActionModalProps {
  // isDisableButton?: boolean;
  isLoading?: boolean;
  onChangeReportFormHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeReportForHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeReportDateHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeReportNameHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  modalReportCreateButtonHandler: any;
  modalReportCancelButtonHandler: any;

  // onCloseDeleteModalWindowHandler: any;
  // onSaveButtonCLickHandler: () => Promise<void>;
  // onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
  isModalWindowOpen: boolean;
  onModalWindowToggle: any;

  headerText: string;
  radioReportFormType: boolean;
  inputValueReportFor: string;
  inputValueReportDate: string;
  inputValueReportSelectedDate: Date | null;
  inputValueReportName: string;
}

interface IReportDeleteModalProps {
  isLoading?: boolean;
  onCloseDeleteModalWindowHandler?: () => void;
  onDeleteButtonClickHandler?: () => Promise<void>;
  isDeleteModalWindowOpen?: boolean;
  deleteItemName?: string;
  categoryName?: string;
  account?: string;
}

export interface IReportModal
  extends IReportActionModalProps,
  IReportDeleteModalProps { }