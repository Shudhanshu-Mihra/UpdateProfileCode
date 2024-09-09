import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { ActionMeta } from 'react-select';

import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';
import { CustomSelect } from 'components/CustomSelect';

import { SignUpFormStyles } from '../SignUpForm/SignUpForm.styles';

import { countries } from 'constants/countries-array';

interface IInputItemProps {
  countryValue: {
    label: string;
    value: string;
  };
  inputName: string;
  inputType: string;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  labelText: string;
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
}

export const InputItem: FC<IInputItemProps> = (props) => {
  const {
    formikMeta,
    formikProps,
    onTogglePasswordVisibility,
    onChangeCountryValueHandler,
    isShowPassword,
    inputName,
    inputType,
    labelText,
    countryValue,
  } = props;

  const { value, onBlur, onChange, name } = formikProps(inputName);

  const { touched, error } = formikMeta(inputName);

  return (
    <>
      {inputType === 'password' ? (
        <>
          {/* <SignUpFormStyles.Label>{labelText}</SignUpFormStyles.Label> */}
          <InputPassword
            errorText={error}
            onBlur={onBlur}
            touched={touched}
            // text={"Password" }
            inputName={name}
            text={labelText}
            showPassword={isShowPassword}
            password={value}
            onChangePassword={onChange}
            onClick={onTogglePasswordVisibility}
            // isHiddenLabel
          />
        </>
      ) : inputType === 'select' ? (
        <>
          {/* <SignUpFormStyles.Label>{labelText}</SignUpFormStyles.Label> */}
          <CustomSelect
            value={countryValue}
            onChangeValueHandler={onChangeCountryValueHandler}
            name={name}
              options={countries}
              label={labelText}
            isRemoveBorder
          />
        </>
      ) : (
        <>
          {/* <SignUpFormStyles.Label>{labelText}</SignUpFormStyles.Label> */}
          <Input
            errorText={error}
            onBlur={onBlur}
            touched={touched}
            inputName={name}
            text={labelText}
            onChangeValue={onChange}
            value={value}
            // isHiddenLabel
            isRemoveBorder
          />
        </>
      )}
    </>
  );
};
