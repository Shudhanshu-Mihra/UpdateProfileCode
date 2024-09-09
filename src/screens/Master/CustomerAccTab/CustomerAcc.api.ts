import { apiServices } from 'services/api-service';
import {   ICreateCustomerAcc, IUpdateCustomerAcc } from '../master.types';


type Direction = 'customeracc' | 'payment-type';

export const createTabCustomAccItem = (
  payload: ICreateCustomerAcc,
  urlDirection: Direction
) => {
  const URL = `customer-account/create`;
  return apiServices.postData(URL, payload);
};
export const updateTabCustomAccItem = (
  payload: IUpdateCustomerAcc,
  urlDirection: Direction
) => {
  const URL = `customer-account/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllTabItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `customer-account/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getTabItemById = (
  categoryId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `customer-account/get/${categoryId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deleteTabItem = (
  categoryId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `customer-account/delete/${categoryId}`;
  return apiServices.deleteData(URL, { active_account });
};
