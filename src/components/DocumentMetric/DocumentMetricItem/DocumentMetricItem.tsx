import React from 'react';

import { Icon } from 'components/Icons/Icons';
import { getFirstLetterUppercase } from 'services/utils';

import { DocumentMetricItemStyles } from './DocumentMetricItem.style';

export interface DocumentMetricItemProps {
  status: TStatuses;
  count: number | null;
  onItemClick?: (event: React.MouseEvent<HTMLElement>) => void;
  maxWidth?: number;
}

export const DocumentMetricItem = (props: DocumentMetricItemProps) => {
  const { status, onItemClick, maxWidth, count } = props;

  const upperText = getFirstLetterUppercase(status);

  return (
    <DocumentMetricItemStyles.Wrapper
      data-testid="metric-item"
      statuses={status}
      onClick={onItemClick}
    >
      <DocumentMetricItemStyles.Content>
        <Icon type={status} maxWidth={maxWidth} />
        <DocumentMetricItemStyles.Numerics>
          {count || 0}
        </DocumentMetricItemStyles.Numerics>
      </DocumentMetricItemStyles.Content>
      <DocumentMetricItemStyles.Status>
        {upperText}
      </DocumentMetricItemStyles.Status>
    </DocumentMetricItemStyles.Wrapper>
  );
};
