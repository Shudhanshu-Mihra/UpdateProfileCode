import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionMeta, SingleValue } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { IState } from 'services/redux/reducer';
import {
  getFormatedCurrencies,
  getReceiptDetailsCurrentSelectItem,
} from 'services/utils';

import {
  getInputFields,
  salesInvoicesDetailsInitialState,
} from './salesInvoicesDetails.constants';
import { IuseSalesInvoicesDetailsState } from './types/salesInvoicesDetails.types';

import { ROUTES } from 'constants/routes';
import { DATE_FORMATS } from 'constants/strings';

export const useSalesInvoicesDetailsState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    inbox: { selectedReceipt },
    user: {
      user: { active_account },
      currencies,
      userInfo: { company },
    },
    receiptDetails: { categoriesForSelect, suppliersForSelect, typesForSelect },
  } = useSelector((state: IState) => state);

  const formatedCurrencies = getFormatedCurrencies(currencies);

  const currentCurrency = formatedCurrencies.find(
    (item) => item?.id === selectedReceipt?.currency?.id || 'btc'
  );

  const initialState = {
    ...salesInvoicesDetailsInitialState,
    currencyValue: currentCurrency || 'BTC',
  };

  const [state, setState] =
    useState<IuseSalesInvoicesDetailsState>(initialState);

  const [radioButtonValue, setRadioButtonValue] = useState('');
  const [isPublishStatus, setIsPublishStatus] = useState(
    selectedReceipt?.publish_status || false
  );
  const [isPaymentStatus, setIsPaymentStatus] = useState(
    selectedReceipt?.payment_status || false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onCancelButtonClickHandler = () => navigate(-1);

  const onDatePickerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    datePickerRef.current &&
      datePickerRef?.current.contains(e.target as Node) &&
      setIsOpen(!isOpen);
  };

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | boolean | number | null | Date | SingleValue<IOption> | any
  ) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

  const onGetAllMasterItemsHandler = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeRadioButtonHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setRadioButtonValue(event.target.value);

  const onForbiddenCharacterClick = (event: React.KeyboardEvent) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+') {
      event.preventDefault();
    }
  };

  const onChangeCustomerNameFieldHandler = (
    newValue: IOption | unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('customerName', newValue);

  const onChangeCustomerAccountFieldHandler = (
    newValue: IOption | unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('customerAccount', newValue);

  const onChangeCurrencyFieldHandler = (
    newValue: IOption | unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    onChangeStateFieldHandler('currencyValue', newValue);
  };

  const onChangeSalesCategoryFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('salesCategory', newValue);

  const onChangeTaxFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value.length > 8) return;
    onChangeStateFieldHandler('tax', event.target.value);
  };

  const onChangeNetFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('net', event.target.value);

  const onChangeInvoiceIdFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('invoiceId', event.target.value);

  const onChangeTotalFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('total', event.target.value);

  const onChangeDate = (date: Date) => {
    setIsOpen(!isOpen);
    setState((prevState) => ({
      ...prevState,
      dateValue: date,
      formattedDate: format(date, company.date_format || DATE_FORMATS[0].value),
    }));
  };

  const onChangeDueDate = (date: Date) => {
    setIsOpen(!isOpen);
    setState((prevState) => ({
      ...prevState,
      dueDateValue: date,
      formattedDate: format(date, company.date_format || DATE_FORMATS[0].value),
    }));
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsOpen(false);
  };

  const onChangePublishStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsPublishStatus(event.target.checked);

  const onChangePaymentStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsPaymentStatus(event.target.checked);

  const onSaveButtonClickHandler = async () => {
    try {
      const payload: IUpdateReceiptItemPayload = {
        id: selectedReceipt?.id || '',
        net: state.net || selectedReceipt?.net,
        payment_status: isPaymentStatus,
        publish_status: isPublishStatus,
        receipt_date: state.dateValue || selectedReceipt?.receipt_date,
        status: radioButtonValue || selectedReceipt?.status,
        tax: state.tax || selectedReceipt?.tax,
        total: state.total || selectedReceipt?.total,
        active_account: active_account || '',
      };

      setIsLoading(true);
      setIsLoading(false);
      navigate(ROUTES.salesInvoices);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const t = [
    onChangeDate,
    onChangeDueDate,
    onChangeInvoiceIdFieldHandler,
    onChangeCustomerNameFieldHandler,
    onChangeCustomerAccountFieldHandler,
    onChangeSalesCategoryFieldHandler,
  ];
  type T = typeof t;

  const inputFields = getInputFields({
    data: {
      state,
      disabledOption: {
        category: !categoriesForSelect?.length,
        suppliers: !suppliersForSelect?.length,
        types: !typesForSelect?.length,
      },
    },
    funcArray: [
      onChangeDate,
      onChangeDueDate,
      onChangeInvoiceIdFieldHandler,
      onChangeCustomerNameFieldHandler,
      onChangeCustomerAccountFieldHandler,
      onChangeSalesCategoryFieldHandler,
    ],
  });

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const onGoBackHandler = () => navigate(-1);

  const onClickGetNextInvoiceHandler = () => {};

  const onClickGetPrevInvoiceHandler = () => {};

  const onGetInvoiceImageHandler = async () => {
    try {
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {
    ...state,
    isOpen,
    isLoading,
    inputFields,
    datePickerRef,
    radioButtonValue,
    selectedReceipt,
    onGoBackHandler,
    onGetInvoiceImageHandler,
    onClickGetNextInvoiceHandler,
    onClickGetPrevInvoiceHandler,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onChangePaymentStatus,
    onChangeRadioButtonHandler,
    onCancelButtonClickHandler,
    onSaveButtonClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
  };
};
