import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ActionMeta } from 'react-select';

import { signUpValidationSchema } from 'services/validation';
import { useGoogleButton } from 'hooks/useGoogleButton';

import { IOption } from 'components/CustomSelect/types';

import { formikInitialValues } from './SignUp.constants';
import { createUser } from './signup.api';
import { ICreateUser } from './types/signup.types';
import { setCurrencies, setUser } from './reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

interface IuseSignUpState {
  isShowPassword: boolean;
  countryValue: IOption;
}

export const useSignUpState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    isShowPassword: false,
    countryValue: { value: 'United Kingdom', label: 'United Kingdom' },
  };
  const [state, setState] = useState<IuseSignUpState>(initialState);

  const onChangeCountryValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => {
    setState((prevState) => ({
      ...prevState,
      countryValue: newValue,
    }));
  };

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  const onLoginClickHandler = () => {
    navigate(ROUTES.login);
  };

  const onSignUpHandler = async (
    signUpValues: Omit<ICreateUser, 'country'>,
    actions: FormikHelpers<typeof formikInitialValues>
  ) => {
    try {
      const { data } = await createUser({
        ...signUpValues,
        country: state.countryValue.value,
      });

      dispatch(setUser(data));
      dispatch(setCurrencies(data.currencies));

      navigate(ROUTES.preference);
    } catch (error: any) {
      const { data } = error.response;

      data.message === 'USER ALREADY EXIST' &&
        actions.setErrors({
          email: ' ',
          fullName: ' ',
          password: 'User has already been registered',
        });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values, actions) => onSignUpHandler(values, actions),
    validationSchema: signUpValidationSchema,
  });

  const { onGoogleButtonClickHandler, isGoogleLoading } = useGoogleButton();

  return {
    ...state,
    formik,
    isGoogleLoading,
    onGoogleButtonClickHandler,
    onTogglePasswordVisibility,
    onLoginClickHandler,
    onChangeCountryValueHandler,
  };
};
