import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppTheme } from 'styles/theme';
import { Pagination } from './Pagination';

const onChangePaginationInputValue = jest.fn();
const onGoToCLick = jest.fn();
const onEnterGoToClick = jest.fn();
const onForwardClick = jest.fn();
const onBackwardClick = jest.fn();

const getButtons = () => screen.getAllByTestId('navigation-button');
const renderComponentFc = () =>
  render(
    <AppTheme>
      <Pagination
        onChangePaginationInputValue={onChangePaginationInputValue}
        inputPaginationValue=""
        onGoToClick={onGoToCLick}
        onEnterGoToClick={onEnterGoToClick}
        onForwardClick={onForwardClick}
        onBackwardClick={onBackwardClick}
        currentPage={0}
        pages={2}
      />
    </AppTheme>
  );

describe('Paginate component', () => {
  it('Render component', () => {
    renderComponentFc();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('on change works well', async () => {
    renderComponentFc();
    const input = screen.getByTestId('input-field') as HTMLInputElement;
    await userEvent.type(input, '123');
    expect(onChangePaginationInputValue).toBeCalledTimes(3);
  });

  it('onGoToClick works well', async () => {
    renderComponentFc();
    const buttons = getButtons();
    await userEvent.click(buttons[2]);
    expect(onGoToCLick).toBeCalledTimes(1);
  });

  it('onEnterGoToClick  works well', async () => {
    renderComponentFc();
    await userEvent.type(
      screen.getByTestId('input-field') as HTMLInputElement,
      'abc{enter}'
    );
    expect(onEnterGoToClick).toHaveBeenCalled();
  });

  it('onForwardClick and onBackwardClick works well', async () => {
    renderComponentFc();

    const buttons = getButtons();
    await userEvent.click(buttons[1]);
    expect(onForwardClick).toBeCalled();

    expect(screen.getByRole('button', { name: 'Page 2' })).toBeInTheDocument();
    await userEvent.click(buttons[0]);
    expect(
      screen.getByRole('button', { name: 'Page 1 is your current page' })
    ).toBeInTheDocument();
    expect(onBackwardClick).toHaveBeenCalled();
  });
});
