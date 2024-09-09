import { useState } from 'react';
import { ActionMeta } from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import decode from 'jwt-decode';

import { useToggle } from 'hooks/useToggle';

import { bindSocialAccdValidationSchema } from 'services/validation';

import { IFormikValues } from './bindSocialAccount.types';
import { createReceiptAccount } from './bindSocialAccount.api';

import { ROUTES } from 'constants/routes';

export const useBindSocialAccountState = () => {
  const navigate = useNavigate();

  const { token } = useParams();
  const decodedToken: { email: string; resetPasswordModelToken: string } =
    decode(token || '');

  const formikInitialValues = {
    email: decodedToken.email || '',
    newPassword: '',
    confirmPassword: '',
  };

  const [isSuccess, setSuccess] = useState(false);
  const [isExpiredToken, setExpiredToken] = useState(false);
  const [countryValue, setCountryValue] = useState({
    value: 'United Kingdom',
    label: 'United Kingdom',
  });

  const onChangeCountryValueHandler = (
    newValue: IOption | any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => setCountryValue(newValue);

  const onCloseModalHandler = () => {
    isSuccess && setSuccess(false);
    isExpiredToken && setExpiredToken(false);
    navigate(ROUTES.login, { replace: true });
  };

  const [isShowPassword, setIsShowPassword] = useToggle();
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useToggle();

  const onBindSocialAccHandler = async (formikValues: IFormikValues) => {
    try {
      const payload = {
        token: decodedToken.resetPasswordModelToken,
        country: countryValue.label,
        newPassword: formikValues.confirmPassword,
        email: formikValues.email,
      };
      await createReceiptAccount(payload);
      setSuccess(true);
    } catch (error: any) {
      const { data } = error.response;
      if (data.code === 404) {
        setExpiredToken(true);
      }
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => onBindSocialAccHandler(values),
    validationSchema: bindSocialAccdValidationSchema,
  });

  return {
    formik,
    onChangeCountryValueHandler,
    setIsShowPassword,
    setIsShowConfirmPassword,
    onCloseModalHandler,
    countryValue,
    isSuccess,
    isExpiredToken,
    isShowConfirmPassword,
    isShowPassword,
  };
};
