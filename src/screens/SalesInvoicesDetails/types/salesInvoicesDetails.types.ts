export interface IuseSalesInvoicesDetailsState {
  statusValue: string;
  dateValue: Date | null;
  dueDateValue: Date | null;
  formattedDate: string;
  net: number | null;
  tax: number | null;
  total: number | null;
  invoiceId: string;
  customerName: IOption | any;
  customerAccount: IOption | any;
  salesCategory: IOption | any;
  currencyValue: IOption | any;
}

export interface IGetFieldsFunctionProps {
  funcArray: any[];
  data: IData;
}

interface IData {
  state: IuseSalesInvoicesDetailsState;
  disabledOption: { category: boolean; suppliers: boolean; types: boolean };
}
