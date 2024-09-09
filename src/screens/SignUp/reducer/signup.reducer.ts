import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICurrency,
  ISIGN_UP_USER_INITIAL_STATE,
  ICapiumSocialAccount,
  IGoogleSocialAccount,
  ISwitchAccount,
  IUpdateUserProfile,
  IUser,
  IUserInfo,
} from '../types/signup.types';
import { string } from 'yup';
export const SIGN_UP_USER_INITIAL_STATE: ISIGN_UP_USER_INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    fullName: '',
    country: '',
    id: '',
    accounts: null,
    active_account: '',
    socialAuth: null,
    profile_image:'',
    profile_image_key: '',
    profile_image_url: '',
    profile_image_file: null,
    profile_image_local_url : '',
  },
  token: '',
  refreshToken: '',
  socialAccount: {
    capium: { capiumEmail: '', capiumId: '', id: '' },
    google: { googleEmail: '', googleId: '', id: '' },
    isLinkedSocAcc: false,
  },
  userInfo: {
    company: {
      currency: {
        country: '',
        description: '',
        id: '',
        value: '',
      },
      created: '',
      date_format: '',
      id: '',
      name: '',
      logo: '',
      integration_company: [
        { integrate_company_id: 1, integrate_company_name: 'Item 1', imageUrl: 'https://via.placeholder.com/50', isIntegrate: false },
        { integrate_company_id: 2, integrate_company_name: 'Item 2', imageUrl: 'https://via.placeholder.com/50', isIntegrate: true },
        { integrate_company_id: 3, integrate_company_name: 'Item 3', imageUrl: 'https://via.placeholder.com/50', isIntegrate: false },
      ],
      company_default_permission:[]
    },
  },
  currencies: [
    {
      country: '',
      description: '',
      id: '',
      value: '',
    },
  ],
  isSkipOnboarding: false,
};

const initialState = SIGN_UP_USER_INITIAL_STATE;

export const SignUpUserSlice = createSlice({
  name: 'signUpUserSlice',
  initialState,
  reducers: {
    setUser: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISIGN_UP_USER_INITIAL_STATE>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    setTokens: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateUserData: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<{
        company: ICompany;
        active_account: string;
        account: IAccount;
      }>
    ) => {
      state.user.active_account = action.payload.active_account;
      state.userInfo.company = action.payload.company;
      state.user.accounts = [action.payload.account];
    },
    updateUser: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
    },
    setUserInfo: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUserInfo>
    ) => {
      state.userInfo.company = action.payload.company;
    },
    setCompany: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ICompany>
    ) => {
      state.userInfo.company = action.payload;
    },
    setSocialAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ICapiumSocialAccount>
    ) => {
      state.socialAccount.capium = action.payload;
    },
    setGoogleSocialAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<{
        accData: IGoogleSocialAccount;
        isLinkedSocAcc: boolean;
      }>
    ) => {
      state.socialAccount.google = action.payload.accData;
      state.socialAccount.isLinkedSocAcc = action.payload.isLinkedSocAcc;
    },
    setCurrencies: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ICurrency[]>
    ) => {
      state.currencies = action.payload;
    },
    updateUserProfile: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUpdateUserProfile>
    ) => {
      const { user, company } = action.payload;
      state.user.email = user.email;
      state.user.country = user.country;
      state.user.fullName = user.fullName;
      if (company) {
        state.userInfo.company.currency = company.currency;
        state.userInfo.company.date_format = company.date_format;
      }
    },
    setUserAvatar: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<{key: string, url?: string }>
    ) => {
      state.user.profile_image_key = action.payload.key;
      state.user.profile_image_url = action.payload.url;
      console.log("This is action.payload of user", action.payload)
    },
    setProfileImageKey:(state: ISIGN_UP_USER_INITIAL_STATE,  action: PayloadAction<string>)=>{
      state.user.profile_image_key = action.payload;
    },
    setProfileImage: (state: ISIGN_UP_USER_INITIAL_STATE, action: PayloadAction<File | Blob>) => {
      state.user.profile_image_file = action.payload;
    },
    setLocalProfileImageURL:(state: ISIGN_UP_USER_INITIAL_STATE, action: PayloadAction<string>)=>{
      state.user.profile_image_local_url = action.payload;
    },
    switchAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISwitchAccount>
    ) => {
      state.user = { ...state.user, ...action.payload.user };
      state.userInfo.company = {
        ...state.userInfo.company,
        ...action.payload.company,
      };
    },
    setIsSkipOnboarding: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isSkipOnboarding = action.payload;
    },
    updateUserAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IAccount>
    ) => {
      state.user.accounts =
        state.user.accounts &&
        state.user.accounts.map((acc) =>
          acc.id === action.payload.id ? action.payload : acc
        );
    },
  },
});

export const {
  setUser,
  setSocialAccount,
  updateUser,
  setUserInfo,
  setCurrencies,
  setCompany,
  updateUserProfile,
  setUserAvatar,
  setProfileImageKey,
  switchAccount,
  setTokens,
  updateUserData,
  setGoogleSocialAccount,
  setIsSkipOnboarding,
  updateUserAccount,
  setProfileImage,
  setLocalProfileImageURL,
} = SignUpUserSlice.actions;

export const signUpUserReducer = SignUpUserSlice.reducer;
