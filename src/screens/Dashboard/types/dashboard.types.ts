export interface IMetric {
  accepted: number | null;
  rejected: number | null;
  processing: number | null;
  review: number | null;
}

export interface IAccountCompanyOwner {
  id: string;
  name: string;
  role: string;
}

export interface ICompanyDashboard {
  account: IAccountCompanyOwner;
  company_owner: IAccountCompanyOwner;
  company: ICompany;
}

export interface IReceipts {
  count: number;
  data: IReceipt[];
}

export interface IDASHBOARD_INITIAL_STATE {
  companies: ICompanyDashboard[];
  metric: IMetric;
  receipts: IReceipts | null;
}

export interface ITimeFIlterValue {
  value: string;
  label: string;
}

export interface IUserInfoData {
  company: ICompany;
  active_account: string;
  account: IAccount;
}
