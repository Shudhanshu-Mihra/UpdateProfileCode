import { commonTextStyles } from 'components/Purchases/PurchaseTable.style';
import { styled } from 'styles/theme';

export const ExpenseDetailsContentStyles = {
  MainWrapper: styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    padding: 15px 15px 15px 15px;
    border-radius: 10px;
    border: 1px solid #0000001A;
    margin:10px;
    height:100vh;
  `,
  Wrapper: styled.div`
   width: 100%;
   display:flex;
   flex-direction:column;
    `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  InputFieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
  `,
  StatusBarWrapper: styled.div`
    margin-bottom: 30px;
  `,
  ChildrenWrapper: styled.div`
    max-width: 248px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
  `,
  Label: styled.p<{ isStatus?: boolean }>`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-left: 5px;
    display: flex;
    align-items: center;
  `,
  FlexContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  ContentContainer: styled.div`
    flex-grow: 1;
    overflow-y: auto;
  `,
  ButtonsBoxWrapper: styled.div`
    margin-top: 20px;
  `,
  TextWrapper : styled.div`
  line-height: 30px;
  font-size:20px;
  font-family:Source Sans Pro;
  font-weight:600;
  `,
  MainContent: styled.div`
     ${commonTextStyles}
  `,
};

