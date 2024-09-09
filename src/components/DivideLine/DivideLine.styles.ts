import { styled } from 'styles/theme';

export const DivideLineStyles = {
  Line: styled.div<{ isAuth?: boolean; isSignUp?: boolean }>`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.whiteGray};
    margin: ${({ isAuth, isSignUp }) =>
      isAuth ? '10px 0 0 0' : isSignUp ? '5px 0 5px 0' : '25px 0'};
  `,
};
