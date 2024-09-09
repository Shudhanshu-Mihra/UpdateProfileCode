import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';
import { Button } from 'components/Button/Button';
import { DivideLine } from 'components/DivideLine/DivideLine';

import { Styled } from './LoginForm.styles';

import { STRINGS } from 'constants/strings';
import { ROUTES } from 'constants/routes';

interface ILoginFormProps {
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  isGoogleLoading: boolean;
  onTogglePasswordVisibility: () => void;
  onGoogleButtonClickHandler: () => void;
  isShowPassword: boolean;
  isValid: boolean;
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const {
    onFormHandleSubmit,
    formikProps,
    onTogglePasswordVisibility,
    formikMeta,
    onGoogleButtonClickHandler,
    isShowPassword,
    isValid,
    isGoogleLoading,
  } = props;

  const {
    value: emailInputValue,
    onBlur: onBlurEmail,
    onChange: onChangeEmail,
    name: emailName,
  } = formikProps('email');

  const {
    value: passwordInputValue,
    onBlur: onBlurPassword,
    onChange: onChangePassword,
    name: passwordName,
  } = formikProps('password');

  const { touched: emailTouched, error: emailError } = formikMeta('email');
  const { touched: passwordTouched, error: passwordError } =
    formikMeta('password');

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <Styled.loginWraper>

      {/* <Styled.Label>{STRINGS.sign_in_up.email_input}</Styled.Label> */}
      <Input
        inputName={emailName}
        value={emailInputValue}
        onChangeValue={onChangeEmail}
        errorText={emailError}
        text={STRINGS.sign_in_up.email_input}
        onBlur={onBlurEmail}
        touched={emailTouched}
        // isHiddenLabel
        isRemoveBorder
      />
      {/* <Styled.Label>{STRINGS.sign_in_up.password_input}</Styled.Label> */}
      <InputPassword
        // isHiddenLabel
        inputName={passwordName}
        showPassword={isShowPassword}
        password={passwordInputValue}
        onChangePassword={onChangePassword}
        onClick={onTogglePasswordVisibility}
        text={STRINGS.sign_in_up.password_input}
        errorText={passwordError}
        onBlur={onBlurPassword}
        touched={passwordTouched}
        />

      </Styled.loginWraper>
        
      <Link to={ROUTES.forgotPassword}>
        <Styled.ForgotPassword>
          {STRINGS.sign_in_up.forgot_password}
        </Styled.ForgotPassword>
      </Link>
      <Button
        isDisabled={!isValid}
        themedButton="primary"
        width="auth"
        type="submit"
      >
        {STRINGS.sign_in_up.sign_in}
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
      <Styled.SignUpLink>
        <Styled.Text>{STRINGS.sign_in_up.without_acc}</Styled.Text>
        <Styled.SignUpText data-testid="sign_up" to={ROUTES.sign_up}>
          {STRINGS.sign_in_up.sign_up}
        </Styled.SignUpText>
      </Styled.SignUpLink>
    </Styled.Form>
  );
};
