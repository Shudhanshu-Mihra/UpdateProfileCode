import { FC } from 'react';
import { CSVLink } from 'react-csv';

import { EmailModalWindow } from 'components/EmailModalWindow';
import { SuccessPopup } from 'components/SuccessPopup';

import { ActionsMenuStyles as Styled } from './ActionsMenu.styles';

interface IActionMenuContentProps extends IEmailModalWindowProps {
  csvLink: React.RefObject<
    CSVLink &
      HTMLAnchorElement & {
        link: HTMLAnchorElement;
      }
  >;
  csvData: string;
  excelRef: React.RefObject<HTMLAnchorElement>;
  excelUrl: string;
  isSentSuccessPopup: boolean;
  closeSuccesPopupHandler: () => void;
}

export const ActionsMenu: FC<IActionMenuContentProps> = (props) => {
  const {
    checkedIds,
    formikMeta,
    formikProps,
    isModalWindowOpen,
    isValid,
    isLoading,
    onCloseModalWindowHandler,
    onFormHandleSubmit,
    closeSuccesPopupHandler,
    csvLink,
    csvData,
    excelRef,
    excelUrl,
    isSentSuccessPopup,
  } = props;
  return (
    <>
      <Styled.CSVLinkWrapper>
        <CSVLink
          data={csvData}
          filename="receipt.csv"
          ref={csvLink}
          target="_blank"
        />
      </Styled.CSVLinkWrapper>
      <EmailModalWindow
        isModalWindowOpen={isModalWindowOpen}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        formikMeta={formikMeta}
        formikProps={formikProps}
        onFormHandleSubmit={onFormHandleSubmit}
        checkedIds={checkedIds}
        isValid={isValid}
        isLoading={isLoading}
      />
      <Styled.ExcelLink href={excelUrl} ref={excelRef} />
      <SuccessPopup
        titleText="Email sent successfully"
        closePopupFc={closeSuccesPopupHandler}
        isShowPopup={isSentSuccessPopup}
      />
    </>
  );
};
