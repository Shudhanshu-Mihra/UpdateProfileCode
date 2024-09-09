import { styled } from 'styles/theme';

export const AuthTabsStyles = {
  TabsWrapper: styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
    @media (max-width: 1366px) {
      margin-bottom: 20px;
    }
  `,
  ActiveTabWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  `,
  ActiveLine: styled.div`
    height: 2px;
    background: ${({ theme }) => theme.colors.darkRed};
    border-radius: 10px;
  `,
  Tab: styled.div<{ isActive?: boolean }>`
    display: flex;
    font-weight: ${({ isActive, theme }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.darkRed : theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.title};
    cursor: ${({ isActive }) => !isActive && 'pointer'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 7px;
    position: relative;
    &::before {
      ${({ theme, isActive }) =>
        isActive &&
        `
        position: absolute;
        content: '';
        bottom: 0;
        width: 100%;
        height: 3px;
        background: ${theme.colors.darkRed};
        border-radius: 10px;`}
    }
  `,
};
