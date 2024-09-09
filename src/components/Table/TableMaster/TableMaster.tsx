import React, { memo } from "react";

import { MasterItem } from "screens/Master/MasterItem";
import { TableMasterProps } from "screens/Master/master.types";

import { TableButton } from "../TableButton/TableButton";
import { TableMasterStyles as Styled } from "./TableMaster.style";

export const TableMaster: React.FC<TableMasterProps> = memo((props) => {
  const {
    categories,
    dateFormat,
    tabName,
    // tabPurchase,
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
          <TableButton>{tabName}</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Reference</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Created By</TableButton>
        </Styled.Column>
        {/* <Styled.Actions>Actions</Styled.Actions> */}
        <Styled.Actions>Action</Styled.Actions>

      </Styled.Head>
      {searchedItems?.length && searchValue ? (
        searchedItems?.map((category, index) => (
          <MasterItem
          userRole={userRole}
          categoryId={category.id}
          categoryName={category.name}
          createdDate={category.created}
          categoryCreator={category.creator.name}
          dateFormat={dateFormat}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
          key={index}
          />
        ))
      ) : searchValue && !searchedItems?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        categories?.map((category, index) => (
          <MasterItem
            key={index}
            userRole={userRole}
            categoryId={category.id}
            categoryName={category.name}
            createdDate={category.created}
            categoryCreator={category.creator.name}
            dateFormat={dateFormat}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
          />
        ))
      )}
    </>
  );  
});
