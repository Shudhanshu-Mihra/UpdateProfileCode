import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs';
import { SuccessModalWindow } from 'components/SuccessModalWindow';

import { ResetPasswordStyles as Styled } from './ResetPassword.style';
import { RESET_PASSWORD_STRINGS as Strings } from './constants';
import { ResetPasswordForm } from './ResetPasswordForm';
import { useResetPasswordState } from './ResetPassword.state';

export const ResetPassword: FC = () => {
  const {
    formik,
    isSuccess,
    onCloseModalHandler,
    onCloseExpiredModal,
    isExpiredToken,
  } = useResetPasswordState();
  return (
    <Styled.MainWrapper>
      <AuthImageSection />
      <SuccessModalWindow
        isExpiredToken={isExpiredToken}
        text={
          isExpiredToken
            ? 'Link has been expired. Try again please'
            : 'Password has been successfully changed'
        }
        onCloseModalWindowHandler={
          isExpiredToken ? onCloseExpiredModal : onCloseModalHandler
        }
        isModalWindowOpen={isSuccess || isExpiredToken}
      />
      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs tabText={Strings.resetPassword} />
          <ResetPasswordForm
            formikMeta={formik.getFieldMeta}
            formikProps={formik.getFieldProps}
            onFormHandleSubmit={formik.handleSubmit}
            isValid={formik.dirty && formik.isValid}
            isSubmiting={formik.isSubmitting}
          />
          <Styled.EmptyDiv />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
