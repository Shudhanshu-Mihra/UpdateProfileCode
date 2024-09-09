import { FC, useEffect, useState } from 'react';
import { theme } from 'styles/theme';
import { LoaderComponent } from 'components/Loader';
import { SuccessPopup } from 'components/SuccessPopup';
import { LinkSocAccModalWindow } from 'components/LinkSocAccModalWindow';
import { PasswordChangeModelWindow } from './PasswordChangeModelWindow/PasswordChangeModelWindow';
import { useMyAccountState } from './MyAccount.state';
import { MyAccountStyles as Styled } from './MyAccount.style';
import { Buttons } from './Buttons';
import { AccountFields } from './AccountFields';
import { FormButtonPanel } from 'components/FormButtonPanel';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';
import { Button } from 'components/Button';

export const MyAccount: FC = (ILinkSocAccModalProps) => {
  const [isForgetPasswordModalOpen, setForgetPasswordModalOpen] = useState(false);

  const {
    accountsFields,
    isResetPassword,
    resetPasswordFields,
    isFetchingData,
    formik,
    isLoading,
    resetPasswordFormik,
    isDisabledButton,
    isShowSuccesPopup,
    linkSocAccFormik,
    countryValue,
    isLinkSocialAccButton,
    isLinkSocAccWindowOpen,
    isCreatingAcc,
    setLinkSocAccWindowToggle,
    setIsShowNewPassword,
    setIsShowConfirmPassword,
    onChangeLinkedCountryValueHandler,
    setIsShowSuccesPopup,
    onCancelbuttonClickHandler,
    getProfileHandler,
    setIsResetPassword,
    onSettingsClickButtonHandler,
    onSubmitHandler,
    onSaveNewPasswordHandler,
    updateUserProfileHandler,
    onChangeStateFieldHandler,
    // ResetPasswordModelWindowApiFunction,
    // ResetFormdata,
    // currency,
    // dateFormat,
    // country,
    // currentPassword,
    // newPassword,
    // confirmPassword,
    formikResetPassword,
    resetPasswordArr,
    isShowCurrentPassword,
    isShowNewPassword,
    isShowConfirmPassword,
  } = useMyAccountState();

  useEffect(() => {
    getProfileHandler();
  }, []);

  const openForgetPasswordModal = () => {
    setForgetPasswordModalOpen(true);
  };

  const closeForgetPasswordModal = () => {
    setForgetPasswordModalOpen(false);
  };
  // const isCancelButton: boolean = false;
  // const CancelProfileUpdateHandler = () => {
  //   console.log("cancel function ");
  // }
  return (
    <Styled.LayoutWrapper>
      <SuccessPopup
        positionTop="0"
        isShowPopup={isShowSuccesPopup}
        closePopupFc={setIsShowSuccesPopup}
        titleText={

          isLinkSocialAccButton
            ?
            'The social account has been successfully linked'
            : isResetPassword
              ? 'The password has been successfully changed'
              : 'User profile has been successfully changed'
        }
      />
      <LinkSocAccModalWindow
        isLoading={isCreatingAcc}
        isModalWindowOpen={isLinkSocAccWindowOpen}
        onCloseModalWindowHandler={setLinkSocAccWindowToggle}
        onChangeCountryValueHandler={onChangeLinkedCountryValueHandler}
        onFormHandleSubmit={linkSocAccFormik.handleSubmit}
        setIsShowConfirmPassword={setIsShowConfirmPassword}
        setIsShowPassword={setIsShowNewPassword}
        onChange={linkSocAccFormik.handleChange}
        onBlur={linkSocAccFormik.handleBlur}
        isValid={linkSocAccFormik.isValid && linkSocAccFormik.dirty}
        isShowConfirmPassword={isShowConfirmPassword}
        isShowPassword={isShowNewPassword}
        values={linkSocAccFormik.values}
        errors={linkSocAccFormik.errors}
        touched={linkSocAccFormik.touched}
        countryValue={countryValue}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.ContentWrapper isResetPassword={isResetPassword}>
          <Styled.Form onSubmit={onSubmitHandler}>

            <AccountFields
              // isResetPassword={isResetPassword}
              // resetPasswordFields={resetPasswordFields}
              formikProps={formik.getFieldProps}
              formikMeta={formik.getFieldMeta}
              // resetPasswordFormikProps={resetPasswordFormik.getFieldProps}
              // resetPasswordFormikMeta={resetPasswordFormik.getFieldMeta}
                accountsFields={accountsFields}
            />

            <PasswordChangeModelWindow
                isOpen={isForgetPasswordModalOpen}
                onRequestClose={closeForgetPasswordModal}
                isLoading={false}
                {...resetPasswordFormik}
                resetPasswordArr={resetPasswordArr}
                formikResetPassword={formikResetPassword}
                formikProps={formikResetPassword.getFieldProps}
                formikMeta={formikResetPassword.getFieldMeta}
            />
            <FormButtonPanel>

              {/* <ReUseActionButton widthType='rounded' displayText={"Link Social Account"} themedButton='roundedWhite' buttonType="text-link" onClick={() => { setLinkSocAccWindowToggle() }} /> */}
              <ReUseActionButton displayText="Link Social Account" buttonType="text-link" onClick={() => { setLinkSocAccWindowToggle() }} displayIconType="resetIcon" customColor={`${theme.colors.red}`} />

              {/* <Buttons
                settingsButtonText={'Reset Password'}
                onClickSettingsButtonHandler={openForgetPasswordModal}
                onCancelbuttonClickHandler={onCancelbuttonClickHandler}
                isDisabledButton={isDisabledButton}
                isLoading={isLoading}
                isCancelButton={isResetPassword}
                /> */}
              <ReUseActionButton displayText="Reset Password" buttonType="text-link" onClick={openForgetPasswordModal} displayIconType="resetIcon" customColor={`${theme.colors.red}`} margin='0 0 0 auto'

              />
              <ReUseActionButton widthType='rounded' displayText={"Cancel"} themedButton='roundedWhite' buttonType="actionButton" onClick={onCancelbuttonClickHandler} />

              <ReUseActionButton widthType='rounded' displayText={"Save"} themedButton='roundedRed' type="submit" buttonType="actionButton" onFormikClick={updateUserProfileHandler} />

              {/* </div> */}


            </FormButtonPanel>
          </Styled.Form>
        </Styled.ContentWrapper>
      )}
    </Styled.LayoutWrapper>
  );
};
