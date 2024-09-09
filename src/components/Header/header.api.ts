import { apiServices } from 'services/api-service';

export const getUserCompanies = () => {
  const URL = `company-member/get-all`;
  return apiServices.fetchData(URL);
};

export const selectActiveAccount = (accountId: string) => {
  const URL = `company-member/select/${accountId}`;
  return apiServices.changeData(URL, {});
};
