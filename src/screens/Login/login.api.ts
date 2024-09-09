import { apiServices } from 'services/api-service';

import { ILogin } from './types/login.types';

export const login = (payload: ILogin) => {
  const URL = '/auth/sign-in';
  return apiServices.postData(URL, payload);
};

export const loginWithGoogle = (payload: IOAuthLogin) => {
  const URL = '/auth/o-auth';
  return apiServices.postData(URL, payload);
};
