import { FC } from 'react';
import ReactModal from 'react-modal';

import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { EmailModalStyles, Styles } from './EmailModalWindow.style';
import { EmailModalForm } from '../EmailModalForm';

export const EmailModalWindow: FC<IEmailModalWindowProps> = (props) => {
  const {
    isModalWindowOpen,
    onCloseModalWindowHandler,
    checkedIds,
    isValid,
    isLoading,
    formikProps,
    formikMeta,
    onFormHandleSubmit,
  } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={EmailModalStyles}
    >
      <ModalWindowHeader
        headerTitle="Email"
      />
      <Styles.Form onSubmit={onFormHandleSubmit}>
        <EmailModalForm
          checkedIds={checkedIds}
          formikMeta={formikMeta}
          formikProps={formikProps}
        />
        <ModalButtonsBox
          isLoading={isLoading}
          onCancelClickHandler={onCloseModalWindowHandler}
          isDisableButton={!isValid}
          type="submit"
        />
      </Styles.Form>
    </ReactModal>
  );
};
