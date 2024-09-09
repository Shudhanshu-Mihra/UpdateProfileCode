import React from "react";
import { SingleValue } from "react-select";
import { boolean } from "yup";

declare global {
  interface IOAuthLogin {
    socialAccountId?: string;
    email: string;
    fullName: string;
    type: "capium" | "google";
  }
  interface IusePhotoDetailsContentState {
    receiptid: string;
    statusValue: string;
    paymentTypeValue: SingleValue<IOption> | any;
    categoryValue: IOption | any;
    supplierValue: string | null;
    supplierAccountValue: IOption | any;
    currencyValue: SingleValue<IOption> | any;
    paymentStatus: IOption | any;
    isPublished: IOption | any;
    currencyValueId: string;
    descriptionValue: string;
    netValue: number | null;
    vatCodeValue: string;
    taxValue: number | null;
    totalValue: number | null;
    dateValue: Date | null;
    formattedDate: string;
  }
  interface IuseexpenseContentState {
    statusValue: string;
    categoryValue: IOption | any;
    typeValue: SingleValue<IOption> | any;
    dateValue: Date | null;
    supplierValue: string | null;
    supplierAccountValue: IOption | any;
    currencyValue: SingleValue<IOption> | any;
    payment: IOption | any;
    currencyValueId: string;
    taxValue: number | null;
    totalValue: number | null;
    descriptionValue: string;
    receiptid: string;
    vatCodeValue: string;
    netValue: number | null;
    formattedDate: string;
  }
  interface IHeaderPanelProps {
    datePickerRef: React.RefObject<HTMLButtonElement>;
    onDeleteItemHandler: () => Promise<void>;
    // onDeleteReceiptHandler: () => Promise<void>;
    onMarkAsPaidButtonHandler?: () => Promise<void>; //depreceated
    onMarkAsHandler: (mark: string) => Promise<void>;  // used this instead
    onClickDownloadCSVButtonHandler: () => Promise<void>;
    onSelectFilesHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectSalesFilesHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onChangeStatusValueHandler: (
      newValue: unknown,
      actionMeta: ActionMeta<unknown>
    ) => void;
    onChangeDateFilterValueHandler: (
      newValue: any,
      actionMeta?: ActionMeta<unknown>
    ) => void;
    statusValue: IOption;
    dateFilterValue: IOption;
    onChangeSearchValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    searchValue: string;
    onChangeDate: (date: Date) => void;
    onClickOutsideDatePickerHandler: (
      event: React.MouseEvent<HTMLDivElement>
    ) => void;
    isDatePickerOpen: boolean;
    dateValue: Date | null;
    setIsDatePickerOpen: () => void;
    formattedDate: string;
    isInputDate: boolean;
    onActionsClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onActionsClose: () => void;
    onEmailClick: () => void;
    showActions: boolean;
    isDownloadButtonDisabled: boolean;
    onDownloadExcelFileHandler: () => Promise<void>;
    dot3ExpReport?: boolean;
    primaryAction: string | null;
    onBlurHandler: () => void;
    onFocusSearchHandler: () => void;
    // InBoxActionList?: {
    //   actionListlabel: string,
    //   actionListHandler: () => void,
    // }[];
  }

  interface IUpdateReceiptItemPayload {
    id: string;
    active_account?: string;
    category?: string | null;
    currency?: string | null;
    description?: string | null;
    custom_id?: string | null;
    net?: number | null;
    photos?: string[];
    receipt_date?: Date | null;
    status?: string | null;
    supplier?: string | null;
    supplier_account?: string | null;
    tax?: number | null;
    total?: number | null;
    payment_type?: string | null;
    vat_code?: string | null;
    payment_status?: boolean;
    approve_status?: boolean;
    publish_status?: boolean;
  }

  interface IPaginationPanelProps {
    onChangePaginationInputValue: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    inputPaginationValue: string;
    onGoToClick: () => void;
    onEnterGoToClick: (event: React.KeyboardEvent) => void;
    onChangePage: ({ selected }: { selected: number }) => void;
    onForwardClick: () => void;
    onBackwardClick: () => void;
    // onChangeItemsPerPage?: (newValue: SingleValue<IOption>) => void;
    onChangeItemsPerPage?: (newValue: any, actionMeta?: ActionMeta<unknown>) => void;
    itemsPerPage: { value: string; label: string };
    // isContentLoading: boolean;
    // isFetchingData?: boolean;
    // isFetchingReceipts?: boolean;
    currentPage: number;
    pages: number;
    paginationCustomStyle?: {
      position?: 'fixed' | 'absolute';
      bottom?: string;
      left?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
  }
  // type paginationPosition = 'fixed' | 'absolute';
  interface IPaginationState {
    selected: number;
    itemsPerPage: SingleValue<IOption>;
    skipItems: number;
    forwardDisabled: boolean;
    backwardDisabled: boolean;
  }

  // interface IPaginationPanel extends IPaginationPanelProps {}
  // onChangeReceiptsPerPage: (newValue: SingleValue<IOption>) => void;
  // receiptsPerPage: { value: string; label: string };


  interface ICreator {
    id: string;
    name: string;
    role: string;
    created?: string;
  }

  interface ITabItem {
    id: string;
    created: string;
    name: string;
    creator: ICreator;
  }

  interface ITabSuppAccItem {
    id: string;
    purchase: string;
    created: string;
    name: string;
    code: string | number,
    creator: ICreator;
  }

  type TReceiptKeys = keyof IReceipt;
  type TInvoiceKeys = keyof IInvoice;
  type TSorterOrder = "asc" | "desc" | "";

  interface TableInboxAdminProps {
    isContentLoading: boolean;
    onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedAllItemsHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onCheckedPublishMockFuncHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    receiptList?: IReceipt[];
    isFetchingReceipts: boolean;
    isAllChecked: boolean;
    onCheckedPaidHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    onCheckedApproveHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    dateFormat: string;
    sortField: string;
    sortOrder: TSorterOrder;
    // datePickerRef: React.RefObject<HTMLButtonElement>;
    requestSort: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

  interface IActionMenuContentProps extends IEmailModalWindowProps {
    csvLink: React.RefObject<
      CSVLink &
      HTMLAnchorElement & {
        link: HTMLAnchorElement;
      }
    >;
    csvData: string;
    excelRef: React.RefObject<HTMLAnchorElement>;
    excelUrl: string;
    isSentSuccessPopup: boolean;
    closeSuccesPopupHandler: () => void;
  }
  interface IReceipt {
    category: ISelectItem | null;
    currency: ICurrency;
    description: string | null;
    id: string;
    custom_id: string;
    net: number | null;
    photos: string[];
    receipt_date: Date;
    status: string;
    supplier: string | null;
    supplier_account: ISelectItem | null;
    tableData?: {headers: any[], items: any[], raw: any[]}
    tax: number | null;
    total: number | null;
    payment_type: ISelectItem | null;
    vat_code: string | null;
    payment_status: boolean;
    approve_status: boolean;
    publish_status: boolean;
    isChecked: boolean;
  }
  interface IInvoice {
    category: ISelectItem | null;
    currency: ICurrency;
    description: string | null;
    id: string;
    custom_id: string;
    net: number | null;
    photos: string[];
    saleinvoice_date: Date;
    status: string;
    customer: string | null;
    customer_account: ISelectItem | null;
    tax: number | null;
    total: number | null;
    payment_type: ISelectItem | null;
    vat_code: string | null;
    payment_status: boolean;
    approve_status: boolean;
    publish_status: boolean;
    isChecked: boolean;
  }

  interface IInboxContent
    extends IHeaderPanelProps,
    TableInboxAdminProps,
    IPaginationPanelProps {
      InBoxActionList: any[];
      isActionMenuButtonDisabled: boolean;
      userRole: any;
    }

  interface TableInvoiceProps {
    onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedAllItemsHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onCheckedPublishMockFuncHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    invoicesList: IInvoice[];
    isContentLoading: boolean;
    sortedInvoices: IInvoice[];
    isAllChecked: boolean;
    onCheckedPaidHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    onCheckedApproveHandler: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    dateFormat: string;
    sortField: string;
    sortOrder: TSorterOrder;
    requestSort: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

  interface IOption {
    value: string;
    label: string;
    id?: string;
    [key: string]: string | undefined;
  }

  enum Statuses {
    processing = "processing",
    review = "review",
    accepted = "accepted",
    approved = "approved",
    rejected = "rejected",
  }

  enum DateFilterOption {
    today = "today",
    yesterday = "yesterday",
    thisweek = "thisweek",
    lastweek = "lastweek",
    thismonth = "thismonth",
    lastmonth = "lastmonth",
    thisquater = "thisquater",
    lastquater = "lastquater",
    thisyear = "thisyear",
    lastyear = "lastyear",
    cutsomrange = "cutsom range",
    cutsomdate = "cutsom date",
  }

  enum ButtonTheme {
    primary = "primary",
    secondary = "secondary",
    capium = "capium",
    roundedRed = "roundedRed",
    roundedWhite = "roundedWhite",
    threeDots = "threeDots",
  }

  type TButtonTheme = keyof typeof ButtonTheme;

  interface IEmailModalWindowProps {
    onCloseModalWindowHandler: () => void;
    isModalWindowOpen: boolean;
    onFormHandleSubmit: (
      e?: React.FormEvent<HTMLFormElement> | undefined
    ) => void;
    formikProps: (nameOrOptions: string) => FieldInputProps<string>;
    formikMeta: (name: string) => FieldMetaProps<string>;
    isValid: boolean;
    isLoading: boolean;
    checkedIds: string[];
  }

  type TStatuses = keyof typeof Statuses;

  enum Roles {
    owner = "owner",
    user = "user",
    admin = "admin",
    accountant = "accountant",
  }
  type TRoles = keyof typeof Roles;

  interface ICompanySettings {
    date_format: string;
    id: string;
    created: string;
    members: IMember[];
    name: string;
    logo: null | string;
  }
  interface TableSettingsProps {
    companies?: ICompanySettings[];
    searchedCompanies?: ICompanySettings[];
    searchValue: srting;
    userRole?: IAccount;
    onDeleteIconClickHandler: (itemId: string) => void;
    onEditIconClickHandler: (itemId: string) => void;
  }
  interface TableSettingsItemProps {
    userRole?: IAccount;
    onDeleteIconClickHandler: (itemId: string) => void;
    onEditIconClickHandler: (itemId: string) => void;
  }

  interface TableCompanySettingsItemProps extends TableSettingsItemProps {
    companyName: string;
    creatorId: string;
    creatorRole: string;
    companyId: string;
    createdAt: string;
    createdBy: string;
    dateFormat: string;
    tableRowTheme: "companyUser" | "company";
  }

  interface IMasterModalWindowProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    isModalWindowOpen: boolean;
    onCloseModalWindowHandler: () => void;
    onChangePaginationInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    headerText: string;
    inputValue: string;
    text?: string;
  }

  interface IMasterModalWindowAccProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;
    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    text: string;
    code: string;
  }
  interface IMasterModalSupplierAccProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;

    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    onChangeInputCodeValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    inputCodeValue: string;
    text: string;
    textCode: string;
  }

  interface IMasterModalCustomerAccProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;

    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    onChangeInputCodeValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    inputCodeValue: string;
    text: string;
    textCode: string;
  }


  interface IMasterModalSupplierProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;

    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    inbuiltCategory?: any[];
    onChangesupplierDefaultCategoryHandler?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
    supplierDefaultCategory?: SingleValue<IOption>;

    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    text: string;
  }

  interface IMasterModalCustomerProps {
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;

    onChangeInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    text: string;
  }


  interface IDeleteModalWindowProps {
    isLoading?: boolean;
    onCloseDeleteModalWindowHandler?: () => void;
    onDeleteButtonClickHandler?: () => Promise<void>;
    isDeleteModalWindowOpen: boolean;
    deleteItemName?: string;
    categoryName?: string;
    account?: string;
  }

  interface IModalWindowsBox
    extends IMasterModalWindowProps,
    IDeleteModalWindowProps { }

  interface IModalWindowsBoxAcc
    extends IMasterModalWindowAccProps,
      IDeleteModalWindowProps {}

  interface IModalBoxSupplierAcc
    extends IMasterModalSupplierAccProps,
      IDeleteModalWindowProps {}

  interface IModalBoxCustomerAcc
    extends IMasterModalCustomerAccProps,
      IDeleteModalWindowProps {}

  interface IModalBoxSupplier
    extends IMasterModalSupplierProps,
      IDeleteModalWindowProps {}

  interface IModalBoxCustomer
    extends IMasterModalCustomerProps,
      IDeleteModalWindowProps {}

  // interface IPaginationState {
  //   itemsPerPage: SingleValue<IOption> | any;
  //   skipItems: number;
  //   currentPage: number;
  //   inputPaginationValue: string;
  //   pages: number;
  //   forwardDisabled: boolean;
  //   backwardDisabled: boolean;
  // }

  interface IMemberInvite {
    id: string;
    email: string;
    created: string;
    updated: string;
    isActive: boolean;
    isCompanyInvite: boolean;
  }
  interface IMember {
    id: string;
    name: string;
    role: TRoles;
    userInvitorName: string;
    created: string;
    company: { id: string; date_format: string; name: string };
    memberInvite: IMemberInvite | null;
    user: {
      accounts: IAccount[];
      active_account: string;
      country: string;
      email: string;
      fullName: string;
      id: string;
      profile_image: null | string;
    } | null;
  }
  interface IMemberTableProps extends TableSettingsProps {
    members?: IMember[];
    searchedUsers?: IMember[];
    onResendInvitationHandler?: (token: string) => void;
    searchValue: string;
  }
  interface ISearchParams {
    search?: string;
    take?: number;
    skip?: number;
    active_account?: string | null;
  }

  interface IAccount {
    id: string;
    name: string;
    role: string;
    created: string;
    userInvitorName: string;
  }

  interface ICompany extends IPermissions{
    date_format: string;
    currency: ICurrency;
    created: string;
    id: string;
    name: string;
    logo: string | null;
    integration_company:{
      integrate_company_id: number;
      integrate_company_name: string;
      imageUrl: string;
      isIntegrate: boolean;
    }[] | [];
    company_default_permission: IPermissions[] | [];
  }

  interface ICompaniesSwitcher {
    company: Omit<ICompany, "currency">;
    id: string;
    name: string;
    role: string;
  }

  interface IAvatarSubmenuLinks {
    menuItems: {
      title: string;
      route: ROUTES;
      iconName: string;
      onClick?: () => void;
    }[];
  }

  interface IBindSocialAccountFormProps {
    onChangeCountryValueHandler: (
      newValue: unknown,
      actionMeta: ActionMeta<unknown>
    ) => void;
    onFormHandleSubmit: (
      e?: React.FormEvent<HTMLFormElement> | undefined
    ) => void;
    setIsShowConfirmPassword: () => void;
    setIsShowPassword: () => void;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
    isShowConfirmPassword: boolean;
    isShowPassword: boolean;
    values: IFormikValues;
    errors: FormikErrors<IFormikValues>;
    touched: FormikTouched<IFormikValues>;
    countryValue: IOption;
  }

  interface IInsertCompanyModalWindowProps {
    onChangeCountryValueHandler: (
            newValue: unknown,
            actionMeta: ActionMeta<unknown>
          ) => void;
  }
}
interface integrationCompanyArr {
  id: number;
  name: string;
  imageUrl: string;
}
export {
  IActionMenuContentProps,
  IBindSocialAccountFormProps,
  TSorterOrder,
  IOAuthLogin,
  IAvatarSubmenuLinks,
  TButtonTheme,
  ICompaniesSwitcher,
  ICompany,
  IAccount,
  TableCompanySettingsItemProps,
  ICompanySettings,
  ISearchParams,
  IMemberTableProps,
  IMember,
  IModalWindowsBox,
  IModalExpenseWindowsBox,
  IPaginationState,
  TableSettingsProps,
  TRoles,
  IMasterModalWindowProps,
  IDeleteModalWindowProps,
  TStatuses,
  IEmailModalWindowProps,
  IusePhotoDetailsContentState,
  IHeaderPanelProps,
  IUpdateReceiptItemPayload,
  IPagination,
  // IPaginationData, depreceated
  ITabItem,
  IInboxContent,
  TableInboxAdminProps,
  IReceipt,
  IPaginationPanel,
  IOption,
  TReceiptKeys,
};
