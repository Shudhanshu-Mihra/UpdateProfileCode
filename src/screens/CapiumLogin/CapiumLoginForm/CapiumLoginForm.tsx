import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';
import { Icon } from 'components/Icons/Icons';
import { InfoPopup } from 'components/InfoPopup/InfoPopup';

import { CapiumLoginForm as Styled } from './CapiumLoginForm.style';
import { CAPIUM_LOGIN_STRINGS as STRINGS } from '../capiumLogin.contants';

interface ICapiumLoginForm {
  isHoverInfo: boolean;
  isShowPassword: boolean;
  isValid: boolean;
  isSubmiting: boolean;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onTogglePasswordVisibility: () => void;
  onSubmitFormHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
}

export const CapiumLoginForm: FC<ICapiumLoginForm> = (props) => {
  const {
    isHoverInfo,
    isShowPassword,
    isValid,
    isSubmiting,
    formikMeta,
    formikProps,
    onTogglePasswordVisibility,
    onSubmitFormHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = props;

  const {
    value: emailValue,
    onBlur: onBlurEmail,
    onChange: onChangeEmail,
    name: emailName,
  } = formikProps('email');

  const {
    value: passwordValue,
    onBlur: onBlurPassword,
    onChange: onChangePassword,
    name: passwordName,
  } = formikProps('password');

  const { touched: emailTouched, error: emailError } = formikMeta('email');
  const { touched: passwordTouched, error: passwordError } =
    formikMeta('password');

  return (
    <Styled.Form onSubmit={onSubmitFormHandler}>
      <Styled.LabelWrapper>
        <Styled.Label>{STRINGS.email}</Styled.Label>
        <Styled.IconWrapper
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Icon type="infoIcon" />
          {isHoverInfo && <InfoPopup text={STRINGS.infoText} />}
        </Styled.IconWrapper>
      </Styled.LabelWrapper>
      <Input
        isHiddenLabel
        value={emailValue}
        onChangeValue={onChangeEmail}
        onBlur={onBlurEmail}
        inputName={emailName}
        errorText={emailError}
        touched={emailTouched}
        isRemoveBorder
      />

      <InputPassword
        inputName={passwordName}
        text={STRINGS.password}
        showPassword={isShowPassword}
        password={passwordValue}
        onChangePassword={onChangePassword}
        onClick={onTogglePasswordVisibility}
        onBlur={onBlurPassword}
        errorText={passwordError}
        touched={passwordTouched}
      />
      <Styled.ButtonWrapper>
        <Button
          isDisabled={!isValid || isSubmiting}
          themedButton="primary"
          width="auth"
          type="submit"
        >
          {STRINGS.buttonText}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};
