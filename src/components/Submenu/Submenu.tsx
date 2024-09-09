import { FC } from 'react';

import { SubmenuStyles as Styled } from './Submenu.styles';
import { useSubMenuState } from './Submenu.state';

interface ISubmenuProps {
  menuItems?: string[];
}
export const Submenu: FC<ISubmenuProps> = (props) => {
  const { menuItems } = props;

  
  const { activeTabName, isTooltip, onClickTabHandler } = useSubMenuState();
  return (
    <Styled.Wrapper isTooltip={isTooltip}>
      {menuItems?.map((item) => (
        <Styled.Item
          key={item}
          id={item}
          isActive={item === activeTabName}
          onClick={onClickTabHandler}
        >
          {item}
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};
