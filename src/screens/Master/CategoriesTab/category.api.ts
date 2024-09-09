import { apiServices } from 'services/api-service';
import { IUpdateCategory, ICreateCategory } from '../master.types';

type Direction = 'category' | 'supplier' | 'suppliers' | 'customer'| 'customerAcc' | 'payment-type';

export const createCategoryItem = async (
  payload: ICreateCategory,
  urlDirection: Direction
) => {
  const URL = `category/create`;
  return await apiServices.postData(URL, payload);
};
export const updateCategoryItem = (
  payload: IUpdateCategory,
  urlDirection: Direction
) => {
  const URL = `category/update`;
  return apiServices.changeData(URL, payload);
};
export const getAllCategoryItems = (
  urlDirection: Direction,
  params?: ISearchParams
) => {
  const URL = `category/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getCategoryItemById = (
  categoryId: string,
  active_account?: string | null
) => {
  const URL = `category/get/${categoryId}`;
  return apiServices.fetchData(URL, { active_account });
};
export const deleteCategoryItem = (
  categoryId: string,
  active_account?: string | null
) => {
  console.log('====');
  const URL = `category/delete/${categoryId}`;
  return apiServices.deleteData(URL, { active_account });
};
