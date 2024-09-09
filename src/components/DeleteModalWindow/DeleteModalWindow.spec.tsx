import { fireEvent, render, screen } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { DeleteModalWindow } from './DeleteModalWindow';

const onCloseDeleteModalWindowHandler = jest.fn();
const onDeleteButtonClickHandler = jest.fn();

describe('Delete modal window component', () => {
  it('Not Render component', () => {
    render(
      <AppTheme>
        <DeleteModalWindow
          isLoading={false}
          onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
          onDeleteButtonClickHandler={onDeleteButtonClickHandler}
          isDeleteModalWindowOpen={false}
          deleteItemName=""
          categoryName=""
        />
      </AppTheme>
    );
    expect(screen.queryByTestId('modal-window')).not.toBeInTheDocument();
  });

  it('Render component', () => {
    render(
      <AppTheme>
        <DeleteModalWindow
          isLoading={false}
          onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
          onDeleteButtonClickHandler={onDeleteButtonClickHandler}
          isDeleteModalWindowOpen={true}
          deleteItemName=""
          categoryName=""
        />
      </AppTheme>
    );
    expect(screen.getByTestId('modal-window')).toBeInTheDocument();
  });

  it('onClose handler works', () => {
    render(
      <AppTheme>
        <DeleteModalWindow
          isLoading={false}
          onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
          onDeleteButtonClickHandler={onDeleteButtonClickHandler}
          isDeleteModalWindowOpen={true}
          deleteItemName=""
          categoryName=""
        />
      </AppTheme>
    );
    expect(screen.getByTestId('modal-window')).toBeInTheDocument();
    fireEvent.click(screen.getByText('No'));
    expect(onCloseDeleteModalWindowHandler).toBeCalled();
  });

  it('onDeleteButton handler works', () => {
    render(
      <AppTheme>
        <DeleteModalWindow
          isLoading={false}
          onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
          onDeleteButtonClickHandler={onDeleteButtonClickHandler}
          isDeleteModalWindowOpen={true}
          deleteItemName=""
          categoryName=""
        />
      </AppTheme>
    );
    expect(screen.getByTestId('modal-window')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Yes'));
    expect(onDeleteButtonClickHandler).toBeCalled();
  });
});
