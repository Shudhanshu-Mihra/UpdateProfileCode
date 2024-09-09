import { useFormik } from 'formik';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { resetPasswordValidationSchema } from 'services/validation';

import { formikResetPasswordInitialValues } from './constants';
import { updatePassword } from './resetPassword.api';

import { ROUTES } from 'constants/routes';

export const useResetPasswordState = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [isSuccess, setSuccess] = useState(false);
  const [isExpiredToken, setExpiredToken] = useState(false);

  const onCloseModalHandler = () => {
    setSuccess(false);
    navigate(ROUTES.login, { replace: true });
  };

  const onCloseExpiredModal = () => setExpiredToken(false);

  const onResetPasswordHandler = async ({
    newPassword,
  }: {
    newPassword: string;
  }) => {
    try {
      const payload = {
        token: token || '',
        newPassword,
      };
      await updatePassword(payload);
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
    initialValues: formikResetPasswordInitialValues,
    onSubmit: (values) => onResetPasswordHandler(values),
    validationSchema: resetPasswordValidationSchema,
  });

  return {
    formik,
    isSuccess,
    isExpiredToken,
    onCloseModalHandler,
    onCloseExpiredModal,
  };
};
