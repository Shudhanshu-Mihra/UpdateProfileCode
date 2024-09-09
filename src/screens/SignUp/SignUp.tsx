import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs/AuthTabs';

import { useSignUpState } from './SignUp.state';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignUpStyles as Styled } from './SignUp.styles';

export const SignUp: FC = () => {
  const {
    onLoginClickHandler,
    onTogglePasswordVisibility,
    onChangeCountryValueHandler,
    onGoogleButtonClickHandler,
    isGoogleLoading,
    isShowPassword,
    formik,
    countryValue,
  } = useSignUpState();

  return (
    <Styled.MainWrapper data-testid="sign-up-page">
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs
            isAuth
            isSignUp
            onSignInClickHandler={onLoginClickHandler}
          />
          <SignUpForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            onFormHandleSubmit={formik.handleSubmit}
            isShowPassword={isShowPassword}
            isValid={formik.isValid && formik.dirty}
            countryValue={countryValue}
            onChangeCountryValueHandler={onChangeCountryValueHandler}
            onGoogleButtonClickHandler={onGoogleButtonClickHandler}
            isGoogleLoading={isGoogleLoading}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
