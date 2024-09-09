import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

export const useMasterState = () => {
  const {
    master: { activeTabName },
  } = useSelector((state: IState) => state);

  return activeTabName;
};
