import { FC } from 'react';
import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableMaster } from 'components/Table/TableMaster';

import { ITabContentProps } from '../../master.types';
import { TypesContentStyles as Styled } from './TypesContent.style';


export const TypesContent: FC<ITabContentProps> = (props) => {
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
    itemsPerPage,
    onForwardClick,
    onEnterGoToClick,
    onGoToClick,
    pages,
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
        userRole={userRole}
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        buttonText="Add Payment method "
      />
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : categories?.length && !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableMaster
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
