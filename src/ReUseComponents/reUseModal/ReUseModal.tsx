import { FC } from 'react';
import ReactModal from 'react-modal';

import { Input } from '../../components/Input';
import { ModalButtonsBox } from '../../components/ModalButtonsBox';
// import { ModalWindowHeader } from '../ModalWindowHeader';
import {
    ReUseModalContentStyles as Styled,
  ReUseModalStyles,
} from './reUseModal.style';

interface IReUseModal {
    children?: any;
    isDisableButton?: boolean;
    isLoading: boolean;
    onCloseModalWindowHandler: () => void;
    onChangePaginationInputValueHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSaveButtonCLickHandler: () => Promise<void>;
    onEnterCreateItemClick: (event: React.KeyboardEvent) => void;
    isModalWindowOpen: boolean;
    headerText: string;
    inputValue: string;
    text?: string;
}

export const ReUseModal: FC<IReUseModal> = (props) => {
    const {
        isModalWindowOpen,
        headerText,
        inputValue,
        isLoading,
        isDisableButton,
        onCloseModalWindowHandler,
        onChangePaginationInputValueHandler,
        onSaveButtonCLickHandler,
        onEnterCreateItemClick,
        text,
  } = props;

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={ReUseModalStyles}
    >
      <Styled.ModalMasterContentWrapper>
      <Styled.HeaderBox>
        <Styled.Title>{headerText}</Styled.Title>
      </Styled.HeaderBox>
      <Styled.MainContentWrapper>
        <Input
          onChangeValue={onChangePaginationInputValueHandler}
          value={inputValue}
          text={text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
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
