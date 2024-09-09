import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { AvatarStyles } from './Avatar.style';

export const Avatar = () => (
  <AvatarStyles.Wrapper>
    <Icon type="avatar" width={30} height={30}/>
  </AvatarStyles.Wrapper>
);
