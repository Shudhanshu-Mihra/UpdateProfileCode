import { styled } from 'styles/theme';

export const MasterStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  ContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 100%;
  `,
  TabContent: styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    flex: 1;
  `,
};
