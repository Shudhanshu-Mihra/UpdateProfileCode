import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme, COLORS } from 'styles/theme';

import { Button } from './Button';

describe('Button Component', () => {
  it('Render button component', () => {
    render(
      <AppTheme>
        <Button themedButton="primary" width="primary" />
      </AppTheme>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Render button with secondary props', () => {
    render(
      <AppTheme>
        <Button themedButton="secondary" width="secondary" />
      </AppTheme>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: `${COLORS.lightGray}`,
      width: '100px',
    });
  });
  it('Onclick works well', () => {
    const onCLick = jest.fn();
    render(
      <AppTheme>
        <Button themedButton="secondary" width="secondary" onClick={onCLick}>
          Click me
        </Button>
      </AppTheme>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onCLick).toBeCalledTimes(1);
  });
  it('Loader is not rendering', () => {
    render(
      <AppTheme>
        <Button themedButton="secondary" width="secondary">
          Click me
        </Button>
      </AppTheme>
    );
    const loader = screen.queryByTestId('loader');
    expect(loader).toBeNull();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('Render loader component', () => {
    render(
      <AppTheme>
        <Button themedButton="secondary" width="secondary" isLoading={true}>
          Click me
        </Button>
      </AppTheme>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
