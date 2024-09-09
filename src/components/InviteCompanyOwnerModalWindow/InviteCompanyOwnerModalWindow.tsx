import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';
import ReactModal from 'react-modal';

import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { InviteCompanyOwnerModalWindowStyles as Styled } from './InviteCompanyOwnerModalWindow.style';
import { CompanyOwnerModalWindowStyles } from './InviteCompanyOwnerModalWindow.style';

import { Input } from '../Input';
import { CustomSelect } from '../CustomSelect';
import { CheckboxItem } from '../Checkbox';

import { USER_ROLES } from 'constants/strings';

interface InsertUserModalWindowProps
  extends Omit<
    IMasterModalWindowProps,
    'onChangePaginationInputValueHandler' | 'inputValue' | 'onSaveButtonCLickHandler'
  > {
  onSaveButtonCLickHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  isEdit: boolean;
  onChangeCheckBoxHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onChangeRoleValueHandler: (
    newValue: IOption | any,
    actionMeta: unknown
  ) => void;
  isChecked: boolean;
  selectValue: IOption | null;
  isCheckboxField: boolean;
}

export const InviteCompanyOwnerModalWindow: FC<InsertUserModalWindowProps> = (
  props
) => {
  const {
    headerText,
    isLoading,
    isModalWindowOpen,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    isDisableButton,
    formikMeta,
    formikProps,
    onChangeCheckBoxHandler,
    onChangeRoleValueHandler,
    selectValue,
    isChecked,
    isCheckboxField,
  } = props;

  const { touched, error } = formikMeta('email');
  const { value, onBlur, onChange } = formikProps('email');
  const modalStyles = {
    content: {
      ...CompanyOwnerModalWindowStyles.content,
      maxHeight: isCheckboxField ? '375px' : '335px',
    },
    overlay: CompanyOwnerModalWindowStyles.overlay,
  };
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={modalStyles}
    >
      <ModalWindowHeader headerTitle={headerText} />
      <Styled.Content>
        <Styled.Form onSubmit={onSaveButtonCLickHandler}>
          <Styled.InputsWrapper>
            <Input
              text="Email"
              value={value}
              errorText={error}
              inputName="email"
              onBlur={onBlur}
              onChangeValue={onChange}
              touched={touched}
              onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
            />
            <Styled.Label>Role</Styled.Label>
            <CustomSelect
              options={USER_ROLES.slice(0, 3)}
              onChangeValueHandler={onChangeRoleValueHandler}
              value={selectValue}
              isRemoveBorder
              isFullWidth
            />
            {isCheckboxField && (
              <Styled.CheckBoxWrapper>
                <CheckboxItem
                  isChecked={isChecked}
                  labelText="Resend invitation to a new email"
                  onChange={onChangeCheckBoxHandler}
                />
              </Styled.CheckBoxWrapper>
            )}
          </Styled.InputsWrapper>
          <ModalButtonsBox
            isLoading={isLoading}
            onCancelClickHandler={onCloseModalWindowHandler}
            onSaveButtonCLickHandler={onSaveButtonCLickHandler}
            isSaveButton
            isNoPadding
            isDisableButton={isDisableButton}
          />
        </Styled.Form>
      </Styled.Content>
    </ReactModal>
  );
};
