import { FC } from 'react';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { LoaderComponent } from 'components/Loader';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableCategory } from 'components/Table/TableCategory/TableCategory';

import { CategoryContentStyles as Styled } from './CategoryContent.style';
import { ITabCategoreyProps } from '../../master.types';

export const CategoryContent: FC<ITabCategoreyProps> = (props) => {
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
    onGoToClick,
    onEnterGoToClick,
    pages,
    itemsPerPage,
    onChangePage,
    isContentLoading,
    searchedItems,
    userRole,
  } = props;

  return (
    <Styled.ContentWrapper>
      {/* <HeaderPanelMaster
        isGuard
        userRole={userRole}
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        buttonText="Create Category"
      /> */}

      {isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.TableWrapper>
          <TableCategory
            tabName={tabName}
            categories={categories}
            searchedItems={searchedItems}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            searchValue={searchValue}
            userRole={userRole}
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
      )}
    </Styled.ContentWrapper>
  );
};
