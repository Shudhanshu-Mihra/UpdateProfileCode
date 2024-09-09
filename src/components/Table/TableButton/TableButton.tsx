import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { TableButtonStyles } from './TableButton.style';

export type TableButtonProps = {
  isSorted?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export const TableButton = (props: TableButtonProps) => {
  const { isSorted, children, onClick } = props;
  return (
    <TableButtonStyles.Button onClick={onClick} isSorted={isSorted}>
      <TableButtonStyles.Content>{children}</TableButtonStyles.Content>
      <TableButtonStyles.Content isSorted={isSorted}>
        <Icon type="tableArrow" />
      </TableButtonStyles.Content>
    </TableButtonStyles.Button>
  );
};
