import React from 'react';
import { format } from 'date-fns';

import { getCorrectCustomId } from 'services/utils';

import { CheckboxItem } from 'components/Checkbox/Checkbox';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';

import { TableInvoiceitemStyles as Styled } from './TableInvoiceItem.style';  // import { TABLE_GRID_MARKUP } from '../salesInvoiceTable.constants';
import { useSalesInvoicesItemState } from './SalesInvoicesItem.state';

interface TableInvoiceProps {
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
  date?: Date | null;
  customer?: string | null;
  customerAccount?: string | null;
  category?: string | null;
  vatCode: string | null;
  currency: string | null;
  net: number | null;
  total: number | null;
  status: string;
  invoiceId: string;
  invoiceIndex: number;
  customId: string;
  paymentStatus: boolean;
  approveStatus: boolean;
  publishStatus: boolean;
  dateFormat: string;
}

export const SalesInvoicesItem: React.FC<TableInvoiceProps> = (props) => {
  const {
    isChecked,
    category,
    currency,
    date,
    net,
    status,
    customer,
    customerAccount,
    total,
    vatCode,
    tax,
    invoiceId,
    invoiceIndex,
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

  const { onInvoiceDetailsClickHandler } = useSalesInvoicesItemState({
    invoiceId,
    invoiceIndex,
  });
  return (
    <Styled.Item>
      <Styled.Checkbox>
        <CheckboxItem
          name={invoiceId}
          isChecked={isChecked}
          onChange={onCheckedItemHandler}
        />
      </Styled.Checkbox>
      <Styled.View id={invoiceId} onClick={onInvoiceDetailsClickHandler}>
        <Styled.Link>{getCorrectCustomId(customId)}</Styled.Link>
      </Styled.View>
      <Styled.Selector>
        {!!date && dateFormat
          ? format(new Date(date), dateFormat)
          : '---' }
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{customer || '---'}</Styled.ValueWrapper>
      </Styled.Selector>
      <Styled.Selector>
        <Styled.ValueWrapper>{customerAccount || '---'}</Styled.ValueWrapper>
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
          name={invoiceId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={paymentStatus}
          onChange={onCheckedPaidHandler}
          name={invoiceId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={status == 'approved' ? true : false} //aproved
          onChange={onCheckedApproveHandler}
          name={invoiceId}
        />
      </Styled.Checkbox>
      <Styled.Checkbox isBorder>
        <CheckboxItem
          isChecked={publishStatus} //published
          onChange={onCheckedPublishMockFuncHandler}
          name={invoiceId}
        />
      </Styled.Checkbox>
      <Styled.Status>
        <StatusLabel status={status as Statuses} />
      </Styled.Status>
    </Styled.Item>
  );
};
