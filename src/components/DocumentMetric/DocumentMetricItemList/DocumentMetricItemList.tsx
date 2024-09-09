import { FC } from 'react';

import { DocumentMetricItem } from '../DocumentMetricItem/DocumentMetricItem';
import { DocumentMetricItemListStyles } from './DocumentMetricItemList.style';
import { useDocumentMetricItemItemListState } from './documentMetricItemItemList.state';

export const DocumentMetricItemList: FC = () => {
  const metrics = useDocumentMetricItemItemListState();
  return (
    <DocumentMetricItemListStyles.Wrapper>
      {metrics.map((item) => (
        <DocumentMetricItem
          key={item.metric}
          status={item.metric}
          count={item.count}
          maxWidth={item.metric === 'rejected' ? 18 : 24}
        />
      ))}
    </DocumentMetricItemListStyles.Wrapper>
  );
};
