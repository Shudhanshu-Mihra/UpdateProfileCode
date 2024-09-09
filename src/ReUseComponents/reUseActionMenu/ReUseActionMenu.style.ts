import { styled } from 'styles/theme';
import { css } from 'styled-components';
import { Link } from "react-router-dom";

import { IReUseActionMenuProps } from './ReUseActionMenu';

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

interface custom extends Omit<IReUseActionMenuProps, 'showActionMenuList' | 'actionListArray'> {}

export const reUseActionMenuStyle = {
  Button: styled("button")<custom>`
  position: relative;
  font-size: ${(props) => props.fontSize};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  border-radius: 6px;
  // border: ${(props) => (props.disabled ? 'none' : `1px solid ${props.theme.colors.checkboxBorder}`)};
  border: ${(props) => `1px solid ${props.theme.colors.checkboxBorder}`};
  width: ${(props) => props.customWidth ? props.customWidth : `max-content`};
  min-width: max-content;
  // box-shadow: ${(props) => `0px 0px 5px ${props.theme.colors.boxShadowBlackButton}`};
  box-shadow: none;
  background-color: ${(props) => (!props.disabled ? props.theme.colors.white : props.theme.colors.lighterGrey)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding-inline: ${(props) => props.paddingInline && !props.customWidth ? props.paddingInline : "0px"};
  text-align: center;
  flex: 0 0 ${(props) => props.customWidth ? props.customWidth : `max-content`};
  margin: ${(props) => props.margin};
  height: 40px;
  svg {
    stroke: ${(props) => (!props.disabled ? props.theme.colors.red : props.theme.colors.darkGray )}; 
    fill: ${(props) => props.theme.colors.red}; 
    height: 13px;
    width: auto;
  }
  `,

displayContent: styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  `,
};
  // opacity: ${(props) => (props.disabled ? 0.8 : 1)};

// ${(props) => props.themedButton && THEME[props.themedButton]};
    // ${(props) => props.widthType && WIDTH[props.widthType]};

  // padding-block: ${(props) => props.paddingBlock ? props.paddingBlock : "12px"};

  // BtnLink: styled(Link)`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 100%;
  //   height: 100%;
  //   padding-inline: ${(props) => props.paddingInline ? props.paddingInline : "0px"};
  //   // padding-inline: ${(props) => props.paddingInline && !props.customWidth ? props.paddingInline : "0px"};
  //   font-size: inherit;
  //   color: inherit;
  // `,
