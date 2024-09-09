import { styled } from 'styles/theme';

export const SupplierTabStyles = {
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
  TableWrapper: styled.div`
    width: 100%;
  `,
  supplierScreenWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    flex: 1 0 auto;
  `,
  ActionPanelPlaceHolder: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    gap: 20px;  
  `,
};
