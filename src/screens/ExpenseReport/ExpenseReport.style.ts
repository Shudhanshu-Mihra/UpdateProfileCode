import { styled } from 'styles/theme';

export const ExpenseReportStyles = {
  TableWrapper: styled.div`
    width: 100%;
  `,

  // --------------------------------------->
  ReportListContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 15px 60px;
    flex: 1 0 auto;
  `,
  ActionPanelPlaceHolder: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    gap: 20px;  
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    flex: 1 0 auto;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
};
