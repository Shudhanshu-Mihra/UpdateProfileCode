import Axios from 'axios';

import { apiServices } from 'services/api-service';
import { removeEmptyField } from 'services/utils';

import { IGetInvoicesParams, IPostEmail } from './types/salesInvoices.types';

import { CONFIG } from 'constants/config';

interface IInvoiceIds {
  receipts: string[];
  active_account?: string;
}

export const getInvoices = (params?: IGetInvoicesParams) => {
  const URL = '/sale-invoice/get-all';
  params && removeEmptyField(params);
  return apiServices.fetchData(URL, params);
};

export const markAsInvoicePaid = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-paid';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceUnpaid = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-unpaid';
  // console.log(URL,receiptsIds);
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceApproved = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-approved';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceWithdrawlApproval = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/withdrawl-approval';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceRejected = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-rejected';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceWithdrawlRejection = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/withdrawl-rejection';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoicePublished = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-published';
  return apiServices.postData(URL, receiptsIds);
};
export const markAsInvoiceUnpublished = (receiptsIds: IInvoiceIds) => {
  const URL = '/sale-invoice/mark-unpublished';
  return apiServices.postData(URL, receiptsIds);
};

export const updateInvoiceItem = (payload: IUpdateReceiptItemPayload) => {
  const URL = 'sale-invoice/update';
  return apiServices.changeData(URL, payload);
};

// export const downloadCSV = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/download-csv';
//   return apiServices.postData(URL, receiptsIds);
// };

// export const markAsPaid = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-paid';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsUnpaid = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-unpaid';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsApproved = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-approved';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsWithdrawlApproval = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/withdrawl-approval';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsRejected = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-rejected';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsWithdrawlRejection = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/withdrawl-rejection';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsPublished = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-published';
//   return apiServices.postData(URL, receiptsIds);
// };
// export const markAsUnpublished = (receiptsIds: IInvoiceIds) => {
//   const URL = '/receipt/mark-unpublished';
//   return apiServices.postData(URL, receiptsIds);
// };

export const postEmail = (payload?: IPostEmail) => {
  const URL = '/sale-invoice/send-email';
  return apiServices.postData(URL, payload);
};

// export const downloadXLXS = (receiptsIds: IInvoiceIds, token: string) => {
//   const URL = `${CONFIG.apiUrl}receipt/download-xlsx`;

//   return Axios.post(URL, receiptsIds, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     responseType: 'blob',
//   });
// };

export const invoiceDeleteAPI = (invoiceIds: IInvoiceIds, token: string) => {
  const URL = `${CONFIG.apiUrl}sale-invoice/delete`;

  return Axios.delete(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: invoiceIds,
  });
};
