import { useState } from 'react';
import { useFormik } from 'formik';
import { ActionMeta, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { useDebounce } from 'hooks/useDebounce';
import { useToggle } from 'hooks/useToggle';
import { usePagination } from 'hooks/usePagination';

import { myAccountValidationScheme } from 'services/validation';
import { IState } from 'services/redux/reducer';
import {
  getFirstLetterUppercase,
  getSelectedUser,
  getUserRole,
} from 'services/utils';

import {
  formikInitialValues,
  getInputFields,
  USERS_LIST_INITIAL_STATE,
  userPermissionInitialState,
} from './userList.constants';
import { IuseUserListState } from './types/userList.types';
import {
  createCompanyMember,
  deleteCompanyMember,
  getCompanyMembers,
  getManyCompanies,
  resendInvitation,
  updateCompanyMember,
} from '../settings.api';
import { setCompanies, setMembers } from '../reducer/settings.reducer';
import { updateUserAccount } from '../../SignUp/reducer/signup.reducer';

import { USER_ROLES } from 'constants/strings';

export const useUserListState = () => {
  const dispatch = useDispatch();
  const {
    user: {
      user: { active_account, accounts },
    },
    settings: {
      companies,
      companyMembers: { count, members },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '');

  const formattedCompanies = companies?.companies?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const initialState = USERS_LIST_INITIAL_STATE;

  const [state, setState] = useState<IuseUserListState>(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const [isResentSuccessPopup, setIsResendSuccessPopup] = useToggle();

  const [permissionState, setPermission] = useState(userPermissionInitialState);
  const [isPAllChecked, setPAllChecked] = useToggle();
  // const onChangePermissionHanler = (id) => {
  //   setPermissions((prevPermissions) =>
  //     prevPermissions.map((permission) =>
  //       permission.p_id === id
  //         ? { ...permission, isChecked: !permission.isChecked }
  //         : permission
  //     )
  //   );
  // };
// permission start here 
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
// permission end here 
  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    isEdit && setIsEdit(false);
    onChangeStateFieldHandler('role', { value: '', label: '' });
    onChangeStateFieldHandler('companies', null);
    onChangeStateFieldHandler('isInvitation', false);
    formik.resetForm();
  };

  const onModalWindowToggleHandler = () => {
    onGetCompaniesHandler();
    onModalWindowToggle();
  };

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | boolean | number | SingleValue<IOption> | IMember[]
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const PermissionsForAPIHandler = (selectedPermission: any[]) => {
    onChangeStateFieldHandler('givePermissionsForAPI', selectedPermission);
  }

  const onChangeRoleValueHandler = (
    newValue: IOption,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('role', newValue);

  const onChangeCompanyValueHandler = (
    newValue: IOption,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('companies', newValue);

  const onGetCompaniesHandler = async () => {
    try {
      const { data: companiesData } = await getManyCompanies({});
      dispatch(
        setCompanies({
          companies: companiesData.data,
          count: companiesData.count,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onGetAllCompanyMembersHandler = async (params?: ISearchParams) => {
    try {
      const { data } = await getCompanyMembers({
        ...params,
        active_account: active_account || '',
      });
      state.isSearching
        ? onChangeStateFieldHandler('searchedUsers', data.data)
        : dispatch(setMembers({ count: data.count, members: data.data }));
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
        searchedUsers: [],
        isFetchingData: false,
        isContentLoading: false,
      }));
      console.log(error);
    }
  };

  const onChangeItemsPerPage = async (newValue: SingleValue<IOption>) => {
    setItemsPerPage(newValue as IOption);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');

    await onGetAllCompanyMembersHandler({
      take: Number(newValue?.value),
    });

    onChangeStateFieldHandler('isContentLoading', false);
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(Number(newValue?.value), count);
  };

  const onChangePage = async ({ selected }: {selected: number}) => {
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);
    state.searchValue && onChangeStateFieldHandler('searchValue', '');

    await onGetAllCompanyMembersHandler({
      take: +itemsPerPage.value,
      skip: selected * +itemsPerPage.value,
    });
    onChangeStateFieldHandler('isContentLoading', false);
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onEnterInsertUser = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    formik.handleSubmit();
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
      isSearching: true,
    }));
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) =>
      isEdit ? onEditUserHandler(values) : onInviteUserToCompanyHandler(values),
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

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
      setState((prevState) => ({
        ...prevState,
        selectedItemId: itemId,
        selectedUserName: selectedUser?.name || '',
      }));
      const selectedUser = getSelectedUser(members, itemId);
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditIconClickHandler = (itemId: string) => {
    const selectedUser = getSelectedUser(members, itemId);
    const email =
      selectedUser?.memberInvite && !selectedUser?.memberInvite?.isCompanyInvite
        ? selectedUser?.memberInvite?.email
        : selectedUser?.user?.email;

    formik.setValues({
      email: email || '',
      fullName: selectedUser?.name || '',
    });

    setIsEdit(true);
    setState((prevState) => ({
      ...prevState,
      role: {
        label: getFirstLetterUppercase(selectedUser?.role || ''),
        value: selectedUser?.role || '',
      },
      prevRole: {
        label: getFirstLetterUppercase(selectedUser?.role || ''),
        value: selectedUser?.role || '',
      },
      prevName: selectedUser?.name || '',
      prevEmail:
        selectedUser?.user?.email || selectedUser?.memberInvite?.email || '',
      selectedItemId: itemId,
      selectedUserName: selectedUser?.name || '',
      isInvitation:
        selectedUser?.memberInvite &&
        !selectedUser?.memberInvite?.isCompanyInvite
          ? true
          : false,
    }));
    onModalWindowToggle();
  };

  const onClickDeleteUserButton = async () => {
    try {
      const isLastElementOnPage = members.length === 1;
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);
      const skip =
        currentPage === 0
          ? 0
          : isLastElementOnPage && count !== 1
          ? (currentPage - 1) * +itemsPerPage.value
          : currentPage * +itemsPerPage.value;

      await deleteCompanyMember(
        state.selectedItemId || '',
        active_account || ''
      );
      await onGetAllCompanyMembersHandler({ skip, take: +itemsPerPage.value });
      onDeleteItem(count, isLastElementOnPage);
      onChangeStateFieldHandler('isLoading', false);
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isFetchingData', false);
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditUserHandler = async (values: typeof formikInitialValues) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload =
        isEdit && !state.isInvitation
          ? {
              role: state.role?.value || '',
            }
          : {
              role: state.role?.value || '',
              name: values.fullName,
              email: values.email,
              isInviteCompanyMember: state.isInvitation,
            };
      const { data: updatedAcc } = await updateCompanyMember(
        { ...payload, active_account: active_account || '' },
        state.selectedItemId
      );
      if (!state.isInvitation && active_account === state.selectedItemId) {
        dispatch(updateUserAccount(updatedAcc));
      }
      const { data } = await getCompanyMembers({
        active_account: active_account || '',
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });

      dispatch(setMembers({ count: data.count, members: data.data }));
      onChangeStateFieldHandler('isLoading', false);
      state.isInvitation && onChangeStateFieldHandler('isInvitation', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('isInvitation', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onInviteUserToCompanyHandler = async (
    values: typeof formikInitialValues
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload = {
        email: values.email || '',
        name: values.fullName || '',
        role: state.role?.value || '',
        companiesIds: state.companies?.map((item) => item.value) || [],
        new_user_permissions: state.givePermissionsForAPI,
      };

      await createCompanyMember(payload);
      onChangePageHandler(0);
      await onGetAllCompanyMembersHandler({
        take: +itemsPerPage.value,
      });

      onModalWindowToggle();
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('role', { value: '', label: '' });
      onChangeStateFieldHandler('companies', null);
      setIsSentSuccessPopup();
      formik.resetForm();
    } catch (error) {
      onModalWindowToggle();
      formik.resetForm();
      onChangeStateFieldHandler('role', { value: '', label: '' });
      onChangeStateFieldHandler('companies', null);
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onResendInvitationHandler = async (inviteId: string) => {
    try {
      await resendInvitation(inviteId);
      const { data } = await getCompanyMembers({
        active_account: active_account || '',
      });
      dispatch(setMembers({ count: data.count, members: data.data }));
      setIsResendSuccessPopup();
    } catch (error) {
      console.log(error);
    }
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  // const modalFields = getInputFields({
  //   options: [USER_ROLES, formattedCompanies],
  //   state: { role: state.role, companies: state.companies },
  //   funcArray: [onChangeRoleValueHandler, onChangeCompanyValueHandler],
  // });

  const modalFields = [
    {
      type: 'input',
      label: 'Full Name',
      name: 'fullName',
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'select',
      name: 'company',
      label: 'Company',
      value: state?.companies || undefined,
      isMulti: true,
      options: formattedCompanies,
      isDisabled: false,
      onChangeSelect: onChangeCompanyValueHandler,
    },
    {
      type: 'select',
      name: 'select',
      label: 'Role',
      value: state.role,
      options: USER_ROLES,
      isDisabled: false,
      onChangeSelect: onChangeRoleValueHandler,
    },
  ];

  const isDisableButton =
    isEdit && !state.isInvitation
      ? state.prevRole?.value === state.role?.value
      : isEdit && state.isInvitation
      ? !formik.isValid ||
        (state.prevEmail === formik.values.email &&
          state.prevName === formik.values.fullName &&
          state.prevRole?.value === state.role?.value)
        :
        state.role?.value === 'owner'
      ? !formik.isValid || !formik.dirty || !state.role?.value
      : !formik.isValid ||
        !formik.dirty ||
        !state.role?.value ||
        !state.companies?.length;

  return {
    ...state,
    active_account,
    userRole,
    isEdit,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    count,
    modalFields,
    formik,
    members,
    debouncedValue,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    isDisableButton,
    onResendInvitationHandler,
    onChangePage,
    onEditUserHandler,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onBlurHandler,
    onFocusSearchHandler,
    onClickDeleteUserButton,
    onInviteUserToCompanyHandler,
    onGetAllCompanyMembersHandler,
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onChangePaginationInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onGetCompaniesHandler,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    isResentSuccessPopup,
    setIsResendSuccessPopup,
    isPAllChecked,
    permissionState,
    setPermission,
    setPAllChecked,
    setIsSecondModalOpen,
    isSecondModalOpen,

    PermissionsForAPIHandler,
  };
};
