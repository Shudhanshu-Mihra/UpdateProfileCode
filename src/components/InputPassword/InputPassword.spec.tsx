import { screen, render, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { InputPassword } from './InputPassword';

const onChange = jest.fn();

describe('Input password component', () => {
  it('Render component works', () => {
    render(
      <AppTheme>
        <InputPassword
          showPassword={false}
          password="123"
          onChangePassword={onChange}
        />
      </AppTheme>
    );
    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });

  it('render label', () => {
    render(
      <AppTheme>
        <InputPassword
          inputName="password"
          text="Password"
          showPassword={true}
          onChangePassword={onChange}
          password=""
        />
      </AppTheme>
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('OnClick works well', () => {
    const onClick = jest.fn();
    render(
      <AppTheme>
        <InputPassword
          inputName="password"
          text="Password"
          showPassword={true}
          onChangePassword={onChange}
          password=""
          onClick={onClick}
        />
      </AppTheme>
    );
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
