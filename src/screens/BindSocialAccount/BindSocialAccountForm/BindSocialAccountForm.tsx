import { FC } from 'react';

import { Button } from 'components/Button';
import { BindSocialAccountInputs } from 'components/BindSocialAccountInputs';

import { BindSocialAccountFormStyles as Styled } from './BindSocialAccountForm.style';

export const BindSocialAccountForm: FC<IBindSocialAccountFormProps> = (
  props
) => {
  const {
    errors,
    touched,
    isShowConfirmPassword,
    isShowPassword,
    isValid,
    values,
    countryValue,
    onChangeCountryValueHandler,
    onChange,
    onBlur,
    setIsShowConfirmPassword,
    setIsShowPassword,
    onFormHandleSubmit,
  } = props;
  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <BindSocialAccountInputs
        errors={errors}
        touched={touched}
        isShowConfirmPassword={isShowConfirmPassword}
        isShowPassword={isShowPassword}
        values={values}
        countryValue={countryValue}
        onChangeCountryValueHandler={onChangeCountryValueHandler}
        onChange={onChange}
        onBlur={onBlur}
        setIsShowConfirmPassword={setIsShowConfirmPassword}
        setIsShowPassword={setIsShowPassword}
      />
      <Styled.ButtonsWrapper>
        <Button
          isDisabled={!isValid}
          type="submit"
          themedButton="primary"
          width="auth"
        >
          Create ReceiptHub Account
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.Form>
  );
};
