import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import { Input } from '../Input';
import { CheckboxItem } from 'components/Checkbox';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from './MasterModalWindow.style';
import { boolean } from 'yup';

interface paymentModalProps {
  isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;
    modalInputPaymentName: string;
    onChangePaginationInputValueHandler: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    text?: string;

  modalInputPaymentRefName:string;
  modalCheckboxDefaultPayment:boolean;
  onChangePaymentRefHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeModalCheckboxDefaultPaymentHandler: () => void;
  children?: any;
  // onChangePaymentNameHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const MasterModalPayment: FC<paymentModalProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    isLoading,
    isDisableButton,
    onCloseModalWindowHandler,
    modalInputPaymentName,
    onChangePaginationInputValueHandler,
    modalCheckboxDefaultPayment,
    onChangeModalCheckboxDefaultPaymentHandler,
    modalInputPaymentRefName,
    onChangePaymentRefHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
  } = props;
  // const [click, setClick] = useState(false)
  
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={MasterModalStyles}
    >
      <Styled.ModalMasterContentWrapper>
      <Styled.HeaderBox>
        <Styled.Title>{headerText}</Styled.Title>
      </Styled.HeaderBox>
      <Styled.MainContentWrapper>
        <Input
          onChangeValue={onChangePaginationInputValueHandler}
          value={modalInputPaymentName}
          text="Name"
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
        <Input
          onChangeValue={onChangePaymentRefHandler}
          value={modalInputPaymentRefName}
          text="Reference"
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
          {/* <br></br> */}
        <CheckboxItem isChecked={modalCheckboxDefaultPayment} onChange={onChangeModalCheckboxDefaultPaymentHandler} labelText='Mark this account as default'/>
      </Styled.MainContentWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
      />
      </Styled.ModalMasterContentWrapper>
    </ReactModal>
  );
};
