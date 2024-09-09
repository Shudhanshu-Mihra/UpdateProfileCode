export interface ICreateUser {
  token?: string;
  email: string;
  password: string;
  fullName: string;
  country: string;
}
export interface IUser extends ICreateUser {
  socialAuth?: null;
  id: string;
  active_account: string;
  accounts: IAccount[] | null;
  profile_image: string,
  profile_image_key: string,
  profile_image_url?: string,
  profile_image_file: null | File | Blob,
  profile_image_local_url: string,
}

export interface ICapiumSocialAccount {
  capiumEmail: string;
  capiumId: string;
  id: string;
}
export interface IGoogleSocialAccount {
  googleEmail: string;
  googleId: string;
  id: string;
}

export interface ISocialAccounts {
  capium: ICapiumSocialAccount;
  google: IGoogleSocialAccount;
  isLinkedSocAcc: boolean;
}

export interface ICurrency {
  country: string;
  description: string;
  id: string;
  value: string;
}

export interface IUserInfo {
  company: ICompany;
}

export interface ISIGN_UP_USER_INITIAL_STATE {
  user: IUser;
  token: string;
  refreshToken: string;
  socialAccount: ISocialAccounts;
  userInfo: IUserInfo;
  currencies: ICurrency[];
  isSkipOnboarding: boolean;

}

export interface IUpdateUserProfile {
  company: Pick<ICompany, 'currency' | 'date_format'>;
  user: Pick<IUser, 'email' | 'country' | 'fullName'>;
}

export interface ISwitchAccount {
  user: Omit<IUser, 'socialAuth'>;
  company: Omit<ICompany, 'currency'>;
}
