import { FC, memo } from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { setIsSorted } from 'services/utils';

import { TableButton } from 'components/Table/TableButton/TableButton';
import { TableExpenseDetailsStyles as Styled } from './TableExpenseDetails.style';
import { TABLE_EXPENSE_DETAILS_COLUMN_NAMES, TABLE_GRID_MARKUP } from './TableExpenseDetails.constants';

export const TableExpenseDetails: FC<TableInboxAdminProps> = memo((props) => {
  const {
    onCheckedAllItemsHandler,
    receiptList,
    isAllChecked,
    sortField,
    sortOrder,
    requestSort,
  } = props;

  return (
    <>
      <Styled.Head gridTemplateColumns={TABLE_GRID_MARKUP} >
        <Styled.Checkbox>
          <CheckboxItem
            isChecked={isAllChecked}
            onChange={onCheckedAllItemsHandler}
            name="allChecked"
          />
        </Styled.Checkbox>
        {TABLE_EXPENSE_DETAILS_COLUMN_NAMES.map((item) => {
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
      </Styled.Head>
      {receiptList?.length ? (
        receiptList?.map((receipt, index) => (
          // <TableExpenseItem
          // paymentStatus={receipt.payment_status}
          // approveStatus={receipt.approve_status}
          // publishStatus={receipt.publish_status}
          // key={receipt.id}
          //   receiptIndex={index}
          //   customId={receipt.custom_id}
          //   receiptId={receipt.id}
          //   currency={receipt.currency.value}
          //   category={receipt.category?.name}
          //   date={receipt.receipt_date}
          //   net={receipt.net}
          //   total={receipt.total}
          //   vatCode={receipt.vat_code}
          //   tax={receipt.tax}
          //   status={receipt.status}
          //   supplier={receipt.supplier}
          //   supplierAccount={receipt.supplier_account?.name}
          //   isChecked={receipt.isChecked}
          //   onCheckedPaidHandler={onCheckedPaidHandler}
          //   onCheckedApproveHandler={onCheckedApproveHandler}
          //   onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
          //   onCheckedItemHandler={onCheckedItemHandler}
          //   dateFormat={dateFormat}
          // />
          ""
        ))
      ) : (
        <Styled.EmptyContentWrapper>
          No records found
        </Styled.EmptyContentWrapper>
      )}
    </>
  );
});
