import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';

import { emailValidation, passwordValidation } from 'services/validation';
import { useGoogleButton } from 'hooks/useGoogleButton';

import { login } from './login.api';
import { ILogin } from './types/login.types';
import {
  setCompany,
  setCurrencies,
  setUser,
} from '../SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

interface IuseLoginStateState {
  isShowPassword: boolean;
}

export const useLoginState = () => {
  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseLoginStateState>(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUpClickHandler = () => {
    navigate(ROUTES.sign_up);
  };

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  const onSignInButtonClickHandler = async (
    loginValues: ILogin,
    actions: FormikHelpers<{ email: string; password: string }>
  ) => {
    try {
      const { data } = await login(loginValues);
      dispatch(setCurrencies(data.currencies));
      dispatch(setUser(data));
      data.company && dispatch(setCompany(data.company));
      navigate(
        !data.user.active_account || !data.user.accounts.length
          ? ROUTES.preference
          : ROUTES.home
      );
    } catch (error: any) {
      const { data } = error.response;
      (data.message === 'WRONG PASSWORD' || 'USER NOT EXIST') &&
        actions.setErrors({
          email: ' ',
          password: 'Invalid email or password',
        });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => onSignInButtonClickHandler(values, actions),

    validationSchema: Yup.object().shape({
      email: emailValidation,
      password: passwordValidation,
    }),
  });

  const { onGoogleButtonClickHandler, isGoogleLoading } = useGoogleButton();
  return {
    ...state,
    formik,
    isGoogleLoading,
    onGoogleButtonClickHandler,
    onSignUpClickHandler,
    onTogglePasswordVisibility,
  };
};
