import { apiServices } from 'services/api-service';
import { IUpdateCategory, ICreateCategory} from '../master.types'
type Direction = 'payment-type';
export interface ICreatePayment {
  name: string;
  payment_ref:string;
  payment_default:boolean;
  active_account?: string | null;
}

export interface IUpdatePayment extends ICreatePayment {
  id: string;
}
export const createPaymentMethod = (
  payload: ICreatePayment,
  urlDirection: Direction
) => {
  const URL = `payment-type/create`;
  return apiServices.postData(URL, payload);
};
export const updatePaymentMethod = (
  payload: IUpdatePayment,
  urlDirection: Direction
) => {
  const URL = `payment-type/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllTabItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `payment-type/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getpaymentItemById = (
  categoryId: string,
  active_account?: string | null
) => {
  const URL = `payment-type/get/${categoryId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deletePaymentAPI = (
  paymentId: string,
  active_account?: string | null
) => {
  const URL = `payment-type/delete/${paymentId}`;
  return apiServices.deleteData(URL, { active_account });
};
