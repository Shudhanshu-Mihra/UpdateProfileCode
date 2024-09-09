import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import Select, { SingleValue } from 'react-select';

import { Input } from '../../../components/Input';
import { ModalButtonsBox } from '../../../components/ModalButtonsBox';
import { ModalWindowHeader } from '../../../components/ModalWindowHeader';
import { MasterModalWindowStyles as Styled, MasterModalStyles} from './ReportModal.style';
import { IReportModal } from '../types/expenseReport.types';
import { ReactComponent as Close } from 'assets/icons/close.svg';
export const ReportModal: FC<IReportModal> = (props) => {
  const {
    isLoading,
		deleteItemName,
		isModalWindowOpen,
    onModalWindowToggle,
		headerText,
		radioReportFormType,
		inputValueReportFor,
		inputValueReportDate,
    inputValueReportSelectedDate,
		inputValueReportName,
		onChangeReportFormHandler,
		onChangeReportForHandler,
		onChangeReportDateHandler,
		onChangeReportNameHandler,
    
    modalReportCreateButtonHandler,
    modalReportCancelButtonHandler,
		// onSaveButtonCLickHandler,
		// onEnterCreateItemClick,
		onDeleteButtonClickHandler,
		isDeleteModalWindowOpen,
		onCloseDeleteModalWindowHandler,
		// isDisableButton,
		categoryName,
		// dateValue,
		// reportName
  } = props;

  const [isNewReport, setIsNewReport] = useState(true);
  const [selectedReport, setSelectedReport] = useState<SingleValue<IOption> | null>(null);

  const handleReportTypeChange = (isNew: boolean) => {
    setIsNewReport(isNew);
  };

  interface IOption {
    value: string;
    label: string;
  }

  const existingReports = [
    { value: 'report1', label: 'Purchases report for bill' },
    { value: 'report2', label: 'Travel expenses' },
    { value: 'report3', label: 'Office supplies' },
  ];

  const handleSelectChange = (selectedOption: SingleValue<IOption> | null) => {
    setSelectedReport(selectedOption);
  };

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onModalWindowToggle}
      ariaHideApp={false}
      style={MasterModalStyles}
    >
      <Styled.ModelWWrapper>

      <ModalWindowHeader headerTitle={headerText} />
      <Styled.MainContentWrapper>
        <Styled.RadioGroup>
        <Styled.CloseIconWrapper>
          <Close width={18} onClick={onModalWindowToggle} />
          </Styled.CloseIconWrapper>
          <Styled.RadioLabel isChecked={!isNewReport}>
            <Styled.RadioButton
              type="radio"
              checked={!isNewReport}
              onChange={() => handleReportTypeChange(false)}
            />
            Existing Report
          </Styled.RadioLabel>
          <Styled.RadioLabel isChecked={isNewReport}>
            <Styled.RadioButton
              type="radio"
              checked={isNewReport}
              onChange={() => handleReportTypeChange(true)}
            />
            New Report
          </Styled.RadioLabel>
        </Styled.RadioGroup>
        <div style={{marginTop:"20px"}}>
        {isNewReport ? (
              <>
                <Styled.InputWraper>

            <Input
              onChangeValue={onChangeReportForHandler}
              value={inputValueReportFor}
              text="Report For"
              // onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
            />
            <Input
              onChangeValue={onChangeReportDateHandler}
              value={inputValueReportDate}
              text="Report Date"
              // onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
              inputType="date"
              isInputDate={true}
              selectedDate={inputValueReportSelectedDate}
            />
            <Input
              onChangeValue={onChangeReportNameHandler}
              value={inputValueReportName}
              text="Report Name"
              // onKeyDown={onEnterCreateItemClick}
              isRemoveBorder
                  />
                </Styled.InputWraper>
                  
          </>
        ) : (
          <>
            <Styled.Label>Report name</Styled.Label>
            <Select
              options={existingReports}
              onChange={handleSelectChange}
              value={selectedReport}
              placeholder="Select a report"
            />
          </>
        )}
        </div>
      </Styled.MainContentWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onModalWindowToggle}
        onSaveButtonCLickHandler={modalReportCreateButtonHandler}
        isSaveButton
        // isDisableButton={isDisableButton}
        />
      </Styled.ModelWWrapper>
        
    </ReactModal>
  );
};
