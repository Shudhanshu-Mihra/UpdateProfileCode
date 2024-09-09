import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IINBOX_INITIAL_STATE } from '../types/inbox.types';

export const INBOX_INITIAL_STATE: IINBOX_INITIAL_STATE = {
  count: null,
  totalCount: null,
  receipts: [],
  selectedReceipt: null,
  selectedReceiptIndex: null,
  isFetchingData: false,
  isAllChecked: false,
  isCompanyChanged: false,
  s3UploadStatus: []
};

const initialState = INBOX_INITIAL_STATE;

export const InboxSlice = createSlice({
  name: 'inboxSlice',
  initialState,
  reducers: {
    setReceipts: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: IReceipt[];
        totalCount: number;
      }>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.receipts = action.payload.data.map((receipt) => ({
        ...receipt,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    setCheckedItem: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.receipts = state.receipts.map((receipt) =>
        receipt.id === action.payload
          ? {
              ...receipt,
              isChecked: !receipt.isChecked,
            }
          : receipt
      );
      const isCheckedArr = state.receipts.filter(
        (item) => item.isChecked === true
      );
      state.isAllChecked = isCheckedArr.length === state.receipts.length;
    },
    setCheckedAllItems: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.receipts = state.receipts.map((receipt) => ({
        ...receipt,
        isChecked: action.payload,
      }));
      state.isAllChecked = action.payload;
    },
    updateReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<IReceipt>
    ) => {
      state.receipts = state.receipts.map((receipt) =>
        receipt.id === action.payload.id ? action.payload : receipt
      );
    },
    selectReceiptWithId: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      const activeIndex = state.receipts.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedReceiptIndex = activeIndex;
      state.selectedReceipt =
        state.receipts.find((item, index) => index === activeIndex) || null;
    },
    selectReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedReceiptIndex = action.payload;
      state.selectedReceipt =
        state.receipts.find((item, index) => index === action.payload) || null;
    },
    setIsFetchingData: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingData = action.payload;
    },
    setIsCompanyChanged: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isCompanyChanged = action.payload;
    },
    setS3UploadStatus: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<{key: string, url: string, job_id: string}[]>
    ) => {
      state.s3UploadStatus = action.payload;
    },
  },
});

export const {
  setReceipts,
  selectReceipt,
  selectReceiptWithId,
  setIsFetchingData,
  updateReceipt,
  setCheckedItem,
  setCheckedAllItems,
  setIsCompanyChanged,
  setS3UploadStatus
} = InboxSlice.actions;

export const inboxReducer = InboxSlice.reducer;
