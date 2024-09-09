import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

import { ForgotPasswordFormStyles as Styled } from './ForgotPasswordForm.style';
import { FORGOT_PASSWORD_STRINGS } from '../constats';

import { STRINGS } from 'constants/strings';

interface IForgotPasswordFormProps {
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  isValid: boolean;
}
export const ForgotPasswordForm: FC<IForgotPasswordFormProps> = (props) => {
  const { formikMeta, formikProps, onFormHandleSubmit, isValid } = props;

  const { value, onBlur, onChange, name } = formikProps('email');

  const { touched, error } = formikMeta('email');
  return (
    <Styled.Form onSubmit={onFormHandleSubmit} name="form">
      <Styled.InputWrapper>
        <Input
          inputName={name}
          text={STRINGS.sign_in_up.email_input}
          value={value}
          onChangeValue={onChange}
          errorText={error}
          onBlur={onBlur}
          touched={touched}
          isRemoveBorder
        />
        {!error && (
          <Styled.Description>
            {FORGOT_PASSWORD_STRINGS.description}
          </Styled.Description>
        )}
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <Button
          isDisabled={!isValid}
          type="submit"
          themedButton="primary"
          width="auth"
        >
          {FORGOT_PASSWORD_STRINGS.buttonText}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};
