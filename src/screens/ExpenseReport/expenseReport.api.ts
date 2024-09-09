import Axios from 'axios';

import { apiServices } from 'services/api-service';
import { removeEmptyField } from 'services/utils';

import { IcreateReportHandlerParams, ICreateReportApi } from './types/expenseReport.types';

import { CONFIG } from 'constants/config';

// interface IReceiptsIds {
//   receipts: string[];
//   active_account?: string;
// }
export const getAllReportsApi = (params?: IcreateReportHandlerParams) => {
  const URL = '/expense-report/get-all';
  params && removeEmptyField(params);
  return apiServices.fetchData(URL, params);
};

export const createExpenseReportApi = (
  payload: ICreateReportApi,
) => {
  const URL = '/expense-report/create';
  return apiServices.postData(URL, payload);
};
// export const updateExpenseTabItem = (
//   payload: ICreateExpense,
//   urlDirection: Direction
// ) => {
//   const URL = `${urlDirection}/update`;
//   return apiServices.changeData(URL, payload);
// };
// export const getAllTabItems = (
//   urlDirection: Direction,
//   params?: ISearchParams
// ) => {
//   const URL = `${urlDirection}/get-many`;
//   return apiServices.fetchData(URL, params);
// };

// export const getTabItemById = (
//   categoryId: string,
//   urlDirection: Direction,
//   active_account?: string | null
// ) => {
//   const URL = `${urlDirection}/get/${categoryId}`;
//   return apiServices.fetchData(URL, { active_account });
// };
// export const deleteTabItem = (
//   categoryId: string,
//   urlDirection: Direction,
//   active_account?: string | null
// ) => {
//   const URL = `${urlDirection}/delete/${categoryId}`;
//   return apiServices.deleteData(URL, { active_account });
// };
