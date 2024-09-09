import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import * as formik from 'formik';

import { AppTheme } from 'styles/theme';

import { ForgotPassword } from './ForgotPassword';

const useFormikMock = jest.spyOn(formik, 'useFormik');

let mockIsSuccess = false;

jest.mock('./ForgotPassword.state', () => {
  const test = jest.requireActual('./ForgotPassword.state');
  return {
    useForgotPasswordState: () => {
      return {
        ...test,
        formik: useFormikMock,
        isSuccess: mockIsSuccess,
      };
    },
  };
});

const setupFc = () => {
  const { getByTestId, queryByTestId, getByRole } = render(
    <MemoryRouter>
      <AppTheme>
        <ForgotPassword />
      </AppTheme>
    </MemoryRouter>
  );
  return { getByTestId, queryByTestId, getByRole };
};

describe('Forgot password screen', () => {
  it('render component', () => {
    const { getByTestId } = setupFc();
    expect(getByTestId('forgot-password-screen')).toBeInTheDocument();
  });

  it('do not render modal window', () => {
    const { queryByTestId } = setupFc();
    expect(queryByTestId('success-modal')).not.toBeInTheDocument();
  });

  it('input is empty', () => {
    const { getByRole } = setupFc();
    const input = getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('render modal window', () => {
    mockIsSuccess = true;
    const { getByTestId } = setupFc();

    expect(getByTestId('success-modal')).toBeInTheDocument();
  });
});
