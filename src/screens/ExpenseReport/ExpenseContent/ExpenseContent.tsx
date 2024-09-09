import { FC } from 'react';

import { ROUTES } from '../../../constants/routes';
import { useInboxState } from 'screens/Inbox/Inbox.state';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';

import { expenseReportContentStyle as Styled } from './ExpenseContent.style';
import { HeaderPanelMaster } from 'components/HeaderPanelMaster';

import { TableReportExpense } from 'components/Table/TableReportExp/TableReportExpense';

import { ReUseActionButton } from '../../../ReUseComponents/reUseActionButton/ReUseActionButton';
import { ReUseSearch } from 'ReUseComponents/reUseSearch/ReUseSearch';
import { Input } from 'components/Input';
import { Icon } from 'components/Icons'; 
import { ReUseActionMenu } from 'ReUseComponents/reUseActionMenu/ReUseActionMenu';

export const ExpenseContent: FC<any> = (props) => {
  const {
    userRole,
    onBlurHandler,
    onFocusSearchHandler,
    onChangeSearchValueHandler,
    onAddClickButtonHandler,
    searchValue,
    isContentLoading,
    dateFormat,
    isAllChecked,
    onCheckedAllItemsHandler,
    onCheckedItemHandler,
    currentPage,
    inputPaginationValue,
    onBackwardClick,
    onChangePaginationInputValue,
    onChangeItemsPerPage,
    onForwardClick,
    onEnterGoToClick,
    onGoToClick,
    pages,
    itemsPerPage,
    onChangePage,
    isFetchingReports,
    datePickerRef,
    sortedReportList,
    sortField,
    sortOrder,
    requestSort,
    isGuard,
  } = props;

  return (
    <Styled.ReportListContentWrapper>
      <Styled.ActionPanelPlaceHolder>
      <ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
        {/* <ReUseActionButton displayText="Add Expense Report" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.receiptUploadFile} locationState={{ action: "receipt" }} customWidth="50%" displayIconType="addPlus" /> */}
        {/* <ReUseActionMenu  margin="0 0 0 auto" isDisabled={false} actionListArray={actionListArray}/> */}
        {(isGuard && userRole !== 'user') ? (
        <ReUseActionButton displayText="Add Expense Report" buttonType="actionButton" widthType="primary" themedButton='primary' onClick={onAddClickButtonHandler} displayIconType="addPlus"/>
        ) : null}
      </Styled.ActionPanelPlaceHolder>
            <Styled.TableWrapper>
        {isContentLoading && (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        )}
        <TableReportExpense
          isAllChecked={isAllChecked}
          onCheckedItemHandler={onCheckedItemHandler}
          onCheckedAllItemsHandler={onCheckedAllItemsHandler}
          sortedReportList={sortedReportList}
          dateFormat={dateFormat}
          sortField={sortField}
          sortOrder={sortOrder}
          requestSort={requestSort}
        />
        {sortedReportList.length ? (
          <PaginationPanel
            pages={pages}
            currentPage={currentPage}
            onChangeItemsPerPage={onChangeItemsPerPage}
            onChangePaginationInputValue={onChangePaginationInputValue}
            inputPaginationValue={inputPaginationValue}
            itemsPerPage={itemsPerPage}
            onChangePage={onChangePage}
            onEnterGoToClick={onEnterGoToClick}
            onGoToClick={onGoToClick}
            onForwardClick={onForwardClick}
            onBackwardClick={onBackwardClick}
          />
        ) : null}
      </Styled.TableWrapper>
    </Styled.ReportListContentWrapper>
  );
};
