import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { ActionMeta } from 'react-select';

import { Button } from 'components/Button/Button';
import { DivideLine } from 'components/DivideLine/DivideLine';

import { SignUpFormStyles as Styled } from './SignUpForm.styles';
import { InputItem } from '../InputsBox/InputItem';
import { inputs } from '../SignUp.constants';

import { STRINGS } from 'constants/strings';
import { ROUTES } from 'constants/routes';

interface ISignUpFormProps {
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  isValid: boolean;
  countryValue: {
    label: string;
    value: string;
  };
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  isGoogleLoading: boolean;
  onGoogleButtonClickHandler: () => void;
}

export const SignUpForm: FC<ISignUpFormProps> = (props) => {
  const {
    isShowPassword,
    isValid,
    countryValue,
    isGoogleLoading,
    onGoogleButtonClickHandler,
    onTogglePasswordVisibility,
    onFormHandleSubmit,
    formikMeta,
    formikProps,
    onChangeCountryValueHandler,
  } = props;

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <Styled.loginWrapper>
      {inputs.map((input) => (
        <InputItem
          key={input.inputName}
          inputName={input.inputName}
          inputType={input.inputType}
          labelText={input.labelText}
          formikMeta={formikMeta}
          formikProps={formikProps}
          isShowPassword={isShowPassword}
          onTogglePasswordVisibility={onTogglePasswordVisibility}
          countryValue={countryValue}
          onChangeCountryValueHandler={onChangeCountryValueHandler}
        />
      ))}
        </Styled.loginWrapper>
      {/* <div style={{ marginBottom: 40 }}></div> */}
      {/* <Styled.ForgotPassword to={ROUTES.forgotPassword}>
        {STRINGS.sign_in_up.forgot_password}
      </Styled.ForgotPassword> */}
      <Button
        isDisabled={!isValid}
        type="submit"
        themedButton="primary"
        width="auth"
      >
        {STRINGS.sign_in_up.sign_up}
      </Button>
      <DivideLine />
      <Button
        onClick={onGoogleButtonClickHandler}
        themedButton="capium"
        width="auth"
        iconType="google"
        isLoading={isGoogleLoading}
      >
        {STRINGS.sign_in_up.continue_Google}
      </Button>
    </Styled.Form>
  );
};
