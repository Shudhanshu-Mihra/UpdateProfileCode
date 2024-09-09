import { apiServices } from 'services/api-service';

export const updatePassword = (payload: {
  token: string;
  newPassword: string;
}) => {
  const URL = '/auth/update-password';
  return apiServices.changeData(URL, payload);
};
