export interface IuseUserListState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  isSearching: boolean;
  selectedItemId: string;
  isFocus: boolean;
  searchedUsers: IMember[];
  role: IOption | null;
  prevRole: IOption | null;
  companies: IOption[];
  isFetchingData: boolean;
  selectedUserName: string;
  prevName: string;
  prevEmail: string;
  isInvitation: boolean;
  givePermissionsForAPI: any[];
}
export interface IgetInputFieldsProps {
  options: IOption[][];
  funcArray: ((newValue: IOption, actionMeta: unknown) => void)[];
  state: {
    companies: IOption[];
    role: IOption | null;
  };
}
