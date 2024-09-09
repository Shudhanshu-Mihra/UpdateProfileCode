import React, { memo } from "react";

import { TableMasterProps } from "screens/Master/master.types";
import { TableButton } from "../TableButton/TableButton";
import { ItemsCategory } from './itemsCategory/index';

import { TableCategoryStyle as Styled } from "./tableCategory.style";

export const TableCategory: React.FC<TableMasterProps> = memo((props) => {
  const {
    categories,
    dateFormat,
    tabName,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    searchValue,
    searchedItems,
    userRole,
  } = props;

  return (
    <>
      <Styled.Head>
      <Styled.Column width="200">
          <TableButton>ID</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Name</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Created By</TableButton>
        </Styled.Column>
        <Styled.Actions>Actions</Styled.Actions>
        {/* <Styled.Actions>Action</Styled.Actions> */}

      </Styled.Head>
      {searchedItems?.length && searchValue ? (
        searchedItems?.map((category, index) => (
          <ItemsCategory
          userRole={userRole}
          categoryId={category.id}
          categoryName={category.name}
          createdDate={category.creator.created}
          categoryCreator={category.creator.name}
          dateFormat={dateFormat}
          onDeleteIconHandler={onDeleteIconClickHandler}
          onEditIconHandler={onEditIconClickHandler}
          mapkey={index}
          />
        ))
      ) : searchValue && !searchedItems?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        categories?.map((category, index) => (
          <ItemsCategory
          userRole={userRole}
          categoryId={category.id}
          categoryName={category.name}
          createdDate={category.created}
          categoryCreator={category.creator.name}
          dateFormat={dateFormat}
          onDeleteIconHandler={onDeleteIconClickHandler}
          onEditIconHandler={onEditIconClickHandler}
          mapkey={index}
          />
        ))
      )}
    </>
  );  
});
