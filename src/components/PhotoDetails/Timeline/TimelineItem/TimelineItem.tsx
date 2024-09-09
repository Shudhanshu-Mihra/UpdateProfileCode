import React from 'react';

import { TimelineItemStyles } from './TimelineItem.style';
import { Icon } from '../../../Icons/Icons';

export const TimelineItem = () => (
  <TimelineItemStyles.Box>
    <Icon type="checkmark" />
    <TimelineItemStyles.TextWrapper>
      <TimelineItemStyles.TextContent>Text</TimelineItemStyles.TextContent>
      <TimelineItemStyles.TextContent>Text</TimelineItemStyles.TextContent>
    </TimelineItemStyles.TextWrapper>
  </TimelineItemStyles.Box>
);
