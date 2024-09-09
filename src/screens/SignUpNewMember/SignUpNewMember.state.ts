import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ActionMeta } from 'react-select';
import decode from 'jwt-decode';

import { signUpValidationSchema } from 'services/validation';

import { IOption } from 'components/CustomSelect/types';

import { formikInitialValues } from './SignUpNewMember.constants';

import { ICreateUser } from '../SignUp/types/signup.types';
import { setCurrencies, setUser } from '../SignUp/reducer/signup.reducer';
import { createUser } from '../SignUp/signup.api';

import { ROUTES } from 'constants/routes';

interface IuseSignUpState {
  isShowPassword: boolean;
  countryValue: IOption;
}

export const useSignUpNewMemberState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useParams();
  const decodedToken: { email: string; isCompanyOwner?: boolean } = decode(
    token || ''
  );

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

  const onSignUpNewMemberHandler = async (
    signUpValues: Omit<ICreateUser, 'country'>,
    actions: FormikHelpers<typeof formikInitialValues>
  ) => {
    try {
      const { data } = await createUser({
        ...signUpValues,
        country: state.countryValue.value,
        token: token || '',
      });

      dispatch(setUser(data));
      dispatch(setCurrencies(data.currencies));
      decodedToken?.isCompanyOwner
        ? navigate(ROUTES.preference, { replace: true })
        : navigate(ROUTES.chooseCompany);
    } catch (error: any) {
      const { data } = error.response;
      data.message === 'WRONG EMAIL' &&
        actions.setErrors({
          email: 'Please use the email received in the email',
        });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: { ...formikInitialValues, email: decodedToken.email },
    onSubmit: (values, actions) => onSignUpNewMemberHandler(values, actions),
    validationSchema: signUpValidationSchema,
  });

  return {
    ...state,
    formik,
    onTogglePasswordVisibility,
    onChangeCountryValueHandler,
  };
};
