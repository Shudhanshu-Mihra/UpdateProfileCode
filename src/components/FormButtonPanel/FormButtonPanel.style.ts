import { styled } from 'styles/theme';

import {IFormButtonPanelStyle} from './FormButtonPanel';

export const FormButtonPanelStyles = {
  Wrapper: styled.div<IFormButtonPanelStyle>`
    width: 100%;
    height: 60px;
    display: flex;
    gap:20px;
    align-items: center;
    justify-content: space-between;
    position: ${(props) => props.position};
    z-index: 9;
    padding: ${(props) => props.padding ? props.padding : '0 15px'};
    bottom: ${(props) => props.bottom ? props.bottom : '0'};
    left: ${(props) => props.left ? props.left : '0'};
    right: ${(props) => props.right ? props.right : undefined};
    margin: ${(props) => props.margin ? props.margin : '0 0 0 0'};
    background-color: #fff;
    box-shadow:  0 -3px 10px #d2d2d2;
  `,
};
