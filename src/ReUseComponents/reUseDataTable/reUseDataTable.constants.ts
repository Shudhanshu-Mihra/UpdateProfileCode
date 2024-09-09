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

const dataTable = [{
  active_status: false,
  approved_status: false,
  category: null,
  company: { id: 'd82692fa-8aa4-4f40-84d2-f63bf306230b', created: '2024-07-29T07:06:35.488Z', name: 'hello company', logo: null, date_format: 'dd-MMM-yyyy' },
  created: "2024-08-20T10:28:02.615Z",
  currency: { id: '46dbeb24-3f04-4a17-8196-197704d5db3d', value: 'USD', country: 'United States', description: 'United States Dollar', symbol: '$' },
  custom_id: "rc 3",
  description: null,
  id: "e134b89d-636d-4240-90be-c6ddebd2a33b",
  isChecked: false,
  net: null,
  payment_status: true,
  payment_type: null,
  photos: ['1724149680724-308px-Target_Receipt_5-12-2018.jpeg'],
  publish_status: false,
  receipt_date: null,
  status: "rejected",
  supplier: null,
  supplier_account: null,
  tableData: null,
  tax: 5,
  total: 50,
  vat_code: null,
},
{
  active_status: false,
  approved_status: true,
  category: null,
  company: { id: 'd82692fa-8aa4-4f40-84d2-f63bf306230a', created: '2024-07-29T07:06:35.488Z', name: 'hello company', logo: null, date_format: 'dd-MMM-yyyy' },
  created: "2024-08-21T10:28:02.615Z",
  currency: { id: '46dbeb24-3f04-4a17-8196-197704d5db3d', value: 'USD', country: 'United States', description: 'United States Dollar', symbol: '$' },
  custom_id: "rc 3",
  description: null,
  id: "e134b89d-636d-4240-90be-c6ddebd2a33b",
  isChecked: false,
  net: null,
  payment_status: true,
  payment_type: null,
  photos: ['1724149680724-308px-Target_Receipt_5-12-2018.jpeg'],
  publish_status: false,
  receipt_date: null,
  status: "review",
  supplier: null,
  supplier_account: null,
  tableData: null,
  tax: 10,
  total: 100,
  vat_code: null,
}]

export const DynamicTableData = {
  list: dataTable,
  table: [
  {
    column_id: 'select_data',
    column_header_type: 'checkbox',
    column_header_text: '',
    column_header_status: false,
    column_header_click: () => console.log('sorting done'),
    column_space: '', // blank-strings for 'min-content' - 20px for custom width;
    column_align: '',
    // column_icon: 'addPlus',

    column_data_type: 'checkbox',
    column_Data_text: 'date', //come from data object key.
    column_data_click: () => console.log('checkbox click'),
    // column_data_icon: 'addPlus',
  },
  {
    column_id: 'receipt_date',
    column_header_type: 'text',
    column_header_text: 'Date 1',
    column_header_status: true,
    column_header_click: () => console.log('sorting done'),
    column_space: '300px', // blank-strings for 'min-content' - 20px for custom width;
    column_align: '',
    column_icon: 'addPlus',

    column_data_type: 'text',
    column_Data_text: 'date1', //come from data object key.
    column_data_click: () => console.log('data click'),
    column_data_icon: 'addPlus',
  }
]};

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
