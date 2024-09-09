import { FC } from 'react';

import { Icon } from '../../Icons';

import { AvatarSubmenuStyles as Styled } from './AvatarSubmenu.style';

export const AvatarSubmenu: FC<IAvatarSubmenuLinks> = (props) => {
  const { menuItems } = props;

  return (
    <Styled.Wrapper>
      {menuItems?.map((item) => (
        <Styled.Item key={item.title} to={item.route} onClick={item.onClick}>
          <Styled.IconWrapper>
            <Icon type={item.iconName} />
          </Styled.IconWrapper>
          {item.title}
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};
