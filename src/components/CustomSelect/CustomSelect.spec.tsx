import { fireEvent, render, screen } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { CustomSelect } from './CustomSelect';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

const onChangeValueHandler = jest.fn();

const setup = () => {
  render(
    <AppTheme>
      <CustomSelect
        onChangeValueHandler={onChangeValueHandler}
        options={options}
        value={options[0]}
        defaultOption={options[0]}
      />
    </AppTheme>
  );
  const selectInput = screen.getByRole('combobox') as HTMLSelectElement;
  return selectInput;
};

describe('Custom Select component', () => {
  it('Render custom select', () => {
    const selectElement = setup();
    expect(selectElement).toBeInTheDocument();
  });

  it('Render width default option', () => {
    const selectElement = setup();
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('onChange works well', () => {
    const selectElement = setup();
    expect(selectElement).toBeInTheDocument();
    fireEvent.change(selectElement, {
      target: { value: 'Vue' },
    });
    expect(selectElement.value).toBe('Vue');
  });
});
