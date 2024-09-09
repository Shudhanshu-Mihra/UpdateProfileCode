import React from 'react';

import { ReceiptsItem } from '../ReceiptsItem/ReceiptsItem';
import { IReceiptsItemsListProps } from '../types/receiptItem.types';

export const ReceiptsItemsList: React.FC<IReceiptsItemsListProps> = (props) => {
  const {
    date,
    status,
    total,
    currency,
    dateFormat,
    receiptId,
    receiptIndex,
    supplier,
  } = props;
  return (
    <ReceiptsItem
      supplier={supplier}
      currency={currency}
      date={date}
      status={status}
      total={total}
      dateFormat={dateFormat}
      receiptId={receiptId}
      receiptIndex={receiptIndex}
    />
  );
};
