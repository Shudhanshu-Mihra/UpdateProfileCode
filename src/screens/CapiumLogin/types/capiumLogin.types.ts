export interface ICapiumAccount {
  email: string;
  fullName: string;
  id: string;
}

export interface ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE {
  capiumAccounts: ICapiumAccount[];
}
