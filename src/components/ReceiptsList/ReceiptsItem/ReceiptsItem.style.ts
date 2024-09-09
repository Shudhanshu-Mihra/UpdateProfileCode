import { styled } from 'styles/theme';

export const ReceiptsItemStyles = {
  Wrapper: styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 3px 19px 7px 21px;
    border: 1px solid ${({ theme }) => theme.colors.opacityBlack};
    box-shadow: 0px 1px 1px ${({ theme }) => theme.colors.boxShadowBlack};
    border-radius: ${({ theme }) => theme.size.borderRadius};
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  `,
  PaymentBlock: styled.div``,
  StatusBlock: styled.div`
    text-align: end;
    padding-top: 16px;
  `,
  SupplierItem: styled.div`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    padding-top: 6px;
    padding-bottom: 6px;
  `,
  Item: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    padding-top: 10px;
  `,
};
