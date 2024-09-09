import React from 'react';
import { format } from 'date-fns';
import {MasterModalPayment} from 'components/MasterModalPayment/MasterModalPayment';
import { Icon } from 'components/Icons/Icons';
import { TableMasterItemStyles } from './TableIMasterItem.style';

interface  TableMasterItemProps {
  userRole: TRoles;
  categoryName: string;
  // purchase:string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  id:string;
  onDeleteIconHandler: () => Promise<void>;
  onEditIconHandler: () => Promise<void>;
}

export const TableMasterItem: React.FC<TableMasterItemProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    // purchase,
    createdDate,
    dateFormat,
    userRole,
    id,
    onDeleteIconHandler,
    onEditIconHandler,
  } = props;

  const isActionDisabled = userRole === "user";
  return (
    <TableMasterItemStyles.Item>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
        CU201
        {/* {id} */} 
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
          {categoryName}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {'-----'}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      {/* <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {purchase}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column> */}
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
