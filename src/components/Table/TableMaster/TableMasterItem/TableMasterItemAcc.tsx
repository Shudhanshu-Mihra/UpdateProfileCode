import React from "react";
import { format } from "date-fns";

import { Icon } from "components/Icons/Icons";

import { TableMasterItemStyles } from "./TableIMasterItem.style";

interface TableMasterItemAccProps {
  userRole: TRoles;
  categoryName: string;
  // purchase:string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: () => Promise<void>;
  onEditIconHandler: () => Promise<void>;
}

export const TableMasterItemAcc: React.FC<TableMasterItemAccProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    // purchase,
    createdDate,
    dateFormat,
    userRole,
    onDeleteIconHandler,
    onEditIconHandler,
  } = props;

  const isActionDisabled = userRole === "user";
  return (
    <TableMasterItemStyles.Item>
      <TableMasterItemStyles.Column width="200">
        CU201
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {categoryName}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          Purchase/Sale invoice
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>
        {format(new Date(createdDate), dateFormat)}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        {categoryCreator}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Action>
        <TableMasterItemStyles.ActionButton
          isDisabled={isActionDisabled}
          onClick={onEditIconHandler}
        >
          <Icon type="edit" />
        </TableMasterItemStyles.ActionButton>
        <TableMasterItemStyles.ActionButton
          isDisabled={isActionDisabled}
          onClick={onDeleteIconHandler}
        >
          <Icon type="remove" />
        </TableMasterItemStyles.ActionButton>
      </TableMasterItemStyles.Action>
    </TableMasterItemStyles.Item>
  );
};
