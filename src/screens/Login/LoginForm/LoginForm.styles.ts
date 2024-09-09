import { Link } from 'react-router-dom';

import { styled } from 'styles/theme';

export const Styled = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
    max-height: 420px;
    height: 100%;
    @media (max-width: 768px) {
      max-height: max-content;
      height: auto;
    }
  `,
  ForgotPassword: styled.div`
    display: flex;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: ${({ theme }) => theme.size.default};
    cursor: pointer;
    text-decoration: underline;
    margin: 20px 0;
  `,
  SignUpLink: styled.div`
    display: flex;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
  `,
  Text: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
  `,
  SignUpText: styled(Link)`
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.darkRed};
    text-decoration: underline;
    margin-left: 4px;
    cursor: pointer;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 10px;
  `,
  loginWraper: styled.div`
  flex-direction:column;
  display:flex;
  gap:20px;`,
};
