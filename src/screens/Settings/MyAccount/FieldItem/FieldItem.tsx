import { FC, useEffect } from 'react';
import { ActionMeta } from 'react-select';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { CustomSelect } from 'components/CustomSelect';
import { Input } from 'components/Input';
import { InputPassword } from 'components/InputPassword';

import { FieldItemStyles as Styled } from './FieldItem.style';
import { useToggle } from 'hooks/useToggle';

interface IFieldItemProps {
  showPassword?: boolean;
  isDisabled?: boolean;
  onClickShowPassword?: () => void;
  selectOptions?: IOption[];
  selectValue?: IOption | any;
  onChangeSelectHandler?: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  inputName: string;
  inputType: string;
  labelText: string; // inputValue?: string;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
}

export const FieldItem: FC<IFieldItemProps> = (props) => {
  const {
    inputName,
    inputType,
    labelText,
    selectOptions,
    selectValue,
    showPassword,
    isDisabled,
    onClickShowPassword,
    formikMeta,
    formikProps,
    onChangeSelectHandler,
  } = props;
  const [isTrue, setIsTrue] = useToggle(false);
  const { value, onChange, onBlur, name } = formikProps(inputName);
  const { touched, error } = formikMeta(inputName);

  return (
    <>
      {inputType === 'input' ? (
        <Styled.FieldWrapper>
          <Styled.Label>{labelText}</Styled.Label>
          <Input
            value={value}
            onChangeValue={onChange}
            isHiddenLabel
            isNoMargin
            inputName={name}
            errorText={error}
            touched={touched}
            onBlur={onBlur}
            isRemoveBorder
          />
        </Styled.FieldWrapper>
      ) : inputType === 'select' ? (
        <Styled.FieldWrapper>
          <Styled.Label>{labelText}</Styled.Label>
          <CustomSelect
            isDisabled={isDisabled}
            value={selectValue}
            options={selectOptions}
            onChangeValueHandler={onChangeSelectHandler}
            marginBottom="0px"
            isRemoveBorder
          />
        </Styled.FieldWrapper>
      ) : inputType === 'password' ? (
        <Styled.FieldWrapper>
          {/* <Styled.Label>{labelText}</Styled.Label> */}
          <InputPassword
                inputName={name}
                showPassword={showPassword || false} // showPassword={isTrue}
                password={value}
                onChangePassword={onChange}    // onPasswordGetHandaler={getPasswordValue}   // getPasswordValue={onPasswordGetHandaler}
                onClick={onClickShowPassword}
                errorText={error}
                onBlur={onBlur}
                touched={touched}
                text={labelText}
                // isHiddenLabel
          />
        </Styled.FieldWrapper>
      ) : null}
    </>
  );
};

