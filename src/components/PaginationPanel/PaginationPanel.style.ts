import { styled } from 'styles/theme';

import {IPaginationCustomStyle} from './PaginationPanel';

export const PaginationPanelStyles = {
  Wrapper: styled.div<IPaginationCustomStyle>`
    width: 100%;
    height: 60px;
    display: flex;
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
  PagesWrapper: styled.div`
    width: max-conent;
  `,
  SelectorWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 130px;
  `,
};
