import { render, screen, fireEvent } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { CloseButton } from './CloseButton';

const onClick = jest.fn();
const renderComponentFc = () =>
  render(
    <AppTheme>
      <CloseButton onClickHandler={onClick} />
    </AppTheme>
  );

describe('Close button component', () => {
  it('Render component', () => {
    renderComponentFc();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('OnClick works', () => {
    renderComponentFc();
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
