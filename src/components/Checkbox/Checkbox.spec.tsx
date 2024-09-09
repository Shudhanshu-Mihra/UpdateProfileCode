import { screen, render, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { CheckboxItem } from './Checkbox';

const onChange = jest.fn();

describe('Checkbox component', () => {
  it('Render component', () => {
    render(
      <AppTheme>
        <CheckboxItem isChecked={false} onChange={onChange} />
      </AppTheme>
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('Component is not checked', () => {
    render(
      <AppTheme>
        <CheckboxItem isChecked={false} onChange={onChange} />
      </AppTheme>
    );
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('Component is checked', () => {
    render(
      <AppTheme>
        <CheckboxItem isChecked={true} onChange={onChange} />
      </AppTheme>
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('onChange works well', () => {
    render(
      <AppTheme>
        <CheckboxItem labelText="hello" isChecked={false} onChange={onChange} />
      </AppTheme>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox, {
      target: {
        value: true,
      },
    });
    expect(checkbox).toBeTruthy();
  });
});
