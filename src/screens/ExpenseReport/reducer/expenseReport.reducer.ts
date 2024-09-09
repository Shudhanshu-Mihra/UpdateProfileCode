import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IREPORT_INITIAL_STATE, IReportGetAll } from '../types/expenseReport.types';

export const REPORT_INITIAL_STATE: IREPORT_INITIAL_STATE = {
  count: null,
  totalCount: null,
  reportsList: [],
  selectedReport: null,
  selectedReportIndex: null,
  isFetchingReportData: false,
  isAllChecked: false,
  isCompanyChanged: false,
};

const initialState = REPORT_INITIAL_STATE;

export const expReportSlice = createSlice({
  name: 'expReportSlice',
  initialState,
  reducers: {
    setReports: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: IReportGetAll[];
        totalCount: number;
      }>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.reportsList = action.payload.data.map((report) => ({
        ...report,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    setReportCheckedItem: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.reportsList = state.reportsList.map((report) =>
        report.expense_report_id === action.payload
      ? {
        ...report,
        isChecked: !report.isChecked,
      }
      : report
    );
    const isCheckedArr = state.reportsList.filter(
      (report) => report.isChecked === true
    );
    state.isAllChecked = isCheckedArr.length === state.reportsList.length;
    },
    setCheckedAllItems: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.reportsList = state.reportsList.map((report) => ({
        ...report,
        isChecked: action.payload,
      }));
      state.isAllChecked = action.payload;
    },
    updateReport: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<IReportGetAll>
    ) => {
      state.reportsList = state.reportsList.map((report) =>
        report.expense_report_id === action.payload.expense_report_id ? action.payload : report
      );
    },
    selectReportWithId: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      const activeIndex = state.reportsList.findIndex(
        (report) => report.expense_report_id === action.payload
      );
      state.selectedReportIndex = activeIndex;
      state.selectedReport =
        state.reportsList.find((item, index) => index === activeIndex) || null;
    },
    selectReport: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedReportIndex = action.payload;
      state.selectedReport =
        state.reportsList.find((report, index) => index === action.payload) || null;
    },
    setIsFetchingDate: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingReportData = action.payload;
    },
    setIsCompanyChanged: (
      state: IREPORT_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isCompanyChanged = action.payload;
    },
  },
});

export const {
  setReports,
  selectReport,
  selectReportWithId,
  setIsFetchingDate,
  updateReport,
  setReportCheckedItem,
  setCheckedAllItems,
  setIsCompanyChanged,
} = expReportSlice.actions;

export const expenseReportReducer = expReportSlice.reducer;
