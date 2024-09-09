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
  getAllMasterItems,
  updateReceiptItem,
} from 'screens/ReceiptDetails/receiptDetails.api';
import {
  setIsFetchingData,
  updateReceipt,
} from 'screens/Inbox/reducer/inbox.reducer';
import { setItemsForSelect } from 'screens/ReceiptDetails/reducer/receiptDetails.reducer';

import {
  getInputFields,
  ExpenseDetailsContentInitialState,
} from './ExpenseDetailsContent.constants';

import { ROUTES } from 'constants/routes';
import { DATE_FORMATS } from 'constants/strings';

export const usePhotoDetailsContentState = () => {
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
    (item) => item.id === selectedReceipt?.currency.id
  );

  const currentType = getReceiptDetailsCurrentSelectItem(
    typesForSelect,
    selectedReceipt?.payment_type?.id || ''
  );

  const currentCategory = getReceiptDetailsCurrentSelectItem(
    categoriesForSelect,
    selectedReceipt?.category?.id || ''
  );

  const currentSupplierAccount = getReceiptDetailsCurrentSelectItem(
    suppliersForSelect,
    selectedReceipt?.supplier_account?.id || ''
  );

  const initialState = {
    ...ExpenseDetailsContentInitialState,
    currencyValue: currentCurrency,
    payment: currentCurrency,
    typeValue: currentType,
    categoryValue: currentCategory,
    supplierAccountValue: currentSupplierAccount,
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      statusValue: selectedReceipt?.status || '',
      categoryValue: currentCategory || null,
      typeValue: currentType || null,
      dateValue: selectedReceipt?.receipt_date || null,
      supplierValue: selectedReceipt?.supplier || '',
      supplierAccountValue: currentSupplierAccount || null,
      currencyValue: currentCurrency,
      currencyValueId: selectedReceipt?.currency.id || '',
      taxValue: selectedReceipt?.tax || null,
      totalValue: selectedReceipt?.total || null,
      descriptionValue: selectedReceipt?.description || '',
      receiptid: selectedReceipt?.custom_id || '',
      vatCodeValue: selectedReceipt?.vat_code || '',
      netValue: selectedReceipt?.net || null,
      formattedDate: selectedReceipt?.receipt_date
        ? format(new Date(selectedReceipt?.receipt_date), company.date_format)
        : '',
    }));
  }, [selectedReceipt?.id]);

  const [state, setState] =
    useState<IuseexpenseContentState>(initialState);
  const [ButtonValue, setButtonValue] = useState('');
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
    })
    );


  const onGetAllMasterItemsHandler = async () => {
    try {
      const categoriesData = await getAllMasterItems(
        'category',
        active_account || ''
      );
      const supplierData = await getAllMasterItems(
        'supplier',
        active_account || ''
      );
      const typesData = await getAllMasterItems(
        'payment-type',
        active_account || ''
      );

      dispatch(
        setItemsForSelect({
          fieldName: 'categoriesForSelect',
          items: categoriesData.data,
        })
      );
      dispatch(
        setItemsForSelect({
          fieldName: 'suppliersForSelect',
          items: supplierData.data,
        })
      );
      dispatch(
        setItemsForSelect({
          fieldName: 'typesForSelect',
          items: typesData.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButtonValue(event.currentTarget.value);
  };

  const onForbiddenCharacterClick = (event: React.KeyboardEvent) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (ButtonValue != '')
      onSaveButtonClickHandler();
  }, [ButtonValue])

  const onChangeCategoryFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('categoryValue', newValue);

  const onChangeSupplierFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeStateFieldHandler('supplierValue', event.target.value)
  };

  const onChangeSupplierAccountHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('supplierAccountValue', newValue);

  const onChangeCurrencyFieldHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    onChangeStateFieldHandler('currencyValue', newValue);
    onChangeStateFieldHandler('currencyValueId', newValue.id);
  };

  const onChangeTypeFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('typeValue', newValue);

  const onChangeTaxFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value.length > 8) return;
    onChangeStateFieldHandler('taxValue', event.target.value);
  };

  const onChangeVatCodeFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value.length > 15) return;
    onChangeStateFieldHandler('vatCodeValue', event.target.value);
  };

  const onChangeNetFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('netValue', event.target.value);

  const onChangeTotalFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('totalValue', event.target.value);

  const onChangeDescriptionFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('descriptionValue', event.target.value);

  const onChangeReceiptIdFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('receiptid', event.target.value);

  const onChangeDate = (date: Date) => {
    setIsOpen(!isOpen);
    setState((prevState) => ({
      ...prevState,
      dateValue: date,
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
        description: state.descriptionValue || selectedReceipt?.description,
        custom_id: state.receiptid || selectedReceipt?.custom_id,
        category: state.categoryValue?.id || selectedReceipt?.category,
        currency: state.currencyValueId || selectedReceipt?.currency.id,
        net: state.netValue || selectedReceipt?.net,
        payment_status: isPaymentStatus,
        publish_status: isPublishStatus,
        receipt_date: state.dateValue || selectedReceipt?.receipt_date,
        status: ButtonValue || selectedReceipt?.status,
        supplier: state.supplierValue || selectedReceipt?.supplier,
        supplier_account:
          state.supplierAccountValue?.id || selectedReceipt?.supplier_account,
        tax: state.taxValue || selectedReceipt?.tax,
        total: state.totalValue || selectedReceipt?.total,
        payment_type: state.typeValue?.id || selectedReceipt?.payment_type,
        vat_code: state.vatCodeValue || selectedReceipt?.vat_code,
        active_account: active_account || '',
      };

      setIsLoading(true);
      console.log("payment1", selectedReceipt?.payment_status);

      const { data } = await updateReceiptItem(payload);
      setIsLoading(false);
      dispatch(updateReceipt(data));
      dispatch(setIsFetchingData(true));

      navigate(ROUTES.purchaseInvoices);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      dispatch(setIsFetchingData(false));
    }
  };

  const inputFields = getInputFields(
    [
      onChangeDate,
      onChangeSupplierFieldHandler,
      onChangeSupplierAccountHandler,
      onChangeCategoryFieldHandler,
      onChangeCurrencyFieldHandler,
      onChangeVatCodeFieldHandler,
      onChangeNetFieldHandler,
      onChangeTaxFieldHandler,
      onChangeTotalFieldHandler,
      onChangeTypeFieldHandler,
      onChangeDescriptionFieldHandler,
      onChangePaymentStatus,
      onChangeReceiptIdFieldHandler,
    ],
    {
      state,
      formatedCurrencies,
      categoriesForSelect,
      suppliersForSelect,
      typesForSelect,
      disabledOption: {
        category: !categoriesForSelect?.length,
        suppliers: !suppliersForSelect?.length,
        types: !typesForSelect?.length,
      },
      paymentStatus: isPaymentStatus,
      publishStatus: isPublishStatus,
    }
  );

  const datePickerRef = useRef<HTMLButtonElement>(null);

  return {
    ...state,
    isOpen,
    isLoading,
    inputFields,
    datePickerRef,
    ButtonValue,
    selectedReceipt,
    isPaymentStatus,
    isPublishStatus,
    onClickOutsideDatePickerHandler,
    onChangePublishStatus,
    onDatePickerClickHandler,
    onChangePaymentStatus,
    onChangeRadioButtonHandler,
    onCancelButtonClickHandler,
    onSaveButtonClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
  };
};
