import React, { FC } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import { FieldInputProps, FieldMetaProps } from 'formik';
// import { ResetPasswordField } from '../ResetPasseordFields/ResetPasswordField';
import { FieldItem } from '../FieldItem';
import {
  PasswordChangeModel,
  LinkSocaAccModalWindowStyles as Styled,
} from './PasswordChangeModelWindow.style';
import { ModalButtonsBox } from 'components/ModalButtonsBox';
import { IResetPasswordFields, TInputFields } from '../types/MyAccount.types';
import { ReactComponent as Close } from 'assets/icons/close.svg';

interface ForgetPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isLoading: boolean;
  // onResetPasswordSubmitHandler: (formikValues?: any) => void;
  // onChangeStateFieldHandler: (optionName: "currency" | "newPassword" | "confirmPassword" | "currentPassword" | "country" | "dateFormat", value: string) => void;

  resetPasswordArr: IResetPasswordFields[];
  formikResetPassword: ReturnType<any>;
  // passwordFormArr: ReturnType<typeof passwordFormArr1>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
}

// export type Iaaa = ReturnType<typeof passwordFormArr1>;


// Example initial values, ensure this matches the type and structure you need

const validate = (values: IResetPasswordFields[]) => {
  const errors: Partial<IResetPasswordFields>[] = [];
  // Validation logic here, e.g., check for empty fields
  return errors;
};

export const PasswordChangeModelWindow: FC<ForgetPasswordModalProps> = ({
  isOpen,
  onRequestClose,
  isLoading,
  // onResetPasswordSubmitHandler,
  formikResetPassword,
  resetPasswordArr,
  formikMeta,
  formikProps,
}) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={PasswordChangeModel}>
      {/* <Styled.MainContentWrapper> */}
      <Styled.ModalMasterContentWrapper>
      <Styled.HeaderBox>
        <Styled.Title>Reset Password</Styled.Title>
      </Styled.HeaderBox>
      
      <Styled.CloseIconWrapper>
      <Close width={18} onClick={onRequestClose} />
      </Styled.CloseIconWrapper>
        <Styled.PasswordFieldWrapper>
          {/* <ResetPasswordField
            // resetPasswordFields={formik.values}
            // resetPasswordFormikProps={formik.getFieldProps}
            // resetPasswordFormikMeta={formik.getFieldMeta}
            onResetPasswordSubmitHandler={onResetPasswordSubmitHandler}
            passwordFormArr={passwordFormArr}
          /> */}
          {/* {passwordFormArr1.slice(0, 3).map((item) => ( */}
          {resetPasswordArr.map((item) => (
            <FieldItem
              selectValue={item?.value}
              key={item.label}
              // onChangeSelectHandler={item.onChangeSelect}
              // isDisabled={item.isDisabled}
              inputName={item.name}
              inputType={item.type}
              labelText={item.label}
              // selectOptions={item.options}
              formikMeta={formikMeta}
              formikProps={formikProps}
              onClickShowPassword={item.ShowPasswordHandler}
              showPassword={item.isShowPassword}
            />
          ))}
          </Styled.PasswordFieldWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onRequestClose}
        // onSaveButtonCLickHandler={formik.handleSubmit}
        onSaveButtonCLickHandler={formikResetPassword.handleSubmit}
        isSaveButton
        />
        </Styled.ModalMasterContentWrapper>
        {/* </Styled.MainContentWrapper> */}
    </Modal>
  );
};

// import React, { FC, useState } from 'react';
// import Modal from 'react-modal';
// import { useFormik } from 'formik';
// import { ResetPasswordField } from '../ResetPasseordFields/ResetPasswordField';
// import { IResetPasswordFields } from '../types/MyAccount.types';
// import {
//   PasswordChangeModel,
//   LinkSocaAccModalWindowStyles as Styled,
// } from './PasswordChangeModelWindow.style';
// import { ModalButtonsBox } from 'components/ModalButtonsBox';
// interface ForgetPasswordModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   isLoading: boolean;
//   // onCloseModalWindowHandler: () => void;
//   onResetPasswordSubmitHandler: (
//     formikValues?: any
//   ) => void;
//   // isValid: boolean;
// }

// const validate = (values: IResetPasswordFields[]) => {
//   const errors: Partial<IResetPasswordFields>[] = [];
//   // Validation logic here, e.g., check for empty fields
//   return errors;
// };

// export const PasswordChangeModelWindow: FC<ForgetPasswordModalProps> = ({ isOpen, onRequestClose, isLoading, onResetPasswordSubmitHandler }) => {
//   // Set up Formik for the reset password form

//   // const [isShowPassword, setIsShowPassword] = useState(false);

//   const formik = useFormik({
//     initialValues,
//     validate,
//     onSubmit: (values) => {
//       // Call the handler passed as a prop with the form values
//       console.log("values------", values);
//       onResetPasswordSubmitHandler(values);
//     },
//   });

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={PasswordChangeModel}>
//       {/* <form onSubmit={onFormHandleSubmit}> */}

//       <Styled.MainContentWrapper>
//         <h2>Reset Password</h2>
//         <Styled.PasswordFieldWrapper>

//           <ResetPasswordField
//             resetPasswordFields={formik.values}
//             resetPasswordFormikProps={formik.getFieldProps}
//             resetPasswordFormikMeta={formik.getFieldMeta}
//           />
//         </Styled.PasswordFieldWrapper>

//         {/* <button onClick={onRequestClose}>Close</button> */}
//       </Styled.MainContentWrapper>
//       <ModalButtonsBox
//         isLoading={isLoading}
//         onCancelClickHandler={onRequestClose}
//         // onSaveButtonCLickHandler={onResetPasswordSubmitHandler}
//         onSaveButtonCLickHandler={formik.handleSubmit}
//         isSaveButton
//       // isDisableButton={!isValid}
//       />
//       {/* </form> */}

//     </Modal>
//   );
// };

