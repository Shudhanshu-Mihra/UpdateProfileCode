import { styled } from 'styles/theme';

export const ReceiptsSelectsStyles = {
  SelectorBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    min-width: 100px;
  `,
  SelectorWrapper: styled.div`
    width: 55%;
  `,
  SelectorTitle: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    margin-right: 35px;
  `,
};
