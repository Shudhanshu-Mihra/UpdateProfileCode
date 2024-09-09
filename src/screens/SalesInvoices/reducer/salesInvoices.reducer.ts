import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  // ISalesInvoice,
  IINVOICE_INITIAL_STATE
} from '../types/salesInvoices.types';

export const SALES_INVOICES_INITIAL_STATE: IINVOICE_INITIAL_STATE = {
  count: null,
  totalCount: null,
  invoicesList: [],
  selectedInvoice: null,
  selectedInvoiceIndex: null,
  isAllChecked: false,
  isFetchingData: false,
  isCompanyChanged: false,
};

export const SalesInvoicesSlice = createSlice({
  name: 'salesInvoicesSlice',
  initialState: SALES_INVOICES_INITIAL_STATE,
  reducers: {
    setInvoicesList: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: IInvoice[];
        totalCount: number;
      }>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.invoicesList = action.payload.data.map((invoice) => ({
        ...invoice,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    setCheckedItem: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.invoicesList = state.invoicesList.map((invoice) =>
        invoice.id === action.payload
          ? {
              ...invoice,
              isChecked: !invoice.isChecked,
            }
          : invoice
      );
      const isCheckedArr = state.invoicesList.filter(
        (invoice) => invoice.isChecked === true
      );
      state.isAllChecked = isCheckedArr.length === state.invoicesList.length;
    },
    setCheckedAllItems: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.invoicesList = state.invoicesList.map((invoice) => ({
        ...invoice,
        isChecked: action.payload,
      }));
      state.isAllChecked = action.payload;
    },
    updateInvoice: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<IInvoice>
    ) => {
      state.invoicesList = state.invoicesList.map((invoice) =>
        invoice.id === action.payload.id ? action.payload : invoice
      );
    },
    selectInvoiceWithId: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      const activeIndex = state.invoicesList.findIndex(
        (invoice) => invoice.id === action.payload
      );
      state.selectedInvoiceIndex = activeIndex;
      state.selectedInvoice =
        state.invoicesList.find((invoice, index) => index === activeIndex) || null;
    },
    selectInvoice: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedInvoiceIndex = action.payload;
      state.selectedInvoice =
        state.invoicesList.find((invoice, index) => index === action.payload) || null;
    },
    setIsFetchingData: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingData = action.payload;
    },
    setIsCompanyChanged: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isCompanyChanged = action.payload;
    },
  },
});

export const { setInvoicesList, selectInvoice, selectInvoiceWithId, updateInvoice, setIsCompanyChanged, setIsFetchingData, setCheckedItem, setCheckedAllItems } = SalesInvoicesSlice.actions;

export const salesInvoicesReducer = SalesInvoicesSlice.reducer;
