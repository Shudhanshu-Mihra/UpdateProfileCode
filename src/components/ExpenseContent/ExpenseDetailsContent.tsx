import React, { FC, useEffect, useState } from 'react';
import { FieldsBox } from './FieldsBox';
import { usePhotoDetailsContentState } from './ExpenseDetailsContent.state';
import { ExpenseDetailsContentStyles as Styled } from './ExpenseDetailsContent.style';
import { ExpenseDetailsTabs } from 'screens/ExpenseDetails/ExpenseDetailsTabs';

export const ExpenseDetailsContent: FC = () => {
  const [activeTab, setActiveTab] = useState<'reportDetails' | 'history'>('reportDetails');

  const {
    inputFields,
    statusValue,
    dateValue,
    isOpen,
    isLoading,
    formattedDate,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
  } = usePhotoDetailsContentState();

  useEffect(() => {
    onGetAllMasterItemsHandler();
  }, []);

  return (
    <>
      <Styled.MainWrapper>
        <Styled.Wrapper>
          <ExpenseDetailsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 'reportDetails' && (
            <FieldsBox
              inputFields={inputFields}
              onDatePickerClickHandler={onDatePickerClickHandler}
              onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
              isOpen={isOpen}
              formattedDate={formattedDate}
              datePickerRef={datePickerRef}
              selectedDate={dateValue ? new Date(dateValue) : null}
              onForbiddenCharacterClick={onForbiddenCharacterClick}
            />
          )}
        </Styled.Wrapper>
      </Styled.MainWrapper>
    </>
  );
};
