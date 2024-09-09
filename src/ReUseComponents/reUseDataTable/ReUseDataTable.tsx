import { FC, memo } from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { setIsSorted } from 'services/utils';

// import { TableButton } from '../../components/TableButton/TableButton';
// import { TableInboxAdminItem } from './TableInboxAdminItem/TableInboxAdminItem';
import { ReUseDataTableStyles as Styled } from './reUseDataTable.style';
import { TABLE_COLUMN_NAMES, DynamicTableData } from './reUseDataTable.constants';
import { TableButton } from 'components/Table/TableButton/TableButton';
import { TableInboxAdminItem } from 'components/Table/TableInboxAdmin/TableInboxAdminItem/TableInboxAdminItem';
import { boolean } from 'yup';
import { Icon } from 'components/Icons';

interface IReUseDataTableProps {
    isContentLoading?: boolean;
    onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedAllItemsHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onCheckedPublishMockFuncHandler?: (  //!?
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    receiptList?: IReceipt[];
    isFetchingReceipts?: boolean;  //!?
    isAllChecked?: boolean;  //!?
    onCheckedPaidHandler?: ( //!?
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    onCheckedApproveHandler?: (  //!?
      event: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    dateFormat?: string; //!?
    sortField?: string;  //!?
    sortOrder?: TSorterOrder;  //!?
    // datePickerRef: React.RefObject<HTMLButtonElement>;
    requestSort?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; //!?
  }

export const ReUseDataTable: FC<IReUseDataTableProps> = memo((props) => {
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
  // console.warn('@!@!@!@!@!@', receiptList, sortField);
  return (
    <>
    <>
    <Styled.Head>
      {DynamicTableData?.table.map((particular) => {
        return (
          particular.column_header_type == 'checkbox' ? 
          <>
          <CheckboxItem
            isChecked={particular.column_header_status || false}
            onChange={particular.column_header_click}
            name="allChecked"
          />
          <Icon type={particular.column_data_icon || 'addPlus'} />
          </>
          :
          <>
          <Styled.Text>{particular.column_header_text}</Styled.Text>
          <Icon type={particular.column_data_icon || 'addPlus'} />
          </>
        );
      })}
    </Styled.Head>
    <p>seprate</p>
    </>
      <Styled.Head>
        <Styled.Checkbox>
          <CheckboxItem
            isChecked={isAllChecked || false}
            onChange={onCheckedAllItemsHandler}
            name="allChecked"
          />
        </Styled.Checkbox>
        <Styled.Text>ID</Styled.Text>
        {TABLE_COLUMN_NAMES.map((item) => {
          const isSorted = sortField && sortOrder ? setIsSorted(sortField, sortOrder, item.id) : null;
          return (
            <Styled.Selector
              key={item.id}
              id={item.id}
              onClick={requestSort}
              isSorted={sortField === item.id}
            >
            {isSorted && <TableButton isSorted={isSorted}>{item.name}</TableButton>}  
            </Styled.Selector>
          );
        })}
        <Styled.Text>Status</Styled.Text>
      </Styled.Head>
      {receiptList?.length ? (
        receiptList?.map((receipt, index) => (
          // <TableInboxAdminItem
          // paymentStatus={receipt.payment_status}
          // // approveStatus={receipt.approve_status}
          // approveStatus={true}
          // publishStatus={receipt.publish_status}
          // key={receipt.id}
          //   receiptIndex={index}
          //   customId={receipt.custom_id}
          //   receiptId={receipt.id}
          //   // currency={receipt.currency.value}
          //   currency={'120'}
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
          //   dateFormat={dateFormat || 'dd-MM-yyyy'}
          // />
          <></>
        ))
      ) : (
        <Styled.EmptyContentWrapper>
          No records found
        </Styled.EmptyContentWrapper>
      )}
    </>
  );
});
