import { FC } from 'react';

// import { TableMasterItem } from 'components/Table/TableMaster/TableMasterItem';
import { TableMasterItemStyles } from './masterItem.style';

import { format } from 'date-fns';
import { Icon } from 'components/Icons/Icons';

import { useMasterItemState } from './MasterItem.state';
import { idText } from 'typescript';

interface MasterItemProps {
  userRole: TRoles;
  categoryId: string;
  categoryName: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconClickHandler: (itemId: string, index?: number, clickItemName?: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  key: number;
}

export const MasterItem: FC<MasterItemProps> = (props) => {
  const {
    categoryCreator,
    categoryId,
    categoryName,
    createdDate,
    dateFormat,
    userRole,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    key,
  } = props;

  // const { onDeleteIconHandler, onEditIconHandler } = useMasterItemState({
  //   categoryId,
  //   onDeleteIconClickHandler,
  //   onEditIconClickHandler,
  // });
  return (
    // <TableMasterItem
    //   userRole={userRole}
    //   categoryName={categoryName}
    //   createdDate={createdDate}
    //   categoryCreator={categoryCreator}
    //   dateFormat={dateFormat}
    //   onDeleteIconHandler={onDeleteIconClickHandler}
    //   onEditIconHandler={onEditIconClickHandler}
    //   id={categoryId}
    // />

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
          isDisabled={false}
          onClick={() => onEditIconClickHandler(categoryId)}
        >
          <Icon type="edit" />
        </TableMasterItemStyles.ActionButton>
        <TableMasterItemStyles.ActionButton
          isDisabled={false}
          onClick={() => onDeleteIconClickHandler(categoryId, key, categoryName)}
        >
          <Icon type="remove" />
        </TableMasterItemStyles.ActionButton>
      </TableMasterItemStyles.Action>
    </TableMasterItemStyles.Item>
  );
};
