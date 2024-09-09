import { ActionMeta } from 'react-select';

export interface ISelectedCompany {
  name: string;
  logo: string | null;
  id: string;
}

export interface IuseCompanyListState {
  searchValue: string;
  isLoading: boolean;
  isContentLoading: boolean;
  companyName: string;
  logoSrc: string;
  logoName: string;
  isSearching: boolean;
  isFocus: boolean;
  selectedItemId: string;
  searchedCompanies: ICompanySettings[];
  isFetchingData: boolean;
  selectedCompany: ISelectedCompany | null;
  companyLogo: null | File;
  isCompanyLogoLoading: boolean;
  //add option
  prevCompanyName: string;
  prevLogoSrc: string;
  isDeleteCompanyLogo: boolean;
  countryValue: { value: string, label: string};
}
