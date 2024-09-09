import React from 'react';

import { ButtonsBox } from '../ButtonsBox';
import { TimelineStyles } from './Timeline.style';
import { TimelineItem } from './TimelineItem/TimelineItem';

export const Timeline = () => (
  <TimelineStyles.Wrapper>
    <TimelineItem />
    <ButtonsBox />
  </TimelineStyles.Wrapper>
);
