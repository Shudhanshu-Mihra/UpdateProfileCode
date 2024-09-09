import { IOption } from '../../CustomSelect/types';

export const photoDetailsContentInitialState = {
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
  paymentStatus: false,
  publishedStatus: false,
  isPublished: false,
};

interface IData {
  state: IusePhotoDetailsContentState;
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
    suppliersForSelect,
    typesForSelect,
    paymentStatus,
    publishStatus
  } = data;
  return [
    {
      type: 'input',
      label: 'Supplier',
      value: state.supplierValue,
      options: suppliersForSelect,
      onChange: funcArray[1],
    },
    // {
    //   type: 'input',
    //   label: 'Receipt Id',
    //   value: state.receiptid ? state.receiptid.toUpperCase() : '',
    //   onChange: funcArray[12],
    // },
    {
      type: 'select',
      label: 'Supplier Account',
      isDisabled: disabledOption.suppliers,
      value: state.supplierAccountValue,
      options: suppliersForSelect,
      onChangeSelect: funcArray[2],
    },
    {
      type: 'select',
      label: 'Category',
      isDisabled: disabledOption.category,
      value: state.categoryValue,
      options: categoriesForSelect,
      onChangeSelect: funcArray[3],
    },
    {
      type: 'date',
      label: 'Date',
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
    // {
    //   type: 'input',
    //   label: 'VAT Rate',
    //   value: state.vatCodeValue,
    //   onChange: funcArray[5],
    // },
    {
      type: 'input',
      inputType: 'number',
      label: 'Net',
      value: state.netValue || '',
      onChange: funcArray[6],
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Tax',
      value: state.taxValue || '',
      onChange: funcArray[7],
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Total',
      value: state.totalValue || '',
      onChange: funcArray[8],
    },
    {
      type: 'select',
      label: 'Payment Type',
      isDisabled: disabledOption.types,
      value: state.paymentTypeValue,
      options: typesForSelect,
      onChangeSelect: funcArray[9],
    },
    // {
    //   type: 'input',
    //   label: 'Description',
    //   value: state.descriptionValue,
    //   onChange: funcArray[],
    //   isTextArea: true,
    // },
    // {
    //   type: 'checkbox',
    //   label: 'Payment status',
    //   labelText: 'Paid',
    //   value: state.paymentStatus,
    //   onChangeCheckbox: funcArray[10],
    // },
  ];
};

export type TInputFields = ReturnType<typeof getInputFields>;
