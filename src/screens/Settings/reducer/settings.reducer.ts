import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISETTINGS_INITIAL_STATE } from '../types/settings.types';

export const SETTINGS_INITIAL_STATE: ISETTINGS_INITIAL_STATE = {
  companyMembers: { members: [], count: null },
  companies: { companies: [], count: 0 },
  companySwitcher: [],
  isFetchingData: false,
  isSwitchCompany: false,
  isLinkedSocAcc: false,
};

const initialState = SETTINGS_INITIAL_STATE;

export const SettingsSlice = createSlice({
  name: 'masterSlice',
  initialState,
  reducers: {
    setMembers: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<{ members: IMember[]; count: number }>
    ) => {
      state.companyMembers.members = action.payload.members;
      state.companyMembers.count = action.payload.count;
    },
    setCompanies: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<{ companies: ICompanySettings[]; count: number }>
    ) => {
      state.companies = action.payload;
      state.isFetchingData = true;
    },
    setCompanySwitcher: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<ICompaniesSwitcher[]>
    ) => {
      state.companySwitcher = action.payload;
      state.isFetchingData = false;
    },
    setIsSwitchCompany: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isSwitchCompany = action.payload;
    },
    setIsLinkedSocAcc: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isLinkedSocAcc = action.payload;
    },
  },
});

export const {
  setMembers,
  setCompanies,
  setCompanySwitcher,
  setIsSwitchCompany,
  setIsLinkedSocAcc,
} = SettingsSlice.actions;

export const SettingsReducer = SettingsSlice.reducer;
