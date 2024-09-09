import { styled } from 'styles/theme';

export const ReceiptItemStyles = {
  Wrapper: styled.div`
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-sizing: border-box;
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    height: 45px;
    width: 100%;
    padding: 13px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Text: styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
  `,
};
