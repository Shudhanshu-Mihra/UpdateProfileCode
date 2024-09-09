import { FC } from "react";

import { HeaderPanelMaster } from "components/HeaderPanelMaster";
import { LoaderComponent } from "components/Loader";
import { PaginationPanel } from "components/PaginationPanel";
import { TableCustomers } from "components/Table/TableCustomers/TableCustomers";

import { ITabContentProps } from "../../master.types";
import { CustomersContentStyles as Styled } from "./CustomersContent.style";

export const CustomersContent: FC<ITabContentProps> = (props) => {
  const {
    categories,
    dateFormat,
    onAddClickButtonHandler,
    onChangeSearchValueHandler,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    searchValue,
    tabName,
    onBlurHandler,
    onFocusSearchHandler,
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
    isContentLoading,
    isFetchingData,
    isFocus,
    searchedItems,
    userRole,
  } = props;

  return (
    <Styled.ContentWrapper>
      <HeaderPanelMaster
        isGuard
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        buttonText="Add Customer"
        userRole={userRole}
      />
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableCustomers
            userRole={userRole}
            tabName={tabName}
            searchValue={searchValue}
            searchedItems={searchedItems}
            categories={categories}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
          {(searchValue && searchedItems?.length) ||
          (!searchValue && categories.length) ? (
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
      ) : null}
    </Styled.ContentWrapper>
  );
};
