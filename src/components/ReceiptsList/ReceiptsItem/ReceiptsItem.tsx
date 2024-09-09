import React from 'react';

import { getFormattedDate } from 'services/utils';

import { ReceiptsItemStyles as Styled } from './ReceiptsItem.style';
import { StatusLabel } from '../../StatusLabel/StatusLabel';
import { IReceiptsItemsListProps } from '../types';
import { useReceiptsItemState } from './ReceiptsItem.state';

export const ReceiptsItem: React.FC<IReceiptsItemsListProps> = (props) => {
  const { dateFormat, date, status, total, currency, receiptId, supplier } =
    props;

  const { onReceiptDetailsClickHandler } = useReceiptsItemState({
    receiptId,
  });

  return (
    <Styled.Wrapper
      data-testid="receipt-item"
      id={receiptId}
      onClick={onReceiptDetailsClickHandler}
    >
      <Styled.PaymentBlock>
        <Styled.SupplierItem>
          <Styled.Item>{supplier || '---'}</Styled.Item>
        </Styled.SupplierItem>
        <Styled.Item>{`${currency || '---'} ${total || '---'}`}</Styled.Item>
      </Styled.PaymentBlock>
      <Styled.StatusBlock>
        <StatusLabel status={status} isDashboard={true} />
        <Styled.Item>
          {date ? getFormattedDate(date, dateFormat) : '---'}
        </Styled.Item>
      </Styled.StatusBlock>
    </Styled.Wrapper>
  );
};
