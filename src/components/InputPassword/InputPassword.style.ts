import { styled } from 'styles/theme';

export const Styled = {
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: ${(props) => props.theme.size.small};
  `,
  Input: styled.input<{ isError?: boolean }>`
    background-color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.normal};
    padding: 10px 40px 10px 10px;
    height: 40px;
    color: ${(props) => props.theme.colors.lightBlack};
    width: 100%;
    border-radius: 6px;
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.red}` : `none`};
    box-shadow: ${({ theme }) =>
      `0px 0px 5px ${theme.colors.boxShadowBlackButton}`};
    -webkit-appearance: none;
    &::-webkit-contacts-auto-fill-button,
    ::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.orange}`};
    }
  `,
  Button: styled.div`
    display: flex;
    background-color: transparent;
    position: absolute;
    top: 70%;
    transform: translateY(-50%);
    right: 13px;
    cursor: pointer;
  `,
  WrapperInput: styled.div`
    position: relative;
  `,
};
