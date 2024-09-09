import { styled } from 'styles/theme';

export const SalesInvoicesStyles = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 15px 60px;
    flex: 1 0 auto;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  ActionPanelPlaceHolder: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    gap: 20px;  
  `,
};
