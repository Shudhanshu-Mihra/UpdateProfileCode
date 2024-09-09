import { styled } from 'styles/theme';

export const InvoiceDatailsStyles = {
  MainWrapper: styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  MainFieldsWrapper: styled.div`
    box-shadow: ${({ theme }) =>
      `0px 0px 4px ${theme.colors.boxShadowPureBlack}`};
    border-radius: 10px;
    padding-bottom: 10px;
  `,
  TopLinesWrapper: styled.div`
    padding: 25px 0 0 21px;
  `,
  StatusRow: styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  StatusIconWrapper: styled.span`
    margin: 0 -5px 0 83px;
    display: flex;
    align-items: center;
  `,
  FieldsWrapper: styled.div`
    color: ${({ theme }) => theme.colors.lightBlack};
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-right: 57px;
  `,
  LeftFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-basis: 380px;
    margin-right: 10px;
  `,
  RightFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-basis: 340px;
  `,
  AddNewLine: styled.span`
    display: flex;
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlue};
    text-decoration: underline;
  `,
  BottomWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 25px 0 21px;
  `,
  PriceBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 120px;
  `,
  PriceBoxTitle: styled.span`
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    width: 100%;
  `,
};
