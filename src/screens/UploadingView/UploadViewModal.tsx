import { FC } from 'react';
import ReactModal from 'react-modal';

// import { ModalWindowHeader } from '../ModalWindowHeader';
import {
  UploadViewContentStyles as Styled,
  UploadViewModalStyles,
} from './uploadViewModal.style';

interface IUploadViewModal {
  children?: any;
  isModalWindowOpen: boolean;
  onCloseModalWindowHandler: () => void;
}

export const UploadViewModal: FC<IUploadViewModal> = (props) => {
  const {
    isModalWindowOpen,
    onCloseModalWindowHandler,
    // headerText,
    // inputValue,
    // isLoading,
    // isDisableButton,
    // onChangePaginationInputValueHandler,
    // onSaveButtonCLickHandler,
    // onEnterCreateItemClick,
    // text,
    children,
  } = props;

  // console.log(isModalWindowOpen);
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={UploadViewModalStyles}
    >
      <Styled.ModalMasterContentWrapper>
        {children}
      {/* <Styled.HeaderBox>
        <Styled.Title>JIGAR</Styled.Title>
      </Styled.HeaderBox>
      <Styled.MainContentWrapper>
      </Styled.MainContentWrapper> */}
      </Styled.ModalMasterContentWrapper>
    </ReactModal>
  );
};
