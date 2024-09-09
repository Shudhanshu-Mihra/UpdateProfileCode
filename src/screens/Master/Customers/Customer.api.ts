import { apiServices } from 'services/api-service';
import {   ICreateCustomer, IUpdateCustomer } from '../master.types';


type Direction = 'customers' | 'payment-type';

export const createTabCustomItem = (
  payload: ICreateCustomer,
  urlDirection: Direction
) => {
  const URL = `customer/create`;
  return apiServices.postData(URL, payload);
};
export const updateTabCustomItem = (
  payload: IUpdateCustomer,
  urlDirection: Direction
) => {
  const URL = `customer/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllTabItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `customer/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getTabItemById = (
  customerId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `customer/get/${customerId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deleteTabItem = (
  customerId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `customer/delete/${customerId}`;
  return apiServices.deleteData(URL, { active_account });
};
