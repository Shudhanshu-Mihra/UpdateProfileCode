import React from 'react';
import baseStyled, {
  ThemedStyledInterface,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import styledNormalize from 'styled-normalize';

interface Props {
  children: React.ReactNode;
}

export const COLORS = {
  lighterGrey: '#F5F5F7',
  lighterBlue: '#0092DB1A',
  lightRed: '#FF525233',
  darkRed: '#DF1C29',
  lemon: '#A3BD424D',
  yellow: '#FAA94D4D',
  lightBlue: '#00A3FF',
  blue: '#1F8FEB',
  mango: '#FAA94D',
  darkyellow:'#DC9F10',
  lightGreen: '#EBFFD8',
  swampGreen: '#A3BD42',
  green: '#5FAD00',
  red: '#FD3E5B',
  pink: 'rgba(255, 82, 82, 0.1)',
  lightGray: '#F2F2F2',
  whiteGray: '#E5E5E5',
  gray: '#C4C4C4',
  borderWhite: '#E1E8EE',
  darkGray: '#5E5E5E',
  softGray: '#BFBFBF',
  orange: '#FF5252',
  white: '#ffffff',
  checkboxBorder: '#A5B1BE',
  checkboxBackground: '#F0F3F6',
  hoveredCheckbox: '#F5F5F5',
  black: '#222B38',
  lightBlack: '#404A5F',
  transparentOrange: 'rgba(255, 82, 82, 0.6)',
  opacityBlack: 'rgba(34, 43, 56, 0.1)',
  boxShadowPureBlack: 'rgba(0, 0, 0, 0.25)',
  boxShadowBlack: 'rgba(34, 43, 56, 0.25)',
  boxShadowBlackButton: 'rgba(0, 0, 0, 0.2)',
  halfTranparentBlack: 'rgba(34, 43, 56, 0.5)',
  overlay: 'rgba(64, 74, 95, 0.5)',
  googleOverlay: 'rgba(64, 74, 95, 0.05)',
  metricBoxShadow: '0px 0px 5px rgb(0 0 0 / 30%)',
};

export const Z_INDEX = {
  minus: -1,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xxl: 9,
  xxxl: 10,
  max: 15,
};

export const theme = {
  colors: { ...COLORS },
  fontWeight: {
    semiBold: 600,
    bold: 700,
    medium: 500,
    normal: 400,
  },
  size: {
    borderRadius: '5px',
    xnormal: '16px',
    normal: '15px',
    default: '14px',
    medium: '18px',
    mediumSmall: '13px',
    biggerSmall: '12px',
    small: '10px',
    ultraSmall: '7px',
    subTitle: '22px',
    title: '24px',
    mediumLarge: '20px',
    big: '32px',
  },
  font: {
    fontName: 'Source Sans Pro',
  },
  zIndex: {
    ...Z_INDEX,
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

const GlobalStyle = createGlobalStyle`
${styledNormalize}

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  * {
    ::-webkit-scrollbar
    {
      width: 2px;
      height: 2px;
      background-color: inherit;
    }
    ::-webkit-scrollbar-thumb
    {
      width: 2px;
      height: 2px;
      border-radius: 10px;
      background-color: #dadada;
    }
    user-select: none;
    text-decoration: none;
    outline: none;
  }
  input,textarea {
    user-select: all;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }
  
  #root {
    min-height: 100%;
  }
  html {
    min-height: 100%;
  }

  body {
    width: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    min-height: 100vh;
    margin: 0 auto;
    line-height: 1.2;
    background-color: #fff;
    font-family: 'Source Sans Pro';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    line-height: 0;
  }
  
  .no-evt * {
    pointer-events: none !important;
  }
  .google-visualization-tooltip-item * {
    color: white !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .google-visualization-tooltip-item::first-letter{
    font-weight: 900
  }
  .google-visualization-tooltip-item {
    padding: 0 0 0 10px  !important;
  }
  .google-visualization-tooltip {
    background-color: #151515 !important;
    min-width: 135px !important;
  }

  button {
    border: none;
    cursor: pointer;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};
