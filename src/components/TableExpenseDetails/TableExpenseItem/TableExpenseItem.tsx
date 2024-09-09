import React from 'react';
import { format } from 'date-fns';

import { getCorrectCustomId } from 'services/utils';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableExpenseItemStyles as Styled } from './TableExpenseItem.style';
import { useTableExpenseState } from './TableExpenseItem.state';

interface TableInboxAdminProps {
  isVisited?: boolean;
  onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedPaidHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  onCheckedApproveHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  onCheckedPublishMockFuncHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isChecked: boolean;
  tax: number | null;
  date: Date;
  supplier: string | null;
  supplierAccount?: string | null;
  category?: string | null;
  vatCode: string | null;
  currency: string | null;
  net: number | null;
  total: number | null;
  status: string;
  receiptId: string;
  receiptIndex: number;
  customId: string;
  paymentStatus: boolean;
  approveStatus: boolean;
  publishStatus: boolean;
  dateFormat: string;
}

export const TableExpenseItem: React.FC<TableInboxAdminProps> = (props) => {
  const {
    isChecked,
    category,
    currency,
    date,
    net,
    status,
    supplier,
    supplierAccount,
    total,
    vatCode,
    tax,
    receiptId,
    receiptIndex,
    customId,
    paymentStatus,
    approveStatus,
    publishStatus,
    dateFormat,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
  } = props;

  const { onReceiptDetailsClickHandler } = useTableExpenseState({
    receiptId,
    receiptIndex,
  });

  return (
    <Styled.Item>
      <Styled.Checkbox>
        <CheckboxItem
          name={receiptId}
          isChecked={isChecked}
          onChange={onCheckedItemHandler}
        />
      </Styled.Checkbox>
      <Styled.View id={receiptId} onClick={onReceiptDetailsClickHandler}>
        <Styled.Link>{getCorrectCustomId(customId)}</Styled.Link>
      </Styled.View>
      <Styled.Selector>
        {!!date
          ? format(new Date(date), dateFormat)
          : '---'}
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{supplier || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{supplierAccount || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{category || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{vatCode || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>{currency || '---'}</Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{net || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{tax || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{total || '00.00'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Checkbox isBorder isHidden={true}>
        <CheckboxItem
          isChecked={publishStatus}
          onChange={onCheckedPublishMockFuncHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={paymentStatus}
          onChange={onCheckedPaidHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={approveStatus} //aproved
          onChange={onCheckedApproveHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={publishStatus} //published
          onChange={onCheckedPublishMockFuncHandler}
          name={receiptId}
        />
      </Styled.Checkbox>
      <Styled.Status>
        <StatusLabel status={status as Statuses} />
      </Styled.Status>
    </Styled.Item>
  );
};
