import { useSelector } from 'react-redux';
import { IState } from 'services/redux/reducer';

import { getMetricsList } from './documentMetric.constants';

export const useDocumentMetricItemItemListState = () => {
  const {
    dashboard: { metric },
  } = useSelector((state: IState) => state);

  const metrics = getMetricsList(metric);
  
  return metrics;
};
