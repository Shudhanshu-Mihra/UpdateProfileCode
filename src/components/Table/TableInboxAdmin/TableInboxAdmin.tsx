import { FC, memo } from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { setIsSorted } from 'services/utils';

import { TableButton } from '../TableButton/TableButton';
import { TableInboxAdminItem } from './TableInboxAdminItem/TableInboxAdminItem';
import { TableInboxAdminStyles as Styled } from './TableInboxAdmin.style';
import { TABLE_COLUMN_NAMES } from './TableInboxAdmin.constants';

export const TableInboxAdmin: FC<TableInboxAdminProps> = memo((props) => {
  const {
    onCheckedItemHandler,
    onCheckedPublishMockFuncHandler,
    onCheckedAllItemsHandler,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    receiptList,
    isAllChecked,
    dateFormat,
    sortField,
    sortOrder,
    requestSort,
  } = props;
  console.warn('@!@!@!@!@!@', receiptList, sortField);
  return (
    <>
      <Styled.Head>
        <Styled.Checkbox>
          <CheckboxItem
            isChecked={isAllChecked}
            onChange={onCheckedAllItemsHandler}
            name="allChecked"
          />
        </Styled.Checkbox>
        <Styled.Text>ID</Styled.Text>
        {TABLE_COLUMN_NAMES.map((item) => {
          const isSorted = setIsSorted(sortField, sortOrder, item.id);
          return (
            <Styled.Selector
              key={item.id}
              id={item.id}
              onClick={requestSort}
              isSorted={sortField === item.id}
            >
              <TableButton isSorted={isSorted}>{item.name}</TableButton>
            </Styled.Selector>
          );
        })}
        <Styled.Text>Status</Styled.Text>
      </Styled.Head>
      {receiptList?.length ? (
        receiptList?.map((receipt, index) => (
          <TableInboxAdminItem
          paymentStatus={receipt.payment_status}
          // approveStatus={receipt.approve_status}
          approveStatus={true}
          publishStatus={receipt.publish_status}
          key={receipt.id}
            receiptIndex={index}
            customId={receipt.custom_id}
            receiptId={receipt.id}
            // currency={receipt.currency.value}
            currency={'120'}
            category={receipt.category?.name}
            date={receipt.receipt_date}
            net={receipt.net}
            total={receipt.total}
            vatCode={receipt.vat_code}
            tax={receipt.tax}
            status={receipt.status}
            supplier={receipt.supplier}
            supplierAccount={receipt.supplier_account?.name}
            isChecked={receipt.isChecked}
            onCheckedPaidHandler={onCheckedPaidHandler}
            onCheckedApproveHandler={onCheckedApproveHandler}
            onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
            onCheckedItemHandler={onCheckedItemHandler}
            dateFormat={dateFormat}
          />
        ))
      ) : (
        <Styled.EmptyContentWrapper>
          No records found
        </Styled.EmptyContentWrapper>
      )}
    </>
  );
});
