import { styled } from 'styles/theme';

export const ButtonsStyles = {
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // padding-bottom: 5px;
  `,
  ButtonsBox: styled.div<{ isNoPadding?: boolean; buttonPosition?: string; isCancelButton?: boolean; }>`
  display: flex;
    width: 100%;
    gap:20px;
    align-items:center;
    justify-content: ${({ buttonPosition }) =>
      buttonPosition ? buttonPosition : 'center'};
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0 30px 0 30px')};
  `,
};
