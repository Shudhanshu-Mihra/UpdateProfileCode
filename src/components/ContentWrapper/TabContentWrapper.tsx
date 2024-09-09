import { FC } from 'react';
import { TabContentWrapperStyles as Styled } from './TabContentWrapper.style';

interface ITabContentWrapper {
  isActive: boolean;
  children: React.ReactChild | React.ReactNode;
}
export const TabContentWrapper: FC<ITabContentWrapper> = (props) => {
  const { children, isActive } = props;
  return <Styled.Content active={isActive}>{children}</Styled.Content>;
};
