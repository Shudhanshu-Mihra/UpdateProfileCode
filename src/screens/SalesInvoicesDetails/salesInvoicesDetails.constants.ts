import { IGetFieldsFunctionProps } from './types/salesInvoicesDetails.types';

const defaultSelectValue: IOption = {
  value: '',
  label: '',
};
export const salesInvoicesDetailsInitialState = {
  statusValue: '',
  dateValue: null,
  dueDateValue: null,
  customerName: defaultSelectValue,
  customerAccount: defaultSelectValue,
  salesCategory: defaultSelectValue,
  currencyValue: defaultSelectValue,
  invoiceId: '',
  tax: null,
  total: null,
  net: null,
  formattedDate: '',
};

export const getInputFields = (props: IGetFieldsFunctionProps) => {
  const {
    data: { state, disabledOption },
    funcArray,
  } = props;
  return [
    {
      type: 'select',
      label: 'Customer Name',
      isDisabled: false,
      value: state.customerName,
      options: [],
      onChangeSelect: funcArray[3],
    },
    {
      type: 'select',
      label: 'Customer Account',
      isDisabled: false,
      value: state.customerAccount,
      options: [],
      onChangeSelect: funcArray[4],
    },
    {
      type: 'select',
      label: 'Sales Category',
      isDisabled: false,
      value: state.salesCategory,
      options: [],
      onChangeSelect: funcArray[5],
    },
    {
      type: 'input',
      label: 'Invoice ID',
      value: state.invoiceId,
      onChange: funcArray[2],
    },
    {
      type: 'date',
      label: 'Date',
      value: state.dateValue,
      onChangeDate: funcArray[0],
    },

    {
      type: 'date',
      label: 'Due Date',
      value: state.dueDateValue,
      onChangeDate: funcArray[1],
    },
  ];
};

export type TInvoiceInputFields = ReturnType<typeof getInputFields>;
