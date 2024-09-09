import React, { memo } from "react";

import { TableSupplierAccountProps } from "screens/Master/master.types";
import { TableButton } from "../TableButton/TableButton";
import { ItemSupplierAccount } from "./itemsSupplierAccount";

import { TableSupplierAccountStyles as Styled } from "./TableSupplierAccount.style";

export const TableSupplierAccount: React.FC<TableSupplierAccountProps> = memo((props) => {
  const {
    supplierAccountList,
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
          <TableButton>Name</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Code</TableButton>
        </Styled.Column>
        <Styled.Column width="200">
          <TableButton>Purchase-Receipts</TableButton>
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
        searchedItems?.map((supplierAcc, index) => (
          <ItemSupplierAccount
          userRole={userRole}
          supaccID={supplierAcc.id}
          categoryName={supplierAcc.name}
          supplierAccountCode={supplierAcc.code}
          createdDate={supplierAcc.created}
          categoryCreator={supplierAcc.creator.name}
          dateFormat={dateFormat}
          onDeleteIconHandler={onDeleteIconClickHandler}
          onEditIconHandler={onEditIconClickHandler}
          key={index}
          />
        ))
      ) : searchValue && !searchedItems?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        supplierAccountList?.map((supplierAcc, index) => (
          <ItemSupplierAccount
          userRole={userRole}
          supaccID={supplierAcc.id}
          categoryName={supplierAcc.name}
          createdDate={supplierAcc.created}
          categoryCreator={supplierAcc.creator.name}
          supplierAccountCode = {supplierAcc.code}
          dateFormat={dateFormat}
          onDeleteIconHandler={onDeleteIconClickHandler}
          onEditIconHandler={onEditIconClickHandler}
          key={index}
          />
        ))
      )}
    </>
  );  
});
