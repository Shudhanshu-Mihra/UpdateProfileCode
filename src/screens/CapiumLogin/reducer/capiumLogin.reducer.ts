import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICapiumAccount,
  ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE,
} from '../types/capiumLogin.types';

export const CAPIUM_LOGIN_ACCOUNT_INITIAL_STATE: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE =
  {
    capiumAccounts: [],
  };

const initialState = CAPIUM_LOGIN_ACCOUNT_INITIAL_STATE;

export const CapiumLoginSlice = createSlice({
  name: 'capiumLoginSlice',
  initialState,
  reducers: {
    setCapiumAccount: (
      state: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE,
      action: PayloadAction<ICapiumAccount>
    ) => {
      const filteredArray = state.capiumAccounts.filter(
        (item) => item.email !== action.payload.email
      );
      state.capiumAccounts = state.capiumAccounts.length
        ? [...filteredArray, action.payload]
        : [action.payload];
    },
  },
});

export const { setCapiumAccount } = CapiumLoginSlice.actions;

export const capiumLoginReducer = CapiumLoginSlice.reducer;
