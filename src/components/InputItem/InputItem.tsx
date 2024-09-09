import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';

import { useInputItemState } from './InputItem.state';

interface IInputItemProps {
  inputName: string;
  inputType: string;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  labelText: string;
}

export const InputItem: FC<IInputItemProps> = (props) => {
  const { formikMeta, formikProps, inputName, inputType, labelText } = props;

  const { isShowPassword, onTogglePasswordVisibility } = useInputItemState();

  const { value, onBlur, onChange, name } = formikProps(inputName);

  const { touched, error } = formikMeta(inputName);

  return (
    <>
      {inputType === 'password' ? (
        <InputPassword
          errorText={error}
          onBlur={onBlur}
          touched={touched}
          inputName={name}
          text={labelText}
          showPassword={isShowPassword}
          password={value}
          onChangePassword={onChange}
          onClick={onTogglePasswordVisibility}
        />
      ) : (
        <Input
          errorText={error}
          onBlur={onBlur}
          touched={touched}
          inputName={name}
          text={labelText}
          onChangeValue={onChange}
          value={value}
        />
      )}
    </>
  );
};
