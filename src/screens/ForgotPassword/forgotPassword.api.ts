import { apiServices } from 'services/api-service';

export const forgotPasswordRequest = (email: string) => {
  const URL = `/auth/reset-password-request?email=${email}`;
  return apiServices.fetchData(URL);
};
