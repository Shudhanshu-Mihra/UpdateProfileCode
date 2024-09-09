import { add, format } from 'date-fns';
import decode from 'jwt-decode';
import imageCompression from 'browser-image-compression';

import { ICurrency } from 'screens/SignUp/types/signup.types';
import { IInvites } from 'screens/Invites/types/invites.types';
import { getCompanyLogo } from 'screens/Settings/settings.api';

import { ROUTES } from 'constants/routes';

interface IFormdataProps {
  active_account?: string | null;
  currency?: string;
  date_format?: string;
  selectedCompanyLogo?: Blob | null;
  companyName: string;
  companyLogo: File | null;
}

interface ISortProps {
  sortValue?: string;
  sortableItems: IReceipt[];
  sortField: TReceiptKeys;
  sortOrder: string;
}
interface IInvoiceSortProps {
  sortValue?: string;
  sortableItems: IInvoice[];
  sortField: TInvoiceKeys;
  sortOrder: string;
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const getCompressedImage = async (file: File, maxSize?: number) => {
  const compressedFile = await imageCompression(file, {
    maxSizeMB: maxSize || 0.5,
  });
  return compressedFile;
};

export const hitapiwithbinary = (file: File): Promise<ArrayBuffer | null | string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = function(e) {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(new Error('Failed to read file'));
    };
  });
}
export const removeEmptyField = (params: ISearchParams) => {
  Object.keys(params).forEach((param) => {
    if (!params[param as keyof typeof params]) {
      delete params[param as keyof typeof params];
    }
  });
};

export const dateDiffInDays = (a: Date, b: Date) => {
  const expiredDate = add(b, { days: 2 });
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(
    expiredDate.getFullYear(),
    expiredDate.getMonth(),
    expiredDate.getDate()
  );

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
};

export const getIsDisabledLink = (
  linkRoute: string,
  active_account?: string | null
) => {
  return !active_account &&
    linkRoute !== ROUTES.invites &&
    !active_account &&
    linkRoute !== ROUTES.settings
    ? true
    : false;
};

export const getInvitationStatus = (diffInDays: number | null) =>
  (diffInDays && diffInDays >= 1) || diffInDays === 0
    ? 'Resend invitation'
    : diffInDays && diffInDays === -1
    ? 'Active since (1 day)'
    : diffInDays && diffInDays === -2
    ? 'Active since (2 days)'
    : 'Waiting for approval';

export const getFilteredMembers = (members: IMember[]) =>
  members?.filter(
    (member) => !member?.memberInvite || member?.memberInvite?.isActive
  );

export const setCompanyLogoHandler = (
  data: ICompaniesSwitcher[],
  companiesLogo?: (string | null)[]
) => {
  return data?.map((item: ICompaniesSwitcher, index: number) => {
    if (companiesLogo?.length && companiesLogo[index] === null) {
      return item;
    }
    if (companiesLogo?.length && companiesLogo[index] !== null) {
      return {
        ...item,
        company: { ...item.company, logo: companiesLogo[index] },
      };
    }
    return item;
  });
};

export const getCompaniesLogoHandler = async (
  data: ICompaniesSwitcher[],
  token: string
) => {
  try {
    const promiss = data.map(async (item) => {
      if (item.company.logo) {
        const { data } = await getCompanyLogo(item.company.id, token);
        return URL.createObjectURL(data);
      } else {
        return null;
      }
    });
    const companiesLogo = await Promise.all(promiss);
    return companiesLogo;
  } catch (error) {
    console.log(error);
  }
};

export const getInitials = (name: string) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...(name.matchAll(rgx) as any)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();
  return initials;
};

export const getFormattedDate = (date: string | Date, dateFormat: string) => {
  const formattedDate = format(new Date(date), dateFormat);
  return formattedDate;
};
export const setAndFormatDateToISO = (
  selectedDate: string,
  isTommorow?: boolean
) => {
  if (!selectedDate) return;
  const currentDate = new Date(selectedDate);
  currentDate.setHours(0, 0, 0, 0);
  if (isTommorow) {
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate.toISOString();
};

export const returnDateRange = (
  date: Date,
  fieldName: 'days' | 'months',
  dateCount: number
) => {
  date.setHours(0, 0, 0, 0);
  return {
    date_start: date.toISOString(),
    date_end: add(date, {
      [fieldName]: dateCount,
    }).toISOString(),
  };
};

export const getTodayDateRange = () => returnDateRange(new Date(), 'days', 1);
export const getYesterdayDateRange = () => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return returnDateRange(yesterday, 'days', 1);
};
export const getPrevWeekDateRange = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return returnDateRange(date, 'days', 7);
};
export const getLastMonthDateRange = () => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  return returnDateRange(date, 'months', 1);
};
//new
export const getThisMonthDateRange = () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  return returnDateRange(startOfMonth, 'months', 1);
};

export const getThisYearDateRange = () => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  return returnDateRange(startOfYear, 'months', 12);
};
export const getLastYearDateRange = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  date.setMonth(0);
  date.setDate(1);
  return returnDateRange(date, 'months', 12);
};

export const getThisWeekDateRange = () => {
  const today = new Date();
  const day = today.getDay();
  const startOfWeek = new Date(today);
  const diffToMonday = (day === 0 ? 6 : day - 1); 
  startOfWeek.setDate(today.getDate() - diffToMonday);
  return returnDateRange(startOfWeek, 'days', 7);
};
export const getLastWeekDateRange = () => {
  const today = new Date();
  const day = today.getDay();
  const startOfLastWeek = new Date(today);
  const diffToMonday = (day === 0 ? 6 : day - 1); 
  startOfLastWeek.setDate(today.getDate() - diffToMonday - 7); 
  return returnDateRange(startOfLastWeek, 'days', 7);
};

export const getFirstLetterUppercase = (text: string) =>
  text?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

export const getCorrectCustomId = (text: string) => {
  if (typeof text !== 'string' || !text) return;
  return text
    .split('')
    .map((item, index) =>
      index <= 1 ? item.toUpperCase() : index === 1 ? item + ' ' : item
    )
    .map((item) => (item === 'C' ? item + ' ' : item))
    .join('');
};

export const getFormatedCurrencies = (currencies: ICurrency[]) =>
  currencies?.map((currency) => ({
    label: `${currency.value} (${currency.description})`,
    value: currency.value,
    id: currency.id,
  }));

export const getReceiptDetailsCurrentSelectItem = (
  itemsArray: IOption[],
  itemId: string
) => {
  return itemsArray.find((item) => item.id === itemId);
};

export const getCompanyInitials = (companyName: string) => {
  if (!companyName) return;
  return companyName.split('')[0].toUpperCase();
};

export const getUserRole = (accounts: IAccount[], active_account: string) => {
  if (!accounts.length || !active_account) return;
  return accounts?.find((account) => account.id === active_account);
};

export const getSelectedUser = (members: IMember[], memberId: string) => {
  if (!members.length) return;
  return members.find((member: { id: string }) => member.id === memberId);
};

export const getSelectedItems = (items: IInvites[], itemId: string) => {
  if (!items.length) return;
  return items?.find((el: { id: string }) => el.id === itemId);
};

export const onCreateFormDataHandler = (
  data: IFormdataProps,
  isUpdate?: boolean,
  isDeleteLogo?: boolean
) => {
  const formData = new FormData();
  formData.append('name', data.companyName);
  data?.active_account &&
    formData.append('active_account', data?.active_account || '');
  data.companyLogo?.name && formData.append('logo', data.companyLogo);
  if (isUpdate) {
    isDeleteLogo && formData.append('isDeleteLogo', 'true');
  } else {
    formData.append('currency', data.currency || '');
    formData.append('date_format', data.date_format || '');
  }
  return formData;
};

export const isTokenExpired = (token: string) => {
  if (!token) return;
  const decodedToken: {
    id: string;
    expiresIn: number;
    iat: number;
    exp: number;
  } = decode(token);

  if (decodedToken.exp * 1000 < new Date().getTime()) {
    return true;
  } else {
    return false;
  }
};

export const setIsSorted = (
  sortField: string,
  sortOrder: TSorterOrder,
  columnName: string
) => sortField === columnName && sortOrder === 'asc';

export const getSortedItems = (props: ISortProps) => {
  const { sortField, sortOrder, sortableItems, sortValue } = props;
  const descOrder = sortOrder === 'asc' ? 1 : -1;
  const ascOrder = sortOrder === 'asc' ? -1 : 1;

  const sortByDate = (a: IReceipt, b: IReceipt) => {
    return Date.parse(a[sortField]) < Date.parse(b[sortField])
      ? ascOrder
      : Date.parse(a[sortField]) > Date.parse(b[sortField])
      ? descOrder
      : 0;
  };

  const sortByValue = (a: IReceipt, b: IReceipt) => {
    return a[sortField] < b[sortField]
      ? ascOrder
      : a[sortField] > b[sortField]
      ? descOrder
      : 0;
  };

  const sortByObjValue = (a: IReceipt, b: IReceipt) => {
    return a[sortField]?.[sortValue || ''] < b[sortField]?.[sortValue || '']
      ? ascOrder
      : a[sortField]?.[sortValue || ''] > b[sortField]?.[sortValue || '']
      ? descOrder
      : 0;
  };
  const sortItemsHandler = (func: (a: IReceipt, b: IReceipt) => number) =>
    sortableItems.sort(func);

  return { sortItemsHandler, sortByObjValue, sortByValue, sortByDate };
};


export const getSortedInvoiceItems = (props: IInvoiceSortProps) => {
  const { sortField, sortOrder, sortableItems, sortValue } = props;
  const descOrder = sortOrder === 'asc' ? 1 : -1;
  const ascOrder = sortOrder === 'asc' ? -1 : 1;

  const sortByDate = (a: IInvoice, b: IInvoice) => {
    return Date.parse(a[sortField]) < Date.parse(b[sortField])
      ? ascOrder
      : Date.parse(a[sortField]) > Date.parse(b[sortField])
      ? descOrder
      : 0;
  };

  const sortByValue = (a: IInvoice, b: IInvoice) => {
    return a[sortField] < b[sortField]
      ? ascOrder
      : a[sortField] > b[sortField]
      ? descOrder
      : 0;
  };

  const sortByObjValue = (a: IInvoice, b: IInvoice) => {
    return a[sortField]?.[sortValue || ''] < b[sortField]?.[sortValue || '']
      ? ascOrder
      : a[sortField]?.[sortValue || ''] > b[sortField]?.[sortValue || '']
      ? descOrder
      : 0;
  };
  const sortItemsHandler = (func: (a: IInvoice, b: IInvoice) => number) =>
    sortableItems.sort(func);

  return { sortItemsHandler, sortByObjValue, sortByValue, sortByDate };
};
