import { render } from '@testing-library/react';

import { AppTheme } from 'styles/theme';

import { CustomCarousel } from './CustomCarousel';

const items = [
  {
    fileSrc: 'file1.png',
    fileName: 'file 1',
  },
  {
    fileSrc: 'file2.png',
    fileName: 'file 2',
  },
  {
    fileSrc: 'file3.png',
    fileName: 'file 3',
  },
];

const setupFunction = () => {
  const { getByTestId, getAllByTestId, getByText, getByRole, getAllByRole } =
    render(
      <AppTheme>
        <CustomCarousel>
          {items.map((item) => (
            <div data-testid="carousel-item" key={item.fileName}>
              {item.fileName}
            </div>
          ))}
        </CustomCarousel>
      </AppTheme>
    );
  return { getByTestId, getAllByTestId, getByText, getByRole, getAllByRole };
};

describe('Company Switcher component', () => {
  it('render component', () => {
    const { getByText } = setupFunction();
    expect(getByText('file 1')).toBeTruthy();
  });

  it('render items', () => {
    const { getAllByTestId } = setupFunction();
    expect(getAllByTestId('carousel-item')).toHaveLength(3);
  });

  it('render buttons', () => {
    const { getAllByRole } = setupFunction();
    expect(getAllByRole('button')).not.toHaveLength(2);
  });
});
