import { apiServices } from 'services/api-service';

export const userInfoCreate = (payload: {
  withAccountant?: boolean;
  active_account?: string;
  name: string;
  currency: string;
  date_format: string;
  // data_arr?: [] ;
  // date_format: string;
  // date_format: string;
}) => {
  const URL = '/company/create';
  return apiServices.postData(URL, payload);
};
