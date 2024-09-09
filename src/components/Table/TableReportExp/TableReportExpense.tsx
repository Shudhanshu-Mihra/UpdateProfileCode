import { FC, memo } from 'react';

import { CheckboxItem } from 'components/Checkbox/Checkbox';

import { setIsSorted } from 'services/utils';

import { TableReportExpItem } from './TableReportExpItem/TableReportExpItem';
import { TableButton } from 'components/Table/TableButton/TableButton';
import { TableExpenseStyles as Styled } from './TableExpense.style';
import { TABLE_EXPENSE_COLUMN_NAMES, TABLE_GRID_MARKUP, generateGridTemplateColumns } from './TableExpense.constants';
import { IReportTableProps } from '../../../screens/ExpenseReport/types/expenseReport.types';

export const TableReportExpense: FC<IReportTableProps> = memo((props) => {
  const {
    onCheckedAllItemsHandler,
    onCheckedItemHandler,
    sortedReportList,
    isAllChecked,
    sortField,
    sortOrder,
    requestSort,
    dateFormat,
  } = props;

  const columnCount = TABLE_EXPENSE_COLUMN_NAMES.length + 2;
  const gridTemplateColumns = generateGridTemplateColumns(columnCount);

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
        {TABLE_EXPENSE_COLUMN_NAMES.map((item) => {
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
      {sortedReportList?.length ? (
        sortedReportList?.map((report, index) => (
          <TableReportExpItem
            key={report.expense_report_id}
            reportId={report.expense_report_id}
            reportIndex={index}
            reportType="not define"
            reportFor={report.expense_report_for}
            reportName={report.expense_report_name}
            date={report.expense_created_date}
            total={report.report_total_amount}
            tax={report.report_total_tax}
            isChecked={report.isChecked}
            dateFormat={dateFormat}
            onCheckedItemHandler={onCheckedItemHandler}
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
