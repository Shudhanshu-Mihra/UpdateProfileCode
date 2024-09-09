export const TABLE_GRID_MARKUP = `
minmax(40px, 50px) minmax(70px, 200px) minmax(70px, 200px)
minmax(100px, 200px) minmax(145px, 250px) minmax(100px, 250px)
minmax(94px, 106px) 
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

export const TABLE_EXPENSE_COLUMN_NAMES = [
  {
    id: 'receipt_date',
    name: 'Prepared For',
  },
  {
    id: 'supplier',
    name: 'Type',
  },
  {
    id: 'supplier_account',
    name: 'Name',
  },
  {
    id: 'category',
    name: 'Report Date',
  },
  {
    id: 'vat_code',
    name: 'Report Total',
  },
  {
    id: 'currency',
    name: 'Report Tax',
  },
  // {
  //   id: 'net',
  //   name: 'Net',
  // },
  // {
  //   id: 'tax',
  //   name: 'Tax',
  // },
  // {
  //   id: 'total',
  //   name: 'Total',
  // },
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
