import { apiServices } from 'services/api-service';

export const getUserCompanies = () => {
  const URL = `company/get-all`;
  return apiServices.fetchData(URL);
};
