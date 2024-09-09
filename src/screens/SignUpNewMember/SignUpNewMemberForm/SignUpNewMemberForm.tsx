import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { ActionMeta } from 'react-select';

import { Button } from 'components/Button/Button';
import { InputsBoxItem } from 'components/InputsBox';

import { SignUpFormStyles as Styled } from './SignUpNewMemberForm.styles';
import { inputs } from '../SignUpNewMember.constants';

import { STRINGS } from 'constants/strings';
import { Input } from '../../../components/Input';

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
}

export const SignUpNewMemberForm: FC<ISignUpFormProps> = (props) => {
  const {
    isShowPassword,
    isValid,
    countryValue,
    onTogglePasswordVisibility,
    onFormHandleSubmit,
    formikMeta,
    formikProps,
    onChangeCountryValueHandler,
  } = props;

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <Input
        value={formikMeta('email').value}
        text="Email"
        isDisabled
        isRemoveBorder
      />
      {inputs.map((input) => (
        <InputsBoxItem
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
      <Styled.ButtonsWrapper>
        <Button
          isDisabled={!isValid}
          type="submit"
          themedButton="primary"
          width="auth"
        >
          {STRINGS.sign_in_up.sign_up}
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.Form>
  );
};
