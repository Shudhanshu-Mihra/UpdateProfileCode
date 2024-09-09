import styled from 'styled-components';

export const ExpenseDetailsTabsStyles = {
  TabsWrapper: styled.div`
    display: flex;
    margin: 8px 0;
    gap: 20px; /* Adds space between the tabs */
  `,
  ActiveLine: styled.div`
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  `,
  Tab: styled.div<{ isActive?: boolean }>`
    display: flex;
    position: relative;
    font-weight: ${({ isActive, theme }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.darkRed : theme.colors.black};
    font-size: ${({ theme }) => theme.size.default};
    cursor: pointer;
    padding-bottom: 7px;
    &::before {
      content: ${({ isActive }) => (isActive ? "''" : 'none')};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.darkRed};
    }
  `,
};
