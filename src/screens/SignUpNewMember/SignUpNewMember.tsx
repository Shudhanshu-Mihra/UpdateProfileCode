import { AuthImageSection } from 'components/AuthImageSection';

import { useSignUpNewMemberState } from './SignUpNewMember.state';
import { SignUpNewMemberStyles as Styled } from './SignUpNewMember.style';
import { SignUpNewMemberForm } from './SignUpNewMemberForm';

export const SignUpNewMember = () => {
  const {
    countryValue,
    formik,
    isShowPassword,
    onChangeCountryValueHandler,
    onTogglePasswordVisibility,
  } = useSignUpNewMemberState();
  return (
    <Styled.MainWrapper>
      <AuthImageSection />
      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <SignUpNewMemberForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            onFormHandleSubmit={formik.handleSubmit}
            isShowPassword={isShowPassword}
            isValid={formik.isValid && formik.dirty}
            countryValue={countryValue}
            onChangeCountryValueHandler={onChangeCountryValueHandler}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
