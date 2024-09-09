import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { InputSearch } from './InputSearch';

const onChangeSearch = jest.fn();
const renderComponentFc = (value?: string) =>
  render(
    <AppTheme>
      <InputSearch onChangeSearch={onChangeSearch} search={value || ''} />
    </AppTheme>
  );

describe('Search component', () => {
  it('Render component', () => {
    renderComponentFc();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Render component by placeholder', () => {
    renderComponentFc();
    expect(screen.getByPlaceholderText('Search here...')).toBeInTheDocument();
  });

  it('Render component by value', () => {
    renderComponentFc('Search');
    expect(screen.getByDisplayValue('Search')).toBeInTheDocument();
  });

  it('OnChange works', () => {
    renderComponentFc();
    const search = screen.getByRole('textbox') as HTMLInputElement;
    expect(search).toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'react' } });
    expect(onChangeSearch).toBeCalled();
  });
});
