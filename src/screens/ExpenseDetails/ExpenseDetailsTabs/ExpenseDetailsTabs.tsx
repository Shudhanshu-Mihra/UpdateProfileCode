import React, { FC } from 'react';
import { ExpenseDetailsTabsStyles as Styled } from './ExpenseDetailsTabs.styles';

interface ExpenseDetailsTabsProps {
  activeTab: 'reportDetails' | 'history';
  setActiveTab: React.Dispatch<React.SetStateAction<'reportDetails' | 'history'>>;
}

export const ExpenseDetailsTabs: FC<ExpenseDetailsTabsProps> = ({ activeTab, setActiveTab }) => (
  <Styled.TabsWrapper>
    <Styled.Tab
      isActive={activeTab === 'reportDetails'}
      onClick={() => setActiveTab('reportDetails')}
    >
      Report Details
      {activeTab === 'reportDetails' && <Styled.ActiveLine />}
    </Styled.Tab>
    <Styled.Tab
      isActive={activeTab === 'history'}
      onClick={() => setActiveTab('history')}
    >
      History
      {activeTab === 'history' && <Styled.ActiveLine />}
    </Styled.Tab>
  </Styled.TabsWrapper>
);
