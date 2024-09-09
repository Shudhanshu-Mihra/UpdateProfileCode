import { styled } from 'styles/theme';

export const TabsHeaderStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
  `,
  TabsWrapper: styled.div`
    display: flex;
    position: absolute;
    left: 416px;
  `,
  DivideHeader: styled.div`
    width: 100%;
    height: 15px;
    background: ${({ theme }) => theme.colors.gray};
  `,
  TabsItem: styled.div<{ isActive?: boolean }>`
    display: flex;
    position: relative;
    cursor: pointer;
    margin-right: 30px;
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme, isActive }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.orange : theme.colors.black};
    padding-bottom: 5px;
    &::before {
      ${({ theme, isActive }) =>
        isActive &&
        `
        position: absolute;
        content: '';
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${theme.colors.orange};
        border-radius: 10px;`}
    }
  `,
};
