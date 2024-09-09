import { render, screen } from '@testing-library/react';

import { AppTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'services/redux/store';

import { Header } from './Header';

const setup = () => {
  render(
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  );
  const header = screen.getByText('ReceiptHub');
  return header;
};

describe('Header component', () => {
  it('Render component', () => {
    const header = setup();
    expect(header).toBeInTheDocument();
  });

  it('Render links', () => {
    setup();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByTestId('header-link')).toHaveLength(6);
  });
});
