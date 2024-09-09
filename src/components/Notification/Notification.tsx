import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { NotificationStyles } from './Notification.style';

export const Notification = () => (
  <NotificationStyles.Wrapper>
    <Icon type='notification' />
  </NotificationStyles.Wrapper>
);
