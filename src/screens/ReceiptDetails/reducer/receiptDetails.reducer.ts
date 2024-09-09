import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRECEIPT_DETAILS_INITIAL_STATE } from '../types/receiptDetails.types';

export const RECEIPT_DETAILS_INITIAL_STATE: IRECEIPT_DETAILS_INITIAL_STATE = {
  categoriesForSelect: [],
  suppliersForSelect: [],
  typesForSelect: [],
};

const initialState = RECEIPT_DETAILS_INITIAL_STATE;

export const ReceiptDetailsSlice = createSlice({
  name: 'receiptDetailsSlice',
  initialState,
  reducers: {
    setItemsForSelect: (
      state: IRECEIPT_DETAILS_INITIAL_STATE,
      action: PayloadAction<{
        fieldName:
          | 'categoriesForSelect'
          | 'suppliersForSelect'
          | 'typesForSelect';
        items: ITabItem[];
      }>
    ) => {
      state[action.payload.fieldName] = action.payload.items.map((item) => ({
        label: item.name,
        value: item.name,
        id: item.id,
      }));
    },
  },
});

export const { setItemsForSelect } = ReceiptDetailsSlice.actions;

export const ReceiptDetailsReducer = ReceiptDetailsSlice.reducer;
