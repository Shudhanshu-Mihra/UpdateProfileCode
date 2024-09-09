import Axios from 'axios';

import { apiServices } from 'services/api-service';
import { removeEmptyField } from 'services/utils';

import { IGetReceiptsParams, IPostEmail } from './types/inbox.types';

import { CONFIG } from 'constants/config';

interface IReceiptsIds {
  receipts: string[];
  active_account?: string;
}

export const getReceipts = (params?: IGetReceiptsParams) => {
  const URL = '/receipt/get-all';

  params && removeEmptyField(params);
  return apiServices.fetchData(URL, params);
};

export const downloadCSV = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/download-csv';
  return apiServices.postData(URL, receiptsIds);
};

export const markAsPaid = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-paid';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsUnpaid = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-unpaid';
  // console.log(URL,receiptsIds);
  return apiServices.postData(URL, receiptsIds);
};
export const markAsApproved = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-approved';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsWithdrawlApproval = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/withdrawl-approval';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsRejected = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-rejected';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsWithdrawlRejection = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/withdrawl-rejection';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsPublished = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-published';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsUnpublished = (receiptsIds: IReceiptsIds) => {
  const URL = '/receipt/mark-unpublished';
  return apiServices.postData(URL, receiptsIds);
};

export const postEmail = (payload?: IPostEmail) => {
  const URL = '/receipt/send-email';
  return apiServices.postData(URL, payload);
};

export const downloadXLXS = (receiptsIds: IReceiptsIds, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/download-xlsx`;

  return Axios.post(URL, receiptsIds, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

export const receiptDelete = (receiptsIds: IReceiptsIds, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/delete`;

  return Axios.delete(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: receiptsIds,
  });
};
