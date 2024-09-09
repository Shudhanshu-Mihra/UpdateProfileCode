import { styled } from 'styles/theme';

export const ResetPasswordFormStyles = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
    max-height: 245px;
    height: 100%;
  `,
  InputWrapper: styled.div<{ isValid?: boolean }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  ButtonWrapper: styled.div`
    padding-top: 10px;
  `
};
