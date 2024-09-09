import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ActionMeta, OnChangeValue } from 'react-select';
import { IOption, IsMulti } from 'components/CustomSelect/types';

import { useToggle } from 'hooks/useToggle';
import { usePagination } from 'hooks/usePagination';
import { useDebounce } from 'hooks/useDebounce';
import { IState } from 'services/redux/reducer';
import { getCompressedImage, getUserRole, onCreateFormDataHandler } from 'services/utils';

import { COMPANY_LIST_INITIAL_STATE } from './companyList.constants';
import {
  ISelectedCompany,
  IuseCompanyListState,
} from './types/companyList.types';
import {
  changeCompanyLogo,
  companyCreate,
  companyDelete,
  companyDeleteLogo,
  companyUpdate,
  getCompanyLogo,
  getManyCompanies,
  getOneCompany,
} from '../settings.api';
import { setCompanies, setIsSwitchCompany } from '../reducer/settings.reducer';

import { ROUTES } from 'constants/routes';


interface IusePreferenceState {
  selectedCurrencyValue: SingleValue<IOption> | any;
  // selectedFormatDate: SingleValue<IOption> | any;
  // isLoading: boolean;
  isChecked: boolean;
}

export const useCompanyListState = () => {
  const initialState = COMPANY_LIST_INITIAL_STATE;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<IuseCompanyListState>(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const {
    user: {
      token,
      user: { active_account, accounts },
      userInfo: {
        company: { currency, date_format, id: companyId, integration_company },
      },
    },
    settings: {
      companies: { companies, count },
    },
  } = useSelector((state: IState) => state);
  // console.log(integration_company);

  const userRole = getUserRole(accounts || [], active_account || '');
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value:
      | string
      | boolean
      | number
      | SingleValue<IOption>
      | File
      | ISelectedCompany
      | null
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const onGetAllCompaniesHandler = async (params?: ISearchParams) => {
    try {
      const { data } = await getManyCompanies({ ...params, active_account });
      state.isSearching
        ? onChangeStateFieldHandler('searchedCompanies', data.data)
        : dispatch(setCompanies({ companies: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isFetchingData: false,
        isContentLoading: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isFetchingData: false,
        isContentLoading: false,
        searchedCompanies: [],
      }));
      console.log(error);
    }
  };

  const onChangeItemsPerPage = async (newValue: SingleValue<IOption>) => {
    setItemsPerPage(newValue as IOption);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');

    await onGetAllCompaniesHandler({ take: Number(newValue?.value) });

    onChangeStateFieldHandler('isContentLoading', false);
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(Number(newValue?.value), count);
  };

  const onChangePage = async ({ selected }: {selected: number}) => {
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);
    state.searchValue && onChangeStateFieldHandler('searchValue', '');

    await onGetAllCompaniesHandler({
      take: +itemsPerPage.value,
      skip: companies.length === 1 ? 0 : selected * +itemsPerPage.value,
    });
    onChangeStateFieldHandler('isContentLoading', false);
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeCountryValueHandler = (
    newValue: any,
    // actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('countryValue', newValue);

  const onChangeCompanyNameHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('companyName', event.target.value);

  const onUploadCompanyLogoHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      !event.target.files?.length ||
      !event.target.files[0].type.match('image')
    )
      return;
    onChangeStateFieldHandler('isCompanyLogoLoading', true);

    const compressedFile = await getCompressedImage(event.target.files[0]);

    onChangeStateFieldHandler('logoSrc', URL.createObjectURL(compressedFile));
    onChangeStateFieldHandler('logoName', compressedFile?.name);
    onChangeStateFieldHandler('companyLogo', compressedFile);
    onChangeStateFieldHandler('isDeleteCompanyLogo', false);
    onChangeStateFieldHandler('isCompanyLogoLoading', false);
  };

  const onCreateCompanyHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const formData = onCreateFormDataHandler({
        companyLogo: state.companyLogo,
        companyName: state.companyName,
        currency: currency.id,
        date_format: date_format,
        active_account: active_account,
        // data_arr: active_account,
      });

      await companyCreate(formData, token);
      await onGetAllCompaniesHandler({
        take: +itemsPerPage.value,
      });

      onChangePageHandler(0);
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
      }));
      setIsEdit(false);
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
      }));
      setIsEdit(false);
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onUpdateCompanyHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const formData = onCreateFormDataHandler(
        {
          companyLogo: state.companyLogo,
          companyName: state.companyName,
        },
        true,
        !state.logoSrc && state.isDeleteCompanyLogo
      );
      await companyUpdate(formData, token, state.selectedCompany?.id || '');
      await onGetAllCompaniesHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
        prevCompanyName: '',
        prevLogoSrc: '',
        isDeleteCompanyLogo: false,
      }));
      setIsEdit(false);
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
        prevCompanyName: '',
        prevLogoSrc: '',
        isDeleteCompanyLogo: false,
      }));
      setIsEdit(false);
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onDeleteLogoHandler = () =>
    setState((prevState) => ({
      ...prevState,
      logoName: '',
      logoSrc: '',
      isDeleteCompanyLogo: true,
    }));

 
  const {
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangePaginationInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,
    onDeleteItem,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({ onChangePage });

  const onDeleteIconClickHandler = async (itemId: string) => {
    try {
      const { data } = await getOneCompany(itemId);
      onDeleteModalWindowToggle();
      onChangeStateFieldHandler('selectedCompany', {
        name: data.name,
        logo: data.logo,
        id: data.id,
      });
    } catch (error) {
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onDeleteCompanyHandler = async () => {
    try {
      const isLastElementOnPage = companies.length === 1;
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);

      await companyDelete(state.selectedCompany?.id || '');
      if (count !== 1) {
        await onGetAllCompaniesHandler({
          take: +itemsPerPage.value,
          skip: currentPage * +itemsPerPage.value,
        });
        onChangeStateFieldHandler('isLoading', false);
        onChangeStateFieldHandler('searchValue', '');
        onDeleteModalWindowToggle();

        if (companyId === state.selectedCompany?.id) {
          dispatch(setIsSwitchCompany(true));
        }
      }
      onDeleteItem(count, isLastElementOnPage);
      count === 1 && navigate(ROUTES.preference, { replace: true });
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onCloseModalWindowHandler = () => {
    setState((prevState) => ({
      ...prevState,
      companyName: '',
      selectedCompany: null,
      logoSrc: '',
      prevCompanyName: '',
      prevLogoSrc: '',
    }));
    isEdit && setIsEdit(false);
    onModalWindowToggle();
  };

  const onGetCompanyLogoHandler = async (companyId: string) => {
    try {
      const { data } = await getCompanyLogo(companyId, token);
      const logo = URL.createObjectURL(data);
      setState((prevState) => ({
        ...prevState,
        logoSrc: logo,
        prevLogoSrc: logo,
      }));
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
    } catch (error) {
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
      console.log(error);
    }
  };

  const onChangeCompanyLogoHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const formData = new FormData();
      formData.append('logo', state?.companyLogo || '');
      formData.append('active_account', active_account || '');
      await changeCompanyLogo(formData, token);
      const { data } = await getManyCompanies();
      dispatch(setCompanies({ companies: data.data, count: data.count }));
      onChangeStateFieldHandler('isLoading', false);
      onCloseModalWindowHandler();
    } catch (error) {
      onCloseModalWindowHandler();
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onDeleteCompanyLogo = async () => {
    try {
      onChangeStateFieldHandler('isCompanyLogoLoading', true);
      await companyDeleteLogo(state.selectedCompany?.id || '');
      const { data } = await getManyCompanies();
      dispatch(setCompanies({ companies: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        logoSrc: '',
        prevLogoSrc: '',
      }));
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
    } catch (error) {
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
      console.log(error);
    }
  };

  const onEditIconClickHandler = async (itemId: string) => {
    try {
      setIsEdit(true);
      const { data } = await getOneCompany(itemId);
      onModalWindowToggle();

      onChangeStateFieldHandler('isCompanyLogoLoading', true);
      onChangeStateFieldHandler('selectedCompany', {
        name: data.name,
        logo: data.logo,
        id: data.id,
      });
      onChangeStateFieldHandler('companyName', data.name);
      onChangeStateFieldHandler('prevCompanyName', data.name);
      !data.logo && onChangeStateFieldHandler('isCompanyLogoLoading', false);
      data.logo && onGetCompanyLogoHandler(itemId);
    } catch (error) {
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
      onModalWindowToggle();
      setIsEdit(false);
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onEnterCreateCompany = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    isEdit ? onUpdateCompanyHandler() : onCreateCompanyHandler();
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      isSearching: true,
      searchValue: event.target.value,
      isContentLoading: true,
    }));
  };
  const onChangeCurrencyHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => {
    if (typeof newValue !== 'undefined' && !Array.isArray(newValue) && typeof newValue !== 'string') {
      onChangeStateFieldHandler('selectedCurrencyValue', newValue as SingleValue<IOption>);
    }
  };


  const onChangeDateFormatHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => {
    if (typeof newValue !== 'undefined' && !Array.isArray(newValue) && typeof newValue !== 'string') {
      onChangeStateFieldHandler('selectedFormatDate', newValue as SingleValue<IOption>);
    }
  };
  
  const {
    user: { currencies, user },
  } = useSelector((state: IState) => state);

  const formatedCurrencies = currencies?.map((currency) => ({
    label: `${currency.value} (${currency.description})`,
    value: currency.value,
    id: currency.id,
  }));


  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const isDisabledButton = isEdit
    ? (state.companyName === state.prevCompanyName &&
        state.prevLogoSrc === state.logoSrc) ||
      state.isCompanyLogoLoading
    : !state.companyName.length;

  return {
    ...state,
    isEdit,
    companies,
    userRole,
    isDisabledButton,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    count,
    onUpdateCompanyHandler,
    onChangePage,
    onFocusSearchHandler,
    onBlurHandler,
    onCloseModalWindowHandler,
    onDeleteCompanyHandler,
    onCreateCompanyHandler,
    onGetAllCompaniesHandler,
    debouncedValue,
    onDeleteIconClickHandler,
    onDeleteLogoHandler,
    onChangeCompanyNameHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onUploadCompanyLogoHandler,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterCreateCompany,
    onEditIconClickHandler,
    onChangePaginationInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onDeleteCompanyLogo,
    onChangeCompanyLogoHandler,
    onChangePagesAmount,
    
    onChangeCountryValueHandler,
    formatedCurrencies,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
  };
};
