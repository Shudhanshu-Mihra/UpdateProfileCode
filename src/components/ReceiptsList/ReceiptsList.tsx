import React from 'react';
import { ActionMeta } from 'react-select';

import emptyDataSrc from 'assets/icons/empty-receipts.png';

import { ReceiptsListStyles as Styled } from './ReceiptsList.style';
import { ReceiptsItemsList } from './ReceiptsItemsList';
import { ReceiptsSelects } from './ReceiptsSelects/ReceiptsSelects';

interface IReceiptsListProps {
  lastReceipts?: IReceipt[];
  countPerTimeFilter?: number;
  timeFilterValue: {
    value: string;
    label: string;
  };
  timeFilterOptions: {
    value: string;
    label: string;
  }[];
  onChangeCategoryFieldHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  dateFormat: string;
}

export const ReceiptsList: React.FC<IReceiptsListProps> = (props) => {
  const {
    lastReceipts,
    timeFilterOptions,
    countPerTimeFilter,
    dateFormat,
    timeFilterValue,
    onChangeCategoryFieldHandler,
  } = props;

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.Title>Receipts</Styled.Title>
        <ReceiptsSelects
          timeFilterValue={timeFilterValue}
          timeFilterOptions={timeFilterOptions}
          onChangeCategoryFieldHandler={onChangeCategoryFieldHandler}
        />
      </Styled.HeaderWrapper>
      <Styled.Container isContentCentered={!lastReceipts?.length}>
        {countPerTimeFilter ? (
          <Styled.ItemWrapper>
            {lastReceipts?.map((receipt, index) => (
              <ReceiptsItemsList
                key={receipt.id}
                date={receipt.receipt_date}
                status={receipt.status as Statuses}
                supplier={receipt.supplier}
                total={receipt.total}
                currency={receipt.currency?.value}
                dateFormat={dateFormat}
                receiptId={receipt.id}
                receiptIndex={index}
              />
            ))}
          </Styled.ItemWrapper>
        ) : (
          <Styled.EmptyDataWrapper data-testid="no-receipts">
            <Styled.Image src={emptyDataSrc} />
            <Styled.Title>No receipts for this time</Styled.Title>
          </Styled.EmptyDataWrapper>
        )}
      </Styled.Container>
    </>
  );
};
