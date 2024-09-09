import { FC } from 'react';

import { Input } from 'components/Input';
import { InputPassword } from 'components/InputPassword';
import { CustomSelect } from 'components/CustomSelect';

import { BindSocialAccountFormStyles as Styled } from './BindSocialAccountInputs.style';

import { countries } from 'constants/countries-array';

export const BindSocialAccountInputs: FC<
  Omit<IBindSocialAccountFormProps, 'isValid' | 'onFormHandleSubmit'>
> = (props) => {
  const {
    errors,
    touched,
    isShowConfirmPassword,
    isShowPassword,
    values,
    countryValue,
    onChangeCountryValueHandler,
    onChange,
    onBlur,
    setIsShowConfirmPassword,
    setIsShowPassword,
  } = props;
  return (
    <>
      <Styled.FormSpacing>
      <Input
        value={values['email']}
        errorText={errors['email']}
        onBlur={onBlur}
        touched={touched['email']}
        onChangeValue={onChange}
        inputName="email"
        text="Email"
        isRemoveBorder
      />
      <>
        <CustomSelect
          value={countryValue}
          onChangeValueHandler={onChangeCountryValueHandler}
          options={countries}
            isRemoveBorder
            label={"Country"}
        />
      </>
      <Styled.PasswordWrapper>
        <InputPassword
          showPassword={isShowPassword}
          onClick={setIsShowPassword}
          onBlur={onBlur}
          errorText={errors['newPassword']}
          touched={touched['newPassword']}
          password={values['newPassword']}
          onChangePassword={onChange}
          inputName="newPassword"
          text="Password"
        />
      </Styled.PasswordWrapper>
      <InputPassword
        showPassword={isShowConfirmPassword}
        onClick={setIsShowConfirmPassword}
        onBlur={onBlur}
        password={values['confirmPassword']}
        onChangePassword={onChange}
        touched={touched['confirmPassword']}
        errorText={errors['confirmPassword']}
        inputName="confirmPassword"
        text="Confirm Password"
        />
        </Styled.FormSpacing>
    </>
  );
};
