import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

import { emailValidation } from 'services/validation';

import { forgotPasswordRequest } from './forgotPassword.api';

import { ROUTES } from 'constants/routes';

export const useForgotPasswordState = () => {
  const navigate = useNavigate();
  const [isSuccess, setSuccess] = useState(false);

  const onCloseModalHandler = () => {
    setSuccess(false);
    navigate(ROUTES.login);
  };

  const onSubmitForgotPasswordHandler = async (value: { email: string }) => {
    try {
      await forgotPasswordRequest(value.email);
      formik.resetForm();
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (value) => onSubmitForgotPasswordHandler(value),
    validationSchema: Yup.object().shape({
      email: emailValidation,
    }),
  });

  return { formik, isSuccess, onCloseModalHandler };
};
