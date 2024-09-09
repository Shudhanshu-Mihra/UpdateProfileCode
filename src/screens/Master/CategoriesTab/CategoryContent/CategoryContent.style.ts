import { styled } from 'styles/theme';

export const CategoryContentStyles = {
  TableWrapper: styled.div`
    width: 100%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    flex: 1 ;
  `,
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
};
