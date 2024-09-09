import React from "react";
import { format } from "date-fns";

import { Icon } from "components/Icons/Icons";

import { ItemsCategoryStyle as Styled } from "./ItemsCategory.style";

interface ICategoryTableItemsProps {
  userRole: TRoles;
  categoryName: string;
  categoryId: string;
  createdDate?: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: (itemID: string, index: number, clickItemName: string) => Promise<void>;
  onEditIconHandler: (itemID: string) => Promise<void>;
  mapkey: number;
}

export const ItemsCategory: React.FC<ICategoryTableItemsProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    categoryId,
    createdDate,
    dateFormat,
    userRole,
    onDeleteIconHandler,
    onEditIconHandler,
    mapkey
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
      <Styled.Column>
        {createdDate && dateFormat ? format(new Date(createdDate), dateFormat) : '-----'}
      </Styled.Column>
      <Styled.Column width="200">
        {categoryCreator}
      </Styled.Column>
      <Styled.Action>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onEditIconHandler(categoryId)}
        >
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onDeleteIconHandler(categoryId, mapkey, categoryName)}
        >
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
    </Styled.Item>
  );
};
