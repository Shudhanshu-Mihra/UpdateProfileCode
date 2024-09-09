import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { store } from 'services/redux/store';

import { AppTheme } from 'styles/theme';

import { ReceiptsList } from './ReceiptsList';

const mockedReceipts = [
  {
    category: null,
    currency: 'ICurrency',
    description: null,
    id: 'daef12',
    custom_id: 'rc1',
    net: null,
    photos: [],
    receipt_date: new Date(),
    status: 'review',
    supplier: null,
    supplier_account: null,
    tax: null,
    total: null,
    payment_type: null,
    vat_code: null,
    payment_status: false,
    approve_status: false,
    publish_status: false,
    isChecked: false,
  },
];
const onChangeCategoryFilter = jest.fn();

const setupFunction = (counter: number) => {
  const { getByTestId, getAllByTestId, getByText, getByRole, getAllByRole } =
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AppTheme>
            <ReceiptsList
              timeFilterValue={{
                value: 'today',
                label: 'Today',
              }}
              timeFilterOptions={[]}
              countPerTimeFilter={counter}
              lastReceipts={mockedReceipts}
              onChangeCategoryFieldHandler={onChangeCategoryFilter}
              dateFormat="dd/MM/yyyy"
            />
          </AppTheme>
        </MemoryRouter>
      </Provider>
    );
  return {
    getByTestId,
    getAllByTestId,
    getByText,
    getByRole,
    getAllByRole,
  };
};

describe('Receipt list component', () => {
  it('Render component', () => {
    const { getByText } = setupFunction(mockedReceipts.length);
    expect(getByText(/receipts/i)).toBeInTheDocument();
  });

  it('Render receits list', () => {
    const { getAllByTestId } = setupFunction(mockedReceipts.length);
    expect(getAllByTestId('receipt-item')).toHaveLength(1);
  });

  it('Render empty screen metrics', () => {
    const { getByText } = setupFunction([].length);
    expect(getByText(/no receipts for this time/i)).toBeTruthy();
  });
});
