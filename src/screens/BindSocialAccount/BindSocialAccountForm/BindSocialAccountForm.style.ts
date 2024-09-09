import { styled } from 'styles/theme';

export const BindSocialAccountFormStyles = {
  Form: styled.form`
    max-width: 500px;
    max-height: 546px;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      max-height: max-content;
      height: auto;
    }
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 10px;
  `,
  ButtonsWrapper: styled.div`
    margin-top: 25px;
  `,
  PasswordWrapper: styled.div`
    margin-bottom: 21px;
  `,
};
