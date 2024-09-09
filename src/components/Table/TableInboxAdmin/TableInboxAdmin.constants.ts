export const TABLE_GRID_MARKUP = `
minmax(12px, 30px) minmax(60px, 70px) minmax(70px, 80px)
minmax(100px, 150px) minmax(145px, 150px) minmax(100px, 130px)
minmax(94px, 106px) minmax(60px, 75px) minmax(60px, 75px)
minmax(60px, 75px) minmax(83px, 95px)
minmax(60px, 65px) minmax(90px, 85px) minmax(100px, 95px) minmax(90px, 105px);
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

export const TABLE_COLUMN_NAMES = [
  {
    id: 'receipt_date',
    name: 'Date',
  },
  {
    id: 'supplier',
    name: 'Supplier',
  },
  {
    id: 'supplier_account',
    name: 'SPLR Account',
  },
  {
    id: 'category',
    name: 'Category',
  },
  {
    id: 'vat_code',
    name: 'VAT Rate',
  },
  {
    id: 'currency',
    name: 'CUR',
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
  {
    id: 'payment_status',
    name: 'Paid',
  },
  {
    id: 'approve',
    name: 'Approve',
  },
  {
    id: 'published',
    name: 'Published',
  },
];
