import { IMetric } from 'screens/Dashboard/types';

interface IMetrics {
  metric: 'processing' | 'review' | 'accepted' | 'rejected';
  title: string;
  count: number | null;
}

export const getMetricsList = (metric: IMetric): IMetrics[] => {
  return [
    {
      metric: 'processing',
      title: 'Processing',
      count: metric.processing,
    },
    {
      metric: 'review',
      title: 'Review',
      count: metric.review,
    },
    {
      metric: 'accepted',
      title: 'Accepted',
      count: metric.accepted,
    },
    {
      metric: 'rejected',
      title: 'Rejected',
      count: metric.rejected,
    },
  ];
};
