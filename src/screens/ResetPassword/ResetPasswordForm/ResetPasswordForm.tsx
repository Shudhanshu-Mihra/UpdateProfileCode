import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Button } from 'components/Button';
import { InputItem } from 'components/InputItem';

import { ResetPasswordFormStyles as Styled } from './ResetPasswordForm.style';
import { RESET_PASSWORD_INPUTS, RESET_PASSWORD_STRINGS } from '../constants';

interface IResetPasswordFormProps {
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  isValid: boolean;
  isSubmiting: boolean;
}

export const ResetPasswordForm: FC<IResetPasswordFormProps> = (props) => {
  const { isValid, isSubmiting, formikMeta, formikProps, onFormHandleSubmit } =
    props;

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      {RESET_PASSWORD_INPUTS.map((input) => (
        <Styled.InputWrapper isValid={isValid} key={input.inputName}>
          <InputItem
            key={input.inputName}
            inputName={input.inputName}
            inputType={input.inputType}
            labelText={input.labelText}
            formikProps={formikProps}
            formikMeta={formikMeta}
          />
        </Styled.InputWrapper>
      ))}
      <Styled.ButtonWrapper>
        <Button
          isDisabled={!isValid || isSubmiting}
          type="submit"
          themedButton="primary"
          width="auth"
        >
          {RESET_PASSWORD_STRINGS.buttonText}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};
