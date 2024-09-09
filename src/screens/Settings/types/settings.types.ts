export interface ISETTINGS_INITIAL_STATE {
  companyMembers: { members: IMember[]; count: number | null };
  companies: { companies: ICompanySettings[]; count: number };
  companySwitcher: ICompaniesSwitcher[];
  isFetchingData: boolean;
  isSwitchCompany: boolean;
  isLinkedSocAcc: boolean;
}
