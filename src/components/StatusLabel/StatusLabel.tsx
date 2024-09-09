import { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { StatusLabelStyles } from './StatusLabel.style';

export interface IStatusLabelProps {
  text?: string;
  isDashboard?: boolean;
  status: TStatuses;
}

export const StatusLabel: FC<IStatusLabelProps> = (props) => {
  const { status, isDashboard } = props;

  const upperText = getFirstLetterUppercase(status);

  return (
    <StatusLabelStyles.Label color={status} isDashboard={isDashboard}>
      {upperText}
    </StatusLabelStyles.Label>
  );
};
