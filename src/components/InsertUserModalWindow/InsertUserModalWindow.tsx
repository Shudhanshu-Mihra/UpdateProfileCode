import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import ReactModal from 'react-modal';
import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { PermissionProps } from '../InsertUserModalWindow/InsertUserModalWindow.type';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { InsertUserModalWindowStyles as Styled } from './InsertUserModalWindow.style';
import { UserModalWindowStyles } from './InsertUserModalWindow.style';
import { ModalInputs } from './ModalInputs/ModalInputs';
import { TInputFields } from './types/insertUser.types';
import { useState } from 'react';
import { PermissionModule } from '../Permission/permission';
import { Icon } from '../Icons/Icons';
import { ReactComponent as Close } from 'assets/icons/close.svg';
// import {permissions} from '../Permission/permission.Const';
interface InsertUserModalWindowProps
  extends
  PermissionProps,
  Omit<
    IMasterModalWindowProps,
    'onChangePaginationInputValueHandler' | 'inputValue' | 'onSaveButtonCLickHandler'
  > {
  onSaveButtonCLickHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  modalFields: TInputFields;
  isEdit: boolean;
  isUserList: boolean;
  isInvitation: boolean;
  PermissionsForAPIHandler: (selectedPermission: any[]) => void;
  role: string | null;
}

export const InsertUserModalWindow: FC<InsertUserModalWindowProps> = (
  props
) => {
  const {
    headerText,
    isUserList,
    isLoading,
    isModalWindowOpen,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    isDisableButton,
    formikMeta,
    formikProps,
    modalFields,
    isEdit,
    isInvitation,

    isPAllChecked,
    permissionState,
    setPAllChecked,
    PermissionsForAPIHandler,
    role,

  } = props;

  const modalStyles =
    (isEdit && isInvitation && isUserList) || modalFields.length === 3
      ? {
        content: {
          ...UserModalWindowStyles.content, maxHeight: '450px'
        },
        overlay: UserModalWindowStyles.overlay,
      }
      : isEdit && !isInvitation && isUserList
        ? {
          content: { ...UserModalWindowStyles.content, maxHeight: '250px' },
          overlay: UserModalWindowStyles.overlay,
        }
        : modalFields.length === 2
          ? {
            content: { ...UserModalWindowStyles.content, maxHeight: '370px' },
            overlay: UserModalWindowStyles.overlay,
          }
          : UserModalWindowStyles;

  const fields =
    isEdit && isInvitation && isUserList
      ? modalFields.slice(0, 3)
      : isEdit && !isInvitation && isUserList
        ? modalFields.slice(2, 3)
        : modalFields;

  // const handleCheckboxChange = (permission: any) => {
  //   console.log(permission);

  // };

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };


  const Role = role ? role[0].toUpperCase() + role.slice(1) : '';
  return (
    <>
      <ReactModal
        isOpen={isModalWindowOpen}
        onRequestClose={onCloseModalWindowHandler}
        ariaHideApp={true}
        style={modalStyles}
      >
        <Styled.InsertUserWrapper>

          <ModalWindowHeader headerTitle={headerText} />
          <Styled.Content>
            <Styled.Form onSubmit={onSaveButtonCLickHandler}>
            <Styled.CloseIconWrapper>
          <Close width={18} onClick={onCloseModalWindowHandler} />
          </Styled.CloseIconWrapper>
              <Styled.InputsWrapper>
                {fields.map((input) => (
                  <ModalInputs
                    selectValue={input.value}
                    label={input.label}
                    CustomSelectLabel={input.label}
                    key={input.name}
                    inputName={input.name}
                    isMulti={input.isMulti}
                    inputType={input.type}
                    formikMeta={formikMeta}
                    formikProps={formikProps}
                    onEnterCreateItemClick={onEnterCreateItemClick}
                    options={input.options}
                    onChangeSelectHandler={input.onChangeSelect}
                  />
                ))}
              </Styled.InputsWrapper>
            
              <Styled.Hyperlink onClick={openSecondModal}>
                Edit Permission <Styled.HyperLinkInnerText>for this user .</Styled.HyperLinkInnerText>
              </Styled.Hyperlink>

              
            </Styled.Form>
            
          </Styled.Content>
          <ModalButtonsBox
                isLoading={isLoading}
                onCancelClickHandler={onCloseModalWindowHandler}
                onSaveButtonCLickHandler={onSaveButtonCLickHandler}
                isSaveButton
                isNoPadding
                isDisableButton={isDisableButton}
              />
        </Styled.InsertUserWrapper>

      </ReactModal>
      {/* Second Modal */}
      <ReactModal
        isOpen={isSecondModalOpen}
        onRequestClose={closeSecondModal}
        ariaHideApp={true}
        style={modalStyles}
      >
        <Styled.PContent>
          <Styled.SecondModalContent>
            <Styled.SecondModalHeadingWrapper>
              <Styled.SecondModalButton onClick={closeSecondModal}>
                <Icon type="arrowLeft" fill='black' width={'23px'} height={'15px'} />
                {/* Back */}
              </Styled.SecondModalButton>

              <Styled.SecondModalHeading>
                Set {Role} Permissions
              </Styled.SecondModalHeading>
            </Styled.SecondModalHeadingWrapper>
            <PermissionModule PermissionsForAPIHandler={PermissionsForAPIHandler} newUserRole={role} closeSecondModal={closeSecondModal} />
          </Styled.SecondModalContent>
        </Styled.PContent>

      </ReactModal>
    </>
  );
};
