import { useCallback, useMemo, useState } from 'react';
import { IReportGetAll } from 'screens/ExpenseReport/types/expenseReport.types';

import { getSortedItems } from 'services/utils';

interface IProps {
  items: IReceipt[] //| IReportGetAll[];
}
export const useSortableData = (props: IProps) => {
  const { items } = props;

  const [sortField, setSortField] = useState<TReceiptKeys | ''>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc' | ''>('');

  const isSortNameType =
    sortField === 'category' ||
    sortField === 'supplier_account' ||
    sortField === 'currency';

  const sortedItems = useMemo(() => {
    const nullItems = sortField
      ? items.filter((item) => !item[sortField as TReceiptKeys])
      : [];

    const sortableItems = sortField
      ? items.filter((item) => item[sortField as TReceiptKeys])
      : items;

    const { sortByDate, sortByObjValue, sortByValue, sortItemsHandler } =
      getSortedItems({
        sortableItems,
        sortField: sortField || 'receipt_date',
        sortOrder,
        sortValue: sortField === 'currency' ? 'value' : 'name',
      });

    if (sortField && sortOrder) {
      if (isSortNameType) {
        sortItemsHandler(sortByObjValue);
      }
      if (sortField === 'receipt_date') {
        sortItemsHandler(sortByDate);
      }
      sortItemsHandler(sortByValue);
    }

    if (nullItems.length) {
      if (sortField === 'receipt_date') {
        return sortOrder === 'asc'
          ? sortableItems.concat(nullItems || [])
          : nullItems?.concat(sortableItems);
      } else {
        return sortOrder === 'asc'
          ? nullItems?.concat(sortableItems)
          : sortableItems.concat(nullItems || []);
      }
    }

    return sortableItems;
  }, [items, sortOrder, sortField]);

  const requestSort = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const columnName = event.currentTarget.id as TReceiptKeys;
      event.currentTarget.id !== sortField && setSortField(columnName);

      if (sortField === columnName && sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortOrder('asc');
      }
    },
    [sortField, sortOrder]
  );

  return { items: sortedItems, requestSort, sortOrder, sortField };
};
