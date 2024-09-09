import {
  ReceiptDetailsReducer,
  RECEIPT_DETAILS_INITIAL_STATE,
  setItemsForSelect,
} from './receiptDetails.reducer';

const mockedItems = [
  {
    id: 'abc2',
    created: '10.12.22',
    name: 'Category 1',
    creator: {
      id: 'jti3',
      name: 'User',
      role: 'owner',
    },
  },
];

describe('Receipt details reducer', () => {
  it('setItemsForSelect works well', () => {
    expect(
      ReceiptDetailsReducer(
        RECEIPT_DETAILS_INITIAL_STATE,
        setItemsForSelect({
          fieldName: 'categoriesForSelect',
          items: mockedItems,
        })
      )
    ).toEqual({
      ...RECEIPT_DETAILS_INITIAL_STATE,
      categoriesForSelect: [
        { id: 'abc2', label: 'Category 1', value: 'Category 1' },
      ],
    });
  });
});
