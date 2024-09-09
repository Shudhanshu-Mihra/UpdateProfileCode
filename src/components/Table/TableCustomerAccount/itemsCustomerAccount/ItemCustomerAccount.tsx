import React from "react";
import { format } from "date-fns";

import { Icon } from "components/Icons/Icons";

import { ItemCustomerAccountStyle as Styled } from "./itemCustomerAccount.style";

interface IItemCustomerAccountProps {
  userRole: TRoles;
  categoryName: string;
  supaccID: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: (itemID: string, index: number) => Promise<void>;
  onEditIconHandler: (itemID: string) => Promise<void>;
  key: number;
}

export const ItemCustomerAccount: React.FC<IItemCustomerAccountProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    supaccID,
    createdDate,
    dateFormat,
    userRole,
    onDeleteIconHandler,
    onEditIconHandler,
    key,
  } = props;

  const isActionDisabled = userRole === "user";
  return (
    <Styled.Item>
      <Styled.Column width="150">
        CU201
      </Styled.Column>
      <Styled.Column width="200">
        <Styled.NameWrapper>
          {categoryName}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column width="200">
        <Styled.NameWrapper>
          {'----'}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column width="200">
        <Styled.NameWrapper>
          {'0'}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column>
        {format(new Date(createdDate), dateFormat)}
      </Styled.Column>
      <Styled.Column width="200">
        {categoryCreator}
      </Styled.Column>
      <Styled.Action>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onEditIconHandler(supaccID)}
        >
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onDeleteIconHandler(supaccID, key)}
        >
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
    </Styled.Item>
  );
};
