import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';

interface IEmailInputItemProps {
  inputName: string;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  labelText: string;
  isTextArea?: boolean;
  inputHeight?: string;
}

export const EmailInputItem: FC<IEmailInputItemProps> = (props) => {
  const {
    formikMeta,
    formikProps,
    inputName,
    labelText,
    isTextArea,
    inputHeight,
  } = props;

  const { value, onBlur, onChange, name } = formikProps(inputName);
  const { touched, error } = formikMeta(inputName);

  return (
    <>
      <Input
        errorText={error}
        onBlur={onBlur}
        touched={touched}
        inputName={name}
        text={labelText}
        onChangeValue={onChange}
        value={value}
        isHiddenLabel
        isTextArea={isTextArea}
        inputHeight={inputHeight}
        isRemoveBorder
      />
    </>
  );
};
