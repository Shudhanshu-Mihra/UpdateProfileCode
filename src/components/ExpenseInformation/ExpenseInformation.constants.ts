import { IOption } from "components/CustomSelect/types";

export const ExpenseDetailsContentInitialState = {
  statusValue: '',
  dateValue: null,
  supplierValue: '',
  currencyValueId: '',
  taxValue: null,
  totalValue: null,
  descriptionValue: '',
  receiptid:"",
  vatCodeValue: '',
  netValue: null,
  formattedDate: '',
};

interface IData {
  state: IuseexpenseContentState;
  formatedCurrencies: { label: string; value: string; id: string }[];
  categoriesForSelect: any[] | IOption[];
  suppliersForSelect: any[] | IOption[];
  typesForSelect: any[] | IOption[];
  disabledOption: { category: boolean; suppliers: boolean; types: boolean };
  paymentStatus: boolean;
  publishStatus?: boolean;
}

export const getInputFields = (funcArray: any[], data: IData) => {
  const {
    state,
    categoriesForSelect,
    disabledOption,
    formatedCurrencies,
    paymentStatus,
    suppliersForSelect,
    typesForSelect,
  } = data;
  return [
    {
      type: 'readOnly',
      label: 'Report Id',
      value: state.receiptid ? state.receiptid.toUpperCase() : '',
      onChange: funcArray[12],
    },
    {
      type: 'select',
      label: 'Owned By',
      value: state.currencyValue,
      options: formatedCurrencies,
      onChangeSelect: funcArray[4],
    },
    {
      type: 'input',
      label: 'Report Name',
      value: state.supplierValue,
      options: suppliersForSelect,
      onChange: funcArray[1],
    },
    {
      type: 'date',
      label: 'Report Date',
      value: state.dateValue,
      onChangeDate: funcArray[0],
    },
    {
      type: 'select',
      label: 'Currency',
      value: state.currencyValue,
      options: formatedCurrencies,
      onChangeSelect: funcArray[4],
    },
    {
      type: 'input',
      label: 'Description',
      value: state.supplierValue,
      options: suppliersForSelect,
      onChange: funcArray[1],
      isTextArea : true,
    },
    // {
    //   type: 'select',
    //   label: 'Supplier Account',
    //   isDisabled: disabledOption.suppliers,
    //   value: state.supplierAccountValue,
    //   options: suppliersForSelect,
    //   onChangeSelect: funcArray[2],
    // },
    {
      type: 'select',
      label: 'Paid',
      isDisabled: disabledOption.category,
      value: state.categoryValue,
      options: categoriesForSelect,
      onChangeSelect: funcArray[3],
    },
    {
      type: 'select',
      label: 'Payment Method',
      value: state.typeValue,
      options: typesForSelect,
      onChangeSelect: funcArray[9],
    },
    {
      type: 'input',
      label: 'Internal Note',
      value: state.supplierValue,
      options: suppliersForSelect,
      onChange: funcArray[1],
      isTextArea : true,
    },
    // {
    //   type: 'input',
    //   inputType: 'number',
    //   label: 'Net',
    //   value: state.netValue || '',
    //   onChange: funcArray[7],
    // },
    // {
    //   type: 'input',
    //   inputType: 'number',
    //   label: 'Tax',
    //   value: state.taxValue || '',
    //   onChange: funcArray[8],
    // },
    // {
    //   type: 'input',
    //   inputType: 'number',
    //   label: 'Total',
    //   value: state.totalValue || '',
    //   onChange: funcArray[9],
    // },
    // {
    //   type: 'select',
    //   label: 'Type',
    //   isDisabled: disabledOption.types,
    //   value: state.typeValue,
    //   options: typesForSelect,
    //   onChangeSelect: funcArray[10],
    // },
    // {
    //   type: 'input',
    //   label: 'Description',
    //   value: state.descriptionValue,
    //   onChange: funcArray[11],
    //   isTextArea: true,
    // },
    // {
    //   type: 'checkbox',
    //   label: 'Payment status',
    //   labelText: 'Paid',
    //   value: paymentStatus,
    //   onChangeCheckbox: funcArray[12],
    // },
  ];
};

export type TInputFields = ReturnType<typeof getInputFields>;
