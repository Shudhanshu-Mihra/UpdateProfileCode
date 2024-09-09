import { SingleValue } from "react-select";

export interface IuseMasterState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  // modalInputDate: string;
  // modalInputName: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];      
  isSearching: boolean;
  selected?: number;
}
export interface IuseMasterCategory {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  // modalInputDate: string;
  // modalInputName: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];      
  isSearching: boolean;
  MasterCurrentActionItem: any[] | null,
}

export interface IuseMasterSupplierAccState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  modalInputDate: string;
  modalInputName: string;
  modalInputCodeValue: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabSuppAccItem[];      
  isSearching: boolean;
  selected?: number;
}

export interface IuseMasterCustomerAccState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  modalInputDate: string;
  modalInputName: string;
  modalInputCodeValue: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];      
  isSearching: boolean;
  selected?: number;
}

export interface IuseMasterSupplierState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  // supplierDefaultCategory?: IOption;
  modalInputDate: string;
  modalInputName: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];      
  isSearching: boolean;
  selected?: number;
}

export interface IuseMasterCustomerState {
  isEdit?: boolean;
  searchValue: string;
  modalInputValue: string;
  modalInputDate: string;
  modalInputName: string;
  prevInputValue: string;
  isLoading: boolean;
  isEmptyData?: boolean;
  isFetchingData?: boolean;
  isContentLoading?: boolean;
  isFocus?: boolean;
  isHeaderPanel?: boolean;
  searchedItems: ITabItem[];      
  isSearching: boolean;
  selected?: number;
}
export interface IHeaderPanelMasterProps {
  isButton?: boolean;
  isGuard?: boolean;
  userRole?: TRoles;
  buttonText: string;
  onChangeSearchValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  onAddClickButtonHandler: () => void;
  onBlurHandler?: () => void;
  onFocusSearchHandler?: () => void;
}

export interface TableSupplierAccountProps {
  supplierAccountList: ITabSuppAccItem[];
  dateFormat: string;
  tabName: string;
  onDeleteIconClickHandler: (itemId: string, index?: number, clickItemName?: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  searchedItems: ITabSuppAccItem[];
  searchValue: string;
  userRole: TRoles;
  isContentLoading?: boolean;
  isFetchingData?: boolean;
  isFocus?: boolean;
}

export interface TableMasterProps {
  categories: ITabItem[];
  dateFormat: string;
  tabName: string;
  onDeleteIconClickHandler: (itemId: string, index?: number, clickItemName?: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  searchedItems: ITabItem[];
  searchValue: string;
  userRole: TRoles;
  isContentLoading?: boolean;
  isFetchingData?: boolean;
  isFocus?: boolean;
}


export interface ITabCategoreyProps
  extends TableMasterProps,
    Omit<IHeaderPanelMasterProps, 'isButton' | 'buttonText' | 'userRole'>,
    IPaginationPanelProps {}
    
export interface ITabContentProps
  extends TableMasterProps,
    Omit<IHeaderPanelMasterProps, 'isButton' | 'buttonText' | 'userRole'>,
    IPaginationPanelProps {}

export interface ICreateCategory {
  name: string;
  active_account?: string | null;
}

export interface ICreateSupplierAcc {
  name: string;
  code: string;
  active_account?: string | null;
}

export interface ICreateSupplier {
  name: string;
  active_account?: string | null;
}

export interface ICreateCustomerAcc {
  name: string;
  code: string;
  active_account?: string | null;
}

export interface ICreateCustomer {
  name: string;
  active_account?: string | null;
}
export interface ICreateSupplier {
  name: string;
  active_account?: string | null;
}

export interface IUpdateCategory extends ICreateCategory {
  id: string;
}

export interface IUpdateCustomerAcc extends ICreateCustomerAcc {
  id: string;
}

export interface IUpdateCustomer extends ICreateCustomer {
  id: string;
}
export interface IUpdateSupplier extends ICreateSupplier {
  id: string;
}

export interface IUpdateSupplierAcc extends ICreateSupplierAcc {
  id: string;
}

export interface IMASTER_INITIAL_STATE {
  categories: { data: ITabItem[]; count: number | null };
  supplierAccounts: { data: ITabSuppAccItem[]; count: number | null };
  supplier: { data: ITabItem[]; count: number | null };
  customer: { data: ITabItem[]; count: number | null };
  customerAccounts: { data: ITabItem[]; count: number | null };
  types: { data: ITabItem[]; count: number | null };
  selectedCategory: ITabItem | null;
  selectedMasterGlobalItem?: any[] | null;
  activeTabName: string;
}