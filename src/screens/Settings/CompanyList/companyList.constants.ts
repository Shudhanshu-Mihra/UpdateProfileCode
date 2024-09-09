export const COMPANY_LIST_INITIAL_STATE = {
  companyName: '',
  countryValue: {value: '', label: ''},
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
  logoSrc: '',
  logoName: '',
  isSearching: false,
  isFocus: false,
  selectedItemId: '',
  searchedCompanies: [],
  isFetchingData: true,
  companyLogo: null,
  selectedCompany: null,
  isCompanyLogoLoading: false,
  prevCompanyName: '',
  prevLogoSrc: '',
  isDeleteCompanyLogo: false,
  selectedCurrencyValue:"",
  selectedFormatDate:""
  // selectedFormatDate:''
};

export const STRINGS = {
  currency: 'Currency',
  dateFormat: 'Date Format',
  preferenceTitle: 'Tailor your preference ',
  buttonText: 'Continue',
  buttonTextInbox: 'Go to the application',
};


export const formikInitialValues = {
  companyName: '',
};