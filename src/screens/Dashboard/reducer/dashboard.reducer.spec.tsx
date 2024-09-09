import { mockedReceipts } from '../../Inbox/inbox.constants';

import {
  dashboardReducer,
  DASHBOARD_INITIAL_STATE,
  setStatistic,
} from './dashboard.reducer';

const mockedPayload = {
  companies: [],
  metric: { accepted: null, rejected: 1, processing: 2, review: 3 },
  receipts: { count: mockedReceipts.length, data: mockedReceipts },
};

describe('Dashboard reducer', () => {
  it('setIsFetchingDate works well', () => {
    expect(
      dashboardReducer(DASHBOARD_INITIAL_STATE, setStatistic(mockedPayload))
    ).toEqual(mockedPayload);
  });
});
