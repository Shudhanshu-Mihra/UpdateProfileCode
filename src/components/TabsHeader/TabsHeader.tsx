import { FC } from 'react';

import { TabsHeaderStyles as Styled } from './TabsHeader.style';

interface ITabsHeaderProps {
  tabsArray: string[];
  activeTab: string;
  onTabClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const TabsHeader: FC<ITabsHeaderProps> = (props) => {
  const { tabsArray, activeTab, onTabClickHandler } = props;
  return (
    <>
      <Styled.MainWrapper>
        <Styled.TabsWrapper>
          {tabsArray.map((tabItem) => {
            return (
              <Styled.TabsItem
                id={tabItem}
                key={tabItem}
                onClick={onTabClickHandler}
                isActive={activeTab === tabItem}
              >
                {tabItem}
              </Styled.TabsItem>
            );
          })}
        </Styled.TabsWrapper>
      </Styled.MainWrapper>
      <Styled.DivideHeader />
    </>
  );
};
