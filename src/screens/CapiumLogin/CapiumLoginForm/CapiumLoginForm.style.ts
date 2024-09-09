import { styled } from 'styles/theme';

export const CapiumLoginForm = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
  ButtonWrapper: styled.div`
    margin-top: 29px;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,
  LabelWrapper: styled.div`
    display: flex;
    position: relative;
  `,
  IconWrapper: styled.div`
    display: flex;
    margin-left: 8px;
  `,
};
