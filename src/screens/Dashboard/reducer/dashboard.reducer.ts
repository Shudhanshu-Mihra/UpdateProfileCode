import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDASHBOARD_INITIAL_STATE } from '../types';

export const DASHBOARD_INITIAL_STATE: IDASHBOARD_INITIAL_STATE = {
  companies: [],
  metric: { accepted: null, rejected: null, processing: null, review: null },
  receipts: null,
};

const initialState = DASHBOARD_INITIAL_STATE;

export const DashboardSlice = createSlice({
  name: 'dashboardSLice',
  initialState,
  reducers: {
    setStatistic: (
      state: IDASHBOARD_INITIAL_STATE,
      action: PayloadAction<IDASHBOARD_INITIAL_STATE>
    ) => {
      state.companies = action.payload.companies;
      state.metric = action.payload.metric;
      state.receipts = action.payload.receipts;
    },
  },
});

export const { setStatistic } = DashboardSlice.actions;

export const dashboardReducer = DashboardSlice.reducer;
