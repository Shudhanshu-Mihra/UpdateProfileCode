import { FC } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import ReactModal from 'react-modal';
import { ActionMeta } from 'react-select';

import { BindSocialAccountInputs } from '../BindSocialAccountInputs';
import { IFormikValues } from '../BindSocialAccountInputs/bindSocialAccountInputs.types';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { ReactComponent as Close } from 'assets/icons/close.svg';

import {
  LinkSocAccModalStyles,
  LinkSocaAccModalWindowStyles as Styled,
} from './LinkSocaAccModalWindow.style';

interface ILinkSocAccModalProps {
  isLoading: boolean;
  onCloseModalWindowHandler: () => void;
  isModalWindowOpen: boolean;
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  setIsShowConfirmPassword: () => void;
  setIsShowPassword: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isShowConfirmPassword: boolean;
  isShowPassword: boolean;
  values: IFormikValues;
  errors: FormikErrors<IFormikValues>;
  touched: FormikTouched<IFormikValues>;
  countryValue: IOption;
}
export const LinkSocAccModalWindow: FC<ILinkSocAccModalProps> = (props) => {
  const {
    onCloseModalWindowHandler,
    isLoading,
    isModalWindowOpen,
    countryValue,
    errors,
    isShowConfirmPassword,
    isShowPassword,
    isValid,
    setIsShowConfirmPassword,
    setIsShowPassword,
    touched,
    values,
    onBlur,
    onChange,
    onChangeCountryValueHandler,
    onFormHandleSubmit,
  } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={LinkSocAccModalStyles}
    >
      {/* <ModalWindowHeader headerTitle="Link your social account" /> */}
      <Styled.ModalMasterContentWrapper>
      <Styled.HeaderBox>
        <Styled.Title>Linked Your Social Account</Styled.Title>
      </Styled.HeaderBox>
      <Styled.CloseIconWrapper>
          <Close width={18} onClick={onCloseModalWindowHandler} />
          </Styled.CloseIconWrapper>
      <form onSubmit={onFormHandleSubmit}>
        {/* <Styled.MainContentWrapper> */}
          <BindSocialAccountInputs
            onChangeCountryValueHandler={onChangeCountryValueHandler}
            setIsShowConfirmPassword={setIsShowConfirmPassword}
            setIsShowPassword={setIsShowPassword}
            onChange={onChange}
            onBlur={onBlur}
            isShowConfirmPassword={isShowConfirmPassword}
            isShowPassword={isShowPassword}
            values={values}
            errors={errors}
            touched={touched}
            countryValue={countryValue}
          />
        </form>
        {/* </Styled.MainContentWrapper> */}
        <ModalButtonsBox
          isLoading={isLoading}
          onCancelClickHandler={onCloseModalWindowHandler}
          onSaveButtonCLickHandler={onFormHandleSubmit}
          isSaveButton
          isDisableButton={!isValid}
        />
      </Styled.ModalMasterContentWrapper>

    </ReactModal>
  );
};
