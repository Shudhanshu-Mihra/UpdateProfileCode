import { styled } from 'styles/theme';

export const TypesTabStyles = {
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
  ActionPanelPlaceHolder: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    gap: 20px;  
  `,
  TableWrapper: styled.div`
    width: 100%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 15px 60px;
    flex: 1 0 auto;
  `,
};
