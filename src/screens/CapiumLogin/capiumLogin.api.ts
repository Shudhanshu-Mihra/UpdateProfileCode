import { apiServices, ICapiumAuthPayload } from 'services/api-service';

export const capiumFetchUser = (payload: ICapiumAuthPayload) =>
  apiServices.capiumFetchData(payload);

export const capiumLogin = (payload: IOAuthLogin) => {
  const URL = '/auth/o-auth';
  return apiServices.postData(URL, payload);
};
