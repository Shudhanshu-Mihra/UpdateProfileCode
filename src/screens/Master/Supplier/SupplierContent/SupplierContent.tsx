import { FC } from "react";

import { HeaderPanelMaster } from "components/HeaderPanelMaster";
import { LoaderComponent } from "components/Loader";
import { PaginationPanel } from "components/PaginationPanel";
import { TableSupplier } from "components/Table/TableSupplier";

import { ITabContentProps } from "../../master.types";
import { SupplierContentStyles as Styled } from "./SupplierContent.style";

export const SupplierContent: FC<ITabContentProps> = (props) => {
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
        buttonText="Add Supplier"
        userRole={userRole}
      />
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableSupplier
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
              itemsPerPage={itemsPerPage}
              onChangePaginationInputValue={onChangePaginationInputValue}
              inputPaginationValue={inputPaginationValue}
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
