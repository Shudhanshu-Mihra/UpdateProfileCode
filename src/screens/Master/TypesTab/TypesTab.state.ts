import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleValue } from 'react-select';

import { getUserRole } from 'services/utils';
import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { usePagination } from 'hooks/usePagination';

import {
  createPaymentMethod,
  deletePaymentAPI,
  getAllTabItems,
  getpaymentItemById,
  updatePaymentMethod,
} from './paymentMethod.api';

// dont use setTabItem - setMasterCurrentActionItem reducer. setMasterCurrentActionItem is included in current module state
import { setTabItem, setTypes, setMasterCurrentActionItem } from '../reducer/master.reducer';
import { IuseMasterState } from '../master.types';
import { PAYMENT_INITIAL_STATE, IpaymentInitialState } from './paymentMethod.constant';

export const useTypesTabState = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<IpaymentInitialState>(PAYMENT_INITIAL_STATE);

  const {
    master: {
      types: { data: typesList, count },
      selectedCategory,
    },
    user: {
      user: { active_account, accounts },
      userInfo: {
        company: { date_format },
      },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '')
    ?.role as TRoles;

  useEffect(() => {
    !count && onChangeStateFieldHandler('isEmptyData', true);
  }, []);

  const onChangeStateFieldHandler = (
    optionName: keyof typeof PAYMENT_INITIAL_STATE,
    value: boolean | string | number | ITabItem[] | SingleValue<IOption> | any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isSearching: true,
      isContentLoading: true,
    }));

  const onChangePaginationInputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputPaymentName', event.target.value);
  const onChangePaymentRefHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputPaymentRefName', event.target.value);

  const onChangeModalCheckboxDefaultPaymentHandler = () => setState((prevState) => ({
    ...prevState,
    modalCheckboxDefaultPayment: !prevState.modalCheckboxDefaultPayment,
  }));;

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const onGetAllTypesHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler('isContentLoading', true);
      const { data } = await getAllTabItems('payment-type', {
        ...params,
        active_account,
      });
      isSearching
        ? onChangeStateFieldHandler('searchedItems', data.data)
        : dispatch(setTypes({ data: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isSearching: false,
        isFetchingData: false,
        isEmptyData: data.count ? false : true,
        isHeaderPanel: true,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
        isHeaderPanel: true,
        isEmptyData: !count ? true : false,
        isSearching: false,
      }));
      console.log(error);
    }
  };

  const onCreateTypeHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      !count && onChangeStateFieldHandler('isFetchingData', true);
      await createPaymentMethod(
        { name: state.modalInputPaymentName, payment_ref : state.modalInputPaymentRefName, payment_default : state.modalCheckboxDefaultPayment, active_account },
        'payment-type'
      );
      onChangePage({ selected: 0 });
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        modalInputPaymentName: '',
        modalInputPaymentRefName: '',
        modalCheckboxDefaultPayment: false,
      }));
      onModalWindowToggle();
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        isFetchingData: false,
        modalInputPaymentName: '',
        modalInputPaymentRefName: '',
        modalCheckboxDefaultPayment: false,
      }));
    }
  };

  const onEnterCreateTypeClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    state.isEdit ? onSaveButtonClickHandler() : onCreateTypeHandler();
  };

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();
  const [selectedPayemnt, setSelectedPayment] = useState<[string, number] | null>(null);

  const onDeleteItemClickHandler = async (paymentId: string, index?: number, clickItemName?: string) => {
    console.log('#@#@', paymentId, index, clickItemName);
      // const { data } = await getpaymentItemById(
      //     paymentId,
      //     active_account
      //   );
      try {
      // console.log('#@#@',data);
      // dispatch(setMasterCurrentActionItem([paymentId, index || null, clickItemName || null]));
      setState({...state, setMasterCurrentActionItem:[paymentId, index || null, clickItemName || null]})
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteButtonClickHandler = async () => {
    try {
      const isLastElementOnPage = typesList.length === 1;
      onDeleteItem(count, isLastElementOnPage);
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      count !== 1 && onChangeStateFieldHandler('isContentLoading', true);
      onChangeStateFieldHandler('isLoading', true);

      const skip =
        currentPage === 0
          ? 0
          : isLastElementOnPage && count !== 1
          ? (currentPage - 1) * +itemsPerPage.value
          : currentPage * +itemsPerPage.value;

      // await deletePaymentAPI( selectedCategory?.id || '', active_account);
      await deletePaymentAPI( state.setMasterCurrentActionItem?.[0] || '', active_account);
      const { data } = await getAllTabItems('payment-type', {
        take: +itemsPerPage.value,
        skip,
        active_account,
      });
      dispatch(setTypes({ count: data.count, data: data.data }));

      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isEmptyData', data.count ? false : true);
      count === 1 && onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isEmptyData', !count ? true : false);
      onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getpaymentItemById(
        itemId,
        active_account
      );
      dispatch(setTabItem(data));
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        isEdit: true,
        prevInputValue: data?.name,
        modalInputPaymentName: data?.name || '',
        modalInputPaymentRefName: '',
        modalCheckboxDefaultPayment: false,
      }));
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
        prevInputValue: '',
        modalInputPaymentName: '',
        modalInputPaymentRefName: '',
        modalCheckboxDefaultPayment: false,
      }));
    }
  };

  const onSaveButtonClickHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await updatePaymentMethod(
        {
          id: selectedCategory?.id || '',
          payment_ref : state.modalInputPaymentRefName,
          payment_default : state.modalCheckboxDefaultPayment,
          name: state.modalInputPaymentName,
          active_account,
        },
        'payment-type'
      );
      const { data } = await getAllTabItems('payment-type', {
        active_account,
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
      dispatch(setTypes({ count: data.count, data: data.data }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isEdit: false,
        modalInputPaymentName: '',
        modalInputPaymentRefName: '',
      }));
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
        isLoading: false,
        modalInputPaymentName: '',
        modalInputPaymentRefName: '',
      }));
      console.log(error);

      onModalWindowToggle();
    }
  };

  const isDisableButton = state.modalInputPaymentName === state.prevInputValue;

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setState((prevState) => ({
      ...prevState,
      isEdit: false,
      modalInputPaymentName: '',
      modalInputPaymentRefName: '',
      modalCheckboxDefaultPayment: false,
    }));
  };

  const onChangePage = async ({ selected }: {selected: number}) => {
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('isFocus', true);
    state.searchValue && onChangeStateFieldHandler('searchValue', '');

    onGetAllTypesHandler({
      take: +itemsPerPage.value,
      skip: typesList.length === 1 ? 0 : selected * +itemsPerPage.value,
      active_account,
    });
    onChangeStateFieldHandler('isFocus', false);
  };

  const {
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    onDeleteItem,
    setItemsPerPage,
    setCurrentPage,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({ onChangePage });

  const onChangeItemsPerPage = (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('isFocus', true);
    onChangeStateFieldHandler('searchValue', '');
    onGetAllTypesHandler({ take: Number(newValue.value) });
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(Number(newValue.value), count);
  };

  return {
    ...state,
    userRole,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    active_account,
    selectedCategory,
    onChangeSearchValueHandler,
    onGetAllTypesHandler,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    onModalWindowToggle,
    onChangePaymentRefHandler,
    onChangePaginationInputValueHandler,
    onCreateTypeHandler,
    onEnterCreateTypeClick,
    date_format,
    typesList,
    count,
    onDeleteItemClickHandler,
    isDeleteModalWindowOpen,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    onSaveButtonClickHandler,
    isDisableButton,
    onModalWindowCancelClickButtonHandler,
    onChangeItemsPerPage,
    onChangePaginationInputValue,
    onChangeModalCheckboxDefaultPaymentHandler,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    debouncedValue,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,

    selectedPayemnt,
  };
};
