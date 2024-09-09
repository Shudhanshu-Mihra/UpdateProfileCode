import { css } from 'styled-components';

import { styled } from 'styles/theme';

import { ButtonStyleProps } from './Button';

const THEME = {
  primary: css`
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.black};
  `,
  threeDots: css`
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.checkboxBorder};
    box-shadow: none;
  `,
  capium: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
    border: 1px solid rgba(34, 43, 56, 0.2);
  `,
  roundedRed: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50px;
  `,
  roundedWhite: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkRed};
    border: ${(props) => `1px solid ${props.theme.colors.darkRed}`};
    border-radius: 50px;
    box-shadow: none;
  `,
};

const WIDTH = {
  auth: css`
    width: 100%;
  `,
  primary: css`
    width: auto;
    border-radius:6px;
  `,
  secondary: css`
    width: 100px;
  `,
  actions: css`
    width: 40px;
    height: 40px;
  `,
  rounded: css`
    min-width: 100px;
    width: max-content;
    height: 40px;
  `,
  roundedBig: css`
    width: max-content;
    height: 40px;
    box-shadow: none;
  `,
};

export const ButtonStyles = {
  Button: styled.button<ButtonStyleProps>`
    font-size: ${(props) => props.theme.size.default};
    height: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    width: max-content;
    box-shadow: ${(props) =>
      `0px 0px 5px ${props.theme.colors.boxShadowBlackButton}`};
    background-color: ${(props) => props.theme.colors.lightGray};
    ${(props) => props.themedButton && THEME[props.themedButton]};
    // ${(props) => props.width && WIDTH[props.width]};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.8 : 1)};
    // margin-right:10px;
    padding: 10px 20px;
  `,
  Content: styled.div`
    display: flex;
    justify-content: center;
    &:not(:last-child) {
      margin-right: 14px;
    }
  `,
};
