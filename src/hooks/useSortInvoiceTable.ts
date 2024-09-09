import { useCallback, useMemo, useState } from 'react';

import { getSortedInvoiceItems, getSortedItems } from 'services/utils';

interface IProps {
    items: IInvoice[];
}
export const useSortInvoiceTable = (props: IProps) => {
    const { items } = props;

    const [sortField, setSortField] = useState<TInvoiceKeys | ''>('');
    const [sortOrder, setSortOrder] = useState<'desc' | 'asc' | ''>('');

    const isSortNameType =
        sortField === 'category' ||
        sortField === 'customer_account' ||
        sortField === 'currency';

    const sortedItems = useMemo(() => {
        const nullItems = sortField
            ? items.filter((item) => !item[sortField as TInvoiceKeys])
            : [];

        const sortableItems = sortField
            ? items.filter((item) => item[sortField as TInvoiceKeys])
            : items;

        const { sortByDate, sortByObjValue, sortByValue, sortItemsHandler } =
            getSortedInvoiceItems({
                sortableItems,
                sortField: sortField || 'saleinvoice_date',
                sortOrder,
                sortValue: sortField === 'currency' ? 'value' : 'name',
            });

        if (sortField && sortOrder) {
            if (isSortNameType) {
                sortItemsHandler(sortByObjValue);
            }
            if (sortField === 'saleinvoice_date') {
                sortItemsHandler(sortByDate);
            }
            sortItemsHandler(sortByValue);
        }

        if (nullItems.length) {
            if (sortField === 'saleinvoice_date') {
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
            const columnName = event.currentTarget.id as TInvoiceKeys;
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
