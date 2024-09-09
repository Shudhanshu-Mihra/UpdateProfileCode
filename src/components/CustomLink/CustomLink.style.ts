import { styled } from 'styles/theme';

import { Link, PathMatch } from 'react-router-dom';

export const CustomLinkStyles = {
  Link: styled(Link) <{
    active: PathMatch<string> | null;
    is_last?: string;
    // is_sales: boolean;
    is_disabled?: string;
  }>`
    position: relative;
    width: max-content;
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) =>
      props.active
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.normal};
    background-color: ${(props) =>
      props.active ? props.theme.colors.white : ''};
      & svg {
        margin: 2px 8px 0 0; 
        fill: ${(props) =>
          props.active ? props.theme.colors.darkRed : ''};
      }
    color: ${(props) =>
      props.active ? props.theme.colors.darkRed : props.theme.colors.lightGray};
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
    border-radius: 0px;
  `,
  };
    /* svg: styled(svg) <{
      active: PathMatch<string> | null;
      is_last?: string;
      is_sales?: boolean;
      is_disabled?: string;
    }>`
      margin: 5px 10px 0 0;
      ` */
