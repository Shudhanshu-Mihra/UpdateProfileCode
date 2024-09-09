import { fireEvent, render } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { SliderArrow } from './SliderArrow';

const onClick = jest.fn();
const setupFc = () => {
  const { getByRole } = render(
    <AppTheme>
      <SliderArrow onClick={onClick} />
    </AppTheme>
  );

  return { getByRole };
};
describe('SlideArrow component', () => {
  it('render component', () => {
    const { getByRole } = setupFc();

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('onClick should work', () => {
    const { getByRole } = setupFc();

    fireEvent.click(getByRole('button'));
    expect(onClick).toBeCalled();
  });
});
