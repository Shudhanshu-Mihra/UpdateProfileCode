import { apiServices } from 'services/api-service';
import {   ICreateCustomer, IUpdateCustomer } from '../master.types';


type Direction = 'supplier' | 'payment-type';

export const createTabSuppItem = (
  payload: ICreateCustomer,
  urlDirection: Direction
) => {
  const URL = `${urlDirection}/create`;
  return apiServices.postData(URL, payload);
};
export const updateTabSuppItem = (
  payload: IUpdateCustomer,     
  urlDirection: Direction        
) => {    
  const URL = `${urlDirection}/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllTabItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `${urlDirection}/get-many`;
  return apiServices.fetchData(URL, params);
};
   
export const getTabItemById = (  
  supplierId: string, 
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `${urlDirection}/get/${supplierId}`;
  return apiServices.fetchData(URL, { active_account });    
};
export const deleteTabItem = (
  supplierId: string,   
  urlDirection: Direction,
  active_account?: string | null
) => {
  const URL = `${urlDirection}/delete/${supplierId}`;
  return apiServices.deleteData(URL, { active_account });
};
