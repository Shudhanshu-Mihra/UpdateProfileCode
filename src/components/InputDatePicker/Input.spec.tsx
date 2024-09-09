import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { Input } from './Input';

const onChange = jest.fn();

describe('Input component', () => {
  it('render input component', () => {
    render(
      <AppTheme>
        <Input value="" onChangeValue={onChange} />
      </AppTheme>
    );
    expect(screen.getByTestId('input-component')).toBeInTheDocument();
    expect(screen.getByTestId('input-field')).toBeInTheDocument();
  });

  it('custom placeholder works correctly', () => {
    render(
      <AppTheme>
        <Input value="" onChangeValue={onChange} placeHolder="search..." />
      </AppTheme>
    );
    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
  });

  it('onChange works well', () => {
    const handleChange = jest.fn();
    render(
      <AppTheme>
        <Input
          value=""
          isInputDate={false}
          isTextArea={false}
          onChangeValue={handleChange}
        />
      </AppTheme>
    );
    const inputElement = screen.getByTestId('input-field');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: 'React' },
    });
    expect(handleChange).toBeCalled();
  });
});
