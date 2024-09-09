import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { styled } from 'styles/theme';

const INPUT_THEME: Record<string, FlattenInterpolation<ThemeProps<any>>> = {
  search: css`
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.checkboxBorder};
    padding-left: 28px;
    padding-right: 4px;
    height: 40px;
    width: 200px;
    box-shadow: none;
  `,
};

export const Styled = {
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    line-height:3;
  `,
  Input: styled.input<{
    isError?: boolean;
    inputHeight?: string;
    inputTheme?: string;
    isDisabled?: boolean;
    isRemoveBoxShadow?: boolean;
    isRemoveBorder?: boolean;
  }>`
    line-height: 1.3;
    font-size: ${(props) => props.theme.size.default};
    padding: 10px;
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.lightGray : theme.colors.white};
    height: ${(props) => props.inputHeight || '40px'};
    width: 100%;
    box-sizing: border-box;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.lightBlack};
    border: ${({ isError, theme, isRemoveBorder }) =>
      isError
        ? `1px solid ${theme.colors.red}`
        : isRemoveBorder
        ? 'none'
        : `1px solid ${theme.colors.checkboxBorder}`};
    box-shadow: ${({ theme, isRemoveBoxShadow }) =>
      isRemoveBoxShadow
        ? 'none'
        : `0px 0px 5px ${theme.colors.boxShadowBlackButton}`};
    ${(props) => props.inputTheme && INPUT_THEME[props.inputTheme]}
    -webkit-appearance: none;
    &::-webkit-contacts-auto-fill-button,
    ::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }
    ::placeholder {
      color: ${(props) => props.theme.colors.lightBlack};
    }
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.darkRed}`};
    }
  `,
  TextArea: styled.textarea<{ inputHeight?: string }>`
    font-size: ${(props) => props.theme.size.default};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    height: ${(props) => props.inputHeight || '50px'};
    width: 100%;
    border-radius: 6px;
    border: none;
    box-shadow: ${({ theme }) =>
      `0px 0px 5px ${theme.colors.boxShadowBlackButton}`};
    resize: none;
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.darkRed}`};
    }
  `,
  InputWrapper: styled.div<{ isNoMargin?: boolean }>`
    width: 100%;
    position: relative;
  `,
  InputExpenseWrapper: styled.div<{ isNoMargin?: boolean }>`
  width: 100%;
  position: relative;
`,
};
