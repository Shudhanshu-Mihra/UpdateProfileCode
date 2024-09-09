import { apiServices } from 'services/api-service';
import {  ICreateSupplierAcc, IUpdateSupplierAcc } from '../master.types';


type Direction = 'supplier' | 'payment-type';

export const createTabAccItem = (
  payload: ICreateSupplierAcc,
  urlDirection: Direction
) => {
  const URL = `supplier-account/create`;
  return apiServices.postData(URL, payload);
};
export const updateTabAccItem = (
  payload: IUpdateSupplierAcc,
  urlDirection: Direction
) => {
  const URL = `supplier-account/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllSupplierAccountItems = (
  params?: ISearchParams
) => {
  const URL = `supplier-account/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getSupplierAccountById = (
  supplierId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `supplier-account/get/${supplierId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deleteTabItem = (
  supplierId: string,
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `supplier-account/delete/${supplierId}`;
  return apiServices.deleteData(URL, { active_account });
};
