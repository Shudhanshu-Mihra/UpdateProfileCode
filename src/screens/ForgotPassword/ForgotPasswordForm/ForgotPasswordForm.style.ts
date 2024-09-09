import { styled } from 'styles/theme';

export const ForgotPasswordFormStyles = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
  Description: styled.p`
    bottom: -18px;
    left: 0;
    position: absolute;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.biggerSmall};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: 1.3;
  `,
  InputWrapper: styled.div`
    position: relative;
  `,
  ButtonWrapper: styled.div`
    padding-top: 21px;
  `,
};
