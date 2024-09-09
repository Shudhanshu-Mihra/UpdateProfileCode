export interface ISettingsItemPageContentProps
  extends TableSettingsProps,
  IPaginationPanelProps {
  companies?: ICompanySettings[];
  searchedCompanies?: ICompanySettings[];
  members?: IMember[];
  isFocus?: boolean;
  searchedUsers?: IMember[];
  isMemeberList?: boolean;
  isContentLoading: boolean;
  onBlurHandler?: () => void;
  isGuard: boolean;
  onChangeSearchValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  onAddClickButtonHandler: () => void;
  onFocusSearchHandler?: () => void;
  onResendInvitationHandler?: (token: string) => void;
  isFetchingData: boolean;
}
