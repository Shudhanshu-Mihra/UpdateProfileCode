import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMASTER_INITIAL_STATE } from '../master.types';

export const MASTER_INITIAL_STATE: IMASTER_INITIAL_STATE = {
  categories: { data: [], count: null },
  supplierAccounts: { data: [], count: null },
  customerAccounts: { data: [], count: null },
  customer: { data: [], count: null },
  supplier: { data: [], count: null },
  types: { data: [], count: null },
  selectedCategory: null,
  selectedMasterGlobalItem: null,
  activeTabName: 'Categories',
};

const initialState = MASTER_INITIAL_STATE;

export const MasterSlice = createSlice({
  name: 'masterSlice',
  initialState,
  reducers: {
    setCategories: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.categories.data = action.payload.data;
      state.categories.count = action.payload.count;
    },
    setSupplierAccounts: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabSuppAccItem[]; count: number }>
    ) => {
      state.supplierAccounts.data = action.payload.data;
      state.supplierAccounts.count = action.payload.count;
    },
    setCustomerAccounts: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.customerAccounts.data = action.payload.data;
      state.customerAccounts.count = action.payload.count;
    },
    setSupplier: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.supplier.data = action.payload.data;
      state.supplier.count = action.payload.count;
    },
    setCustomer: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.customer.data = action.payload.data;
      state.customer.count = action.payload.count;
    },
    setTypes: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.types.data = action.payload.data;
      state.types.count = action.payload.count;
    },
    setTabItem: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<ITabItem>
    ) => {
      state.selectedCategory = action.payload;
    },
    setMasterCurrentActionItem: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<any[]> // itemid, index, itemName
    ) => {
      console.log(action.payload);
      state.selectedMasterGlobalItem = action.payload;
    },
    setActiveTab: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.activeTabName = action.payload;
    },
  },
});

export const {
  setCategories,
  setSupplierAccounts,
  setSupplier,
  setCustomerAccounts,
  setCustomer,
  setTypes,
  setTabItem,
  setMasterCurrentActionItem,
  setActiveTab,
} = MasterSlice.actions;

export const MasterReducer = MasterSlice.reducer;
