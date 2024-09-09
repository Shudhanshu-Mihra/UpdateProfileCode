import { mockedItem } from '../master.constants';
import {
  MasterReducer,
  MASTER_INITIAL_STATE,
  setActiveTab,
  setCategories,
  setTabItem,
} from './master.reducer';

describe('Dashboard reducer', () => {
  it('setIsFetchingDate works well', () => {
    expect(MasterReducer(MASTER_INITIAL_STATE, setActiveTab('Types'))).toEqual({
      ...MASTER_INITIAL_STATE,
      activeTabName: 'Types',
    });
  });

  it('setTabItem works well', () => {
    expect(MasterReducer(MASTER_INITIAL_STATE, setTabItem(mockedItem))).toEqual(
      {
        ...MASTER_INITIAL_STATE,
        selectedCategory: mockedItem,
      }
    );
  });

  it('setCategories works well', () => {
    expect(
      MasterReducer(
        MASTER_INITIAL_STATE,
        setCategories({ count: 1, data: [mockedItem] })
      )
    ).toEqual({
      ...MASTER_INITIAL_STATE,
      categories: { count: 1, data: [mockedItem] },
    });
  });
});
