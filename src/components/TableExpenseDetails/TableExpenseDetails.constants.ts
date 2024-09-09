export const TABLE_GRID_MARKUP = `
minmax(30px, 40px) minmax(70px, 120px) minmax(70px, 120px)
minmax(70px, 90px) minmax(80px, 120px) minmax(80px, 140px)
minmax(70px, 95px)  minmax(80px, 90px) minmax(60px, 90px)
`;

export const TABLE_ID = {
  date: 'create',
  supplier: 'supplier',
  tax: 'tax',
  net: 'net',
  total: 'total',
  supplier_account: 'supplier_account',
  category: 'category',
};

export const generateGridTemplateColumns = (columnCount: number) => {
  return `repeat(${columnCount}, auto)`;
};

export const TABLE_EXPENSE_DETAILS_COLUMN_NAMES = [
  {
    id: 'receipt_id',
    name: 'Receipt ID',
  },
  {
    id: 'supplier',
    name: 'Supplier',
  },
  {
    id: 'date',
    name: 'Date',
  },
  {
    id: 'category',
    name: 'Category',
  },
  {
    id: 'description',
    name: 'Description',
  },
  {
    id: 'net',
    name: 'Net',
  },
  {
    id: 'tax',
    name: 'Tax',
  },
  {
    id: 'total',
    name: 'Total',
  },
  // {
  //   id: 'payment_status',
  //   name: 'Paid',
  // },
  // {
  //   id: 'approve',
  //   name: 'Approve',
  // },
  // {
  //   id: 'published',
  //   name: 'Published',
  // },
];
