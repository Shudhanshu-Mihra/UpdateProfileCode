import { apiServices } from 'services/api-service';

export const createReceiptAccount = (payload: {
  email: string;
  token: string;
  country: string;
  newPassword: string;
}) => {
  const URL = 'auth/bind-social-account';
  return apiServices.updateData(URL, payload);
};
