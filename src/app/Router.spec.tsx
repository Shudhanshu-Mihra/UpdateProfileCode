import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { store } from 'services/redux/store';

import App from './App';
import { AppTheme } from '../styles/theme';

const SettingsComponent = () => <div data-testid="settings">Settings</div>;
const DashboradComponent = () => <div>Dashboard</div>;

describe('React router dom', () => {
  test('Router test', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId('sign_up'));
    expect(screen.getByTestId('sign-up-page')).toBeInTheDocument();

    await user.click(screen.getByTestId('capium-login'));
    expect(screen.getByTestId('capium-login-page')).toBeInTheDocument();
  });

  test('Header links works well', async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path={'/'} element={<Layout />}>
                <Route index element={<DashboradComponent />} />
                <Route path={'/settings'} element={<SettingsComponent />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </AppTheme>
      </Provider>
    );
    const user = userEvent.setup();
    const link = screen.getAllByTestId('header-link')[3];

    await user.click(link);
    expect(screen.getByTestId('settings')).toBeInTheDocument();
  });
});
