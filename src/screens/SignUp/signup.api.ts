import { apiServices } from 'services/api-service';

import { ICreateUser } from './types/signup.types';

export const createUser = (payload: ICreateUser) => {
  const URL = '/auth/sign-up';
  return apiServices.postData(URL, payload);
};
