import { Link } from 'react-router-dom';

import { styled } from 'styles/theme';

export const SignUpFormStyles = {
  loginWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    margin-bottom:20px;
  `,
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
  ForgotPassword: styled(Link)`
    display: flex;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: ${({ theme }) => theme.size.default};
    cursor: pointer;
    text-decoration: underline;
    margin: 20px 0;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 10px;
  `,
};
