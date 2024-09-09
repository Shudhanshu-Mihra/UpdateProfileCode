import { PAGINATION_ARRAY } from 'constants/pagination-array';
import { IgetInputFieldsProps } from './types/invites.types';

export const INVITES_INITIAL_STATE = {
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
  itemsPerPage: PAGINATION_ARRAY[1],
  skipItems: 0,
  currentPage: 0,
  pages: 1,
  forwardDisabled: true,
  backwardDisabled: true,
  inputPaginationValue: '',
  isSearching: false,
  isFocus: false,
  isEdit: false,
  selectedItemId: '',
  searchedInvites: [],
  isFetchingData: true,
  role: null,
  prevRole: null,
  selectedEmail: '',
  prevName: '',
  prevEmail: '',
  isEmptyData: true,
  isHeaderPanel: false,
  isChecked: false,
};

export const formikInitialValues = {
  email: '',
};
