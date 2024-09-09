import { styled, Z_INDEX } from 'styles/theme';

export const SuccessPopupStyles = {
  Wrapper: styled.div<{ positionTop?: string }>`
    padding: 12px 19px;
    background: ${({ theme }) => theme.colors.swampGreen};
    border-radius: 5px 0px 0px 5px;
    position: absolute;
    right: 0;
    z-index: ${Z_INDEX.s};
    top: ${({ positionTop }) => `${positionTop}px` || '56px'};
    max-width: 290px;
    width: 100%;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.colors.lightGray};
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
  `,
};
