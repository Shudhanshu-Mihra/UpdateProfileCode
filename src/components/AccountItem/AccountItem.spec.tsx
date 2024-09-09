import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppTheme } from 'styles/theme';

import { AccountItem } from './AccountItem';

const setupFc = () => {
  const onChooseCapiumAccountHandler = jest.fn();
  const { getByText, getByTestId } = render(
    <AppTheme>
      <AccountItem
        email="test@gmail.com"
        name="User"
        itemId="123"
        onChooseCapiumAccountHandler={onChooseCapiumAccountHandler}
      />
    </AppTheme>
  );
  return { getByText, getByTestId, onChooseCapiumAccountHandler };
};

describe('AccountItem component', () => {
  it('Render component', () => {
    const { getByText } = setupFc();
    expect(getByText('User')).toBeInTheDocument();
  });

  it('onChooseCapiumAccountHandler works well', async () => {
    const { getByTestId, onChooseCapiumAccountHandler } = setupFc();
    const item = getByTestId('click-item');
    expect(item).toBeInTheDocument();
    await userEvent.click(item);
    expect(onChooseCapiumAccountHandler).toBeCalled();
  });
});
