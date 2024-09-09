export interface IInvitesState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  isSearching: boolean;
  selectedItemId: string;
  isFocus: boolean;
  searchedInvites: IInvites[];
  role: IOption | null;
  prevRole: IOption | null;
  isFetchingData: boolean;
  selectedEmail: string;
  prevName: string;
  prevEmail: string;
  isEmptyData: boolean;
  isHeaderPanel: boolean;
  isChecked: boolean;
}
export interface IgetInputFieldsProps {
  options: IOption[][];
  onChangeSelectHandler: (newValue: IOption, actionMeta: unknown) => void;
  state: {
    role: IOption | null;
  };
}

export interface IInvites {
  id: string;
  created: string;
  updated: string;
  email: string;
  userInvitorId: string;
  isActive: boolean;
  members: Pick<
    IMember,
    'id' | 'role' | 'name' | 'userInvitorName' | 'created'
  >[];
}

export interface IINVITES_INITIAL_STATE {
  invites: { result: IInvites[]; count: number };
}
