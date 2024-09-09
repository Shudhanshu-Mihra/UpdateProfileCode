import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs/AuthTabs';

import { useLoginState } from './Login.state';
import { LoginForm } from './LoginForm/LoginForm';
import { Styled } from './Login.style';

export const Login = () => {
  const {
    isShowPassword,
    formik,
    isGoogleLoading,
    onSignUpClickHandler,
    onTogglePasswordVisibility,
    onGoogleButtonClickHandler,
  } = useLoginState();

  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.Wrapper>
          <Styled.RightSideContentWrapper>
            <AuthTabs isAuth onSignUpClickHandler={onSignUpClickHandler} />
            <LoginForm
              onGoogleButtonClickHandler={onGoogleButtonClickHandler}
              isGoogleLoading={isGoogleLoading}
              onFormHandleSubmit={formik.handleSubmit}
              formikProps={formik.getFieldProps}
              formikMeta={formik.getFieldMeta}
              onTogglePasswordVisibility={onTogglePasswordVisibility}
              isShowPassword={isShowPassword}
              isValid={formik.isValid && formik.dirty}
            />
          </Styled.RightSideContentWrapper>
        </Styled.Wrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
