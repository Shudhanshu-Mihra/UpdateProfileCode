import { styled } from 'styles/theme';

export const ReceiptDetailsHeaderStyles = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 55px;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    padding: 0 35px;
  `,
  BackWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  BoxWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 125px;
  `,
  RightButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
    width: 220px;
  `,
  ButtonText: styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.normal};
    color: ${({ theme }) => theme.colors.halfTranparentBlack};
  `,
  ReceiptNumber: styled.span`
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.normal};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
};
