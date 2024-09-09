import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import { FieldItem } from '../FieldItem';
// import { TInputFields } from '../types/MyAccount.types';
import { AccountFieldsStyle as Styled } from './AccountFields.style';
// import { ResetPasswordField } from '../ResetPasseordFields/ResetPasswordField';
import { IResetPasswordFields, TInputFields } from '../types/MyAccount.types';

interface IAccountFieldsProps {
  // isResetPassword: boolean;
  // resetPasswordFields: IResetPasswordFields[];
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  // resetPasswordFormikProps: (nameOrOptions: string) => FieldInputProps<string>;
  // resetPasswordFormikMeta: (name: string) => FieldMetaProps<string>;
  accountsFields: TInputFields;
}

export const AccountFields: FC<IAccountFieldsProps> = ({
  // isResetPassword,
  // resetPasswordFields,
  accountsFields,
  formikMeta,
  formikProps,
  // resetPasswordFormikMeta,
  // resetPasswordFormikProps,
}) => (
  <>
    {/* {isResetPassword ? (
      <ResetPasswordField
        resetPasswordFields={resetPasswordFields}
        resetPasswordFormikProps={resetPasswordFormikProps}
        resetPasswordFormikMeta={resetPasswordFormikMeta}
      />
    ) : ( */}
        
      <Styled.FieldsBlockWrapper>
        <Styled.FieldsWrapper>
          {accountsFields.slice(0, 3).map((item) => (
            <FieldItem
              selectValue={item?.value}
              key={item.label}
              onChangeSelectHandler={item.onChangeSelect}
              isDisabled={item.isDisabled}
              inputName={item.name}
              inputType={item.type}
              labelText={item.label}
              selectOptions={item.options}
              formikMeta={formikMeta}
              formikProps={formikProps}
            />
          ))}
        </Styled.FieldsWrapper>
        <Styled.FieldsWrapper>
          {accountsFields.slice(3).map((item) => (
            <FieldItem
              selectValue={item?.value}
              key={item.label}
              onChangeSelectHandler={item.onChangeSelect}
              inputName={item.name}
              inputType={item.type}
              labelText={item.label}
              selectOptions={item.options}
              isDisabled={item.isDisabled}
              formikMeta={formikMeta}
              formikProps={formikProps}
            />
          ))}
        </Styled.FieldsWrapper>
      </Styled.FieldsBlockWrapper>
    {/* )} */}
  </>
);
