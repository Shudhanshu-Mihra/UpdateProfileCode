import { apiServices } from 'services/api-service';

interface IUpdateCompanyInvitation {
  email?: string;
  role?: string;
  isResendEmail?: boolean;
}
export const getCompanyInvitation = (params?: ISearchParams) => {
  const URL = `company/get-invitation`;
  return apiServices.fetchData(URL, params);
};

export const updateCompanyInvitation = (
  payload: IUpdateCompanyInvitation,
  inviteId: string
) => {
  const URL = `company-member/update-create-company-invite/${inviteId}`;
  return apiServices.changeData(URL, payload);
};

export const deleteCompanyInvitation = (inviteId: string) => {
  const URL = `company-member/delete-create-company-invite/${inviteId}`;
  return apiServices.deleteData(URL);
};
