import { fireEvent, render, screen } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { EmptyData } from './EmptyData';

const onCLickHandler = jest.fn();
const setup = ({
  isGetButton,
  isNoResult,
}: {
  isGetButton?: boolean;
  isNoResult?: boolean;
}) => {
  render(
    <AppTheme>
      <EmptyData
        isNoResults={isNoResult}
        title="empty screen"
        onClick={onCLickHandler}
      />
    </AppTheme>
  );
  const button = isGetButton && screen.getByRole('button');
  const emptyData = !isNoResult && screen.getByText('empty screen');
  const isNoResultComponent = isNoResult && screen.getByText('No results');
  return { emptyData, button, isNoResultComponent };
};

describe('Empty Data component', () => {
  it('Render component', () => {
    const { emptyData } = setup({});
    expect(emptyData).toBeInTheDocument();
  });

  it('Render button', () => {
    const { button } = setup({ isGetButton: true });
    expect(button).toBeInTheDocument();
  });

  it('onClick works well', () => {
    const { button } = setup({ isGetButton: true });
    expect(button).toBeInTheDocument();
    button && fireEvent.click(button);
    expect(onCLickHandler).toBeCalled();
  });

  it('No result render', () => {
    const { isNoResultComponent } = setup({ isNoResult: true });
    expect(isNoResultComponent).toBeInTheDocument();
  });
});
