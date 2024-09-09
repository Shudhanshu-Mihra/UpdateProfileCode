import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { CustomDatePicker } from './CustomDatePicker';

const onClick = jest.fn();

describe('Custom datepicker component', () => {
  it('Render datepicker', () => {
    render(
      <AppTheme>
        <CustomDatePicker isInputDate={false} formattedDate="" />
      </AppTheme>
    );

    expect(screen.getByTestId('date-picker-component')).toBeInTheDocument();
  });

  it('On click works', () => {
    render(
      <AppTheme>
        <CustomDatePicker
          isInputDate={false}
          formattedDate=""
          onDatePickerClickHandler={onClick}
        />
      </AppTheme>
    );
    expect(screen.queryByTestId('date-picker-menu')).toBeNull();
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('Render date picker menu', () => {
    render(
      <AppTheme>
        <CustomDatePicker
          isDatePickerOpen={true}
          isInputDate={false}
          formattedDate=""
        />
      </AppTheme>
    );
    expect(screen.getByTestId('date-picker-menu')).toBeInTheDocument();
  });

  it('Render without date picker menu', () => {
    render(
      <AppTheme>
        <CustomDatePicker
          isDatePickerOpen={false}
          isInputDate={false}
          formattedDate=""
        />
      </AppTheme>
    );
    expect(screen.queryByTestId('date-picker-menu')).toBeNull();
  });

  it('Render with empty value', () => {
    render(
      <AppTheme>
        <CustomDatePicker
          isDatePickerOpen={true}
          isInputDate={false}
          formattedDate=""
        />
      </AppTheme>
    );
    expect(screen.getByText('Choose Date')).toBeInTheDocument();
  });

  it('Render with value', () => {
    render(
      <AppTheme>
        <CustomDatePicker
          isDatePickerOpen={true}
          isInputDate={false}
          formattedDate={'07/04/2022'}
        />
      </AppTheme>
    );
    expect(screen.getByText('07/04/2022')).toBeInTheDocument();
  });
});
