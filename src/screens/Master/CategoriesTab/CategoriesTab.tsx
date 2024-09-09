import { FC, useEffect } from "react";

import { EmptyData } from "components/EmptyData";
import { LoaderComponent } from "components/Loader";
// import { MasterModalWindowsBox } from "components/MasterModalWindowsBox";

import { MasterModalCategory } from 'components/MasterModalWindow/MasterModalCategory';
import { DeleteModalWindow } from 'components/DeleteModalWindow';

import { useCategoriesTabState } from "./CategoriesTab.state";
import { CategoriesTabStyles as Styled } from "./CategoriesTab.style";
import { CategoryContent } from "./CategoryContent";

import { PaginationPanel } from 'components/PaginationPanel';
import { TableCategory } from 'components/Table/TableCategory/TableCategory';
import { ITabCategoreyProps } from '../master.types';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from "constants/strings";
import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";
import { ReUseActionButton } from "ReUseComponents/reUseActionButton/ReUseActionButton";
import { ROUTES } from "constants/routes";

export const CategoriesTab: FC = () => {
	const {
		isLoading,
		isModalWindowOpen,
		modalInputValue,
		onChangeCategoryNameValueHandler,
		onChangeSearchValueHandler,
		onCreateCategoryHandler,
		onEnterCreateCategoryClick,
		onGetAllCategoriesHandler,
		onModalWindowToggle,
		searchValue,
		categoriesList,
		count,
		date_format,
		isDeleteModalWindowOpen,
		onDeleteModalWindowToggle,
		onDeleteItemClickHandler,
		onDeleteButtonClickHandler,
		selectedCategoryId,
		isEdit,
		onEditItemClickHandler,
		isDisableButton,
		onSaveButtonClickHandler,
		onModalWindowCancelClickButtonHandler,
		onChangeItemsPerPage,
		onChangePaginationInputValue,
		onChangePage,
		onEnterGoToClick,
		onGoToClick,
		onForwardClick,
		onBackwardClick,
		onChangePagesAmount,
		onBlurHandler,
		onFocusSearchHandler,
		currentPage,
		inputPaginationValue,
		itemsPerPage,
		pages,
		isFetchingData,
		isEmptyData,
		debouncedValue,
		isFocus,
		isContentLoading,
		isSearching,
		searchedItems,
		active_account,
		userRole,

		MasterCurrentActionItem,
	} = useCategoriesTabState();

	useEffect(() => {
		!searchValue &&
			onGetAllCategoriesHandler({
				take: +itemsPerPage.value,
				skip: currentPage * +itemsPerPage.value,
			});
	}, [searchValue, active_account]);

	useEffect(() => {
		debouncedValue &&
			onGetAllCategoriesHandler(
				{
					search: debouncedValue,
				},
				isSearching
			);
	}, [debouncedValue]);

	useEffect(() => {
		if (!count) return;
		onChangePagesAmount(+itemsPerPage.value, count);
	}, [count, itemsPerPage]);

	return (
		<>
			{isFetchingData ? (
				<Styled.LoaderWrapper>
					<LoaderComponent theme="preview" />
				</Styled.LoaderWrapper>
			) : !isFetchingData && isEmptyData && !categoriesList?.length ? (
				<EmptyData isUploadFile={false} buttonText={Strings.categories.buttonText} firstSubtitle={Strings.categories.firstSubtitle} secondSubtitle={Strings.categories.secondSubtitle} title={Strings.categories.title} onClick={onModalWindowToggle} userRole={userRole}>
					<ReUseActionButton widthType="primary" buttonType="actionButton" displayText="Add Category" displayIconType="addPlus" onClick={onModalWindowToggle} />
				</EmptyData>
			) : (
				<Styled.ContentWrapper>
					<Styled.ActionPanelPlaceHolder>
						<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
				{/* isGuard  && */ userRole !== "user" ? <ReUseActionButton displayText="Add category" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" margin="0 0 0 auto" /> : null}
					</Styled.ActionPanelPlaceHolder>

      {isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <Styled.TableWrapper>
        <TableCategory
            tabName="Name"
            categories={categoriesList}
            searchedItems={searchedItems}
            dateFormat={date_format}
            onDeleteIconClickHandler={onDeleteItemClickHandler}
            onEditIconClickHandler={onEditItemClickHandler}
            searchValue={searchValue}
            userRole={userRole}
        />
          {(searchValue && searchedItems?.length) || (!searchValue && categoriesList.length) ? (
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
			)}

    <MasterModalCategory
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? "Edit Category" : "Add Category"}
        onChangePaginationInputValueHandler={onChangeCategoryNameValueHandler}
        text={"Name"}
        // onChangeInputValueHandler={onChangeInputValueHandler}
        onSaveButtonCLickHandler={isEdit ? onSaveButtonClickHandler : onCreateCategoryHandler}
        onEnterCreateItemClick={onEnterCreateCategoryClick}
        inputValue={modalInputValue}
        isLoading={isLoading}
    />
	<DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={MasterCurrentActionItem?.[2] || ''}
        isLoading={isLoading}
        categoryName="category"
	/>
		</>
	);
};
