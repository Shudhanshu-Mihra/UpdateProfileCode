import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs';
import { SuccessModalWindow } from 'components/SuccessModalWindow';

import { useBindSocialAccountState } from './BindSocialAccount.state';

import { BindSocialAccountStyles as Styled } from './BindSocialAccount.style';
import { BindSocialAccountForm } from './BindSocialAccountForm';

export const BindSocialAccount: FC = () => {
  const {
    formik,
    isShowConfirmPassword,
    isShowPassword,
    isExpiredToken,
    isSuccess,
    countryValue,
    onChangeCountryValueHandler,
    onCloseModalHandler,
    setIsShowConfirmPassword,
    setIsShowPassword,
  } = useBindSocialAccountState();
  return (
    <Styled.MainWrapper>
      <AuthImageSection />
      <SuccessModalWindow
        isExpiredToken={isExpiredToken}
        text={
          isExpiredToken
            ? 'Link has been expired. Try again please'
            : 'ReceiptHub account has been successfully created'
        }
        onCloseModalWindowHandler={onCloseModalHandler}
        isModalWindowOpen={isSuccess || isExpiredToken}
      />
      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <AuthTabs tabText="Create ReceiptHub account" />
          <BindSocialAccountForm
            onFormHandleSubmit={formik.handleSubmit}
            isValid={formik.isValid && formik.dirty}
            isShowConfirmPassword={isShowConfirmPassword}
            isShowPassword={isShowPassword}
            setIsShowConfirmPassword={setIsShowConfirmPassword}
            setIsShowPassword={setIsShowPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors}
            values={formik.values}
            touched={formik.touched}
            onChangeCountryValueHandler={onChangeCountryValueHandler}
            countryValue={countryValue}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
