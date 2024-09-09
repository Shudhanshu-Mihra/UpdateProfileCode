import { apiServices } from 'services/api-service';

export const getReceiptStatistic = (payload?: {
  date_start?: string;
  date_end?: string;
}) => {
  const URL = `dashboard/get-statistic`;
  return apiServices.fetchData(URL, {
    date_start: payload?.date_start,
    date_end: payload?.date_end,
  });
};
export const getUserExist = (payload?: {
  date_start?: string;
  date_end?: string;
  active_account: string | null;
}) => {
  const URL = `dashboard/get-user`;
  return apiServices.fetchData(URL, {
    date_start: payload?.date_start,
    date_end: payload?.date_end,
    active_account: payload?.active_account,
  });
};

