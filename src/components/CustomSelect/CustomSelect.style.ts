import Select from 'react-select';
import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { styled } from 'styles/theme';

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all 0.2s linear;
`;
export const SelectWrapper = styled.div`
  width: 100%;
`;
export const SelectLabel = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 10px;
`;
export const StyledReactSelect = styled(Select)<{
  marginBottom?: string;
  height?: string;
  width?: string;
  paginate?: boolean;
  isFullWidth?: boolean;
  isRemoveBorder?: boolean;
}>`
  .Select__control {
    font-size: ${({ theme }) => theme.size.default};
    background: ${(props) => props.theme.colors.white};
    border: ${({ theme, isRemoveBorder }) =>
      isRemoveBorder ? 'none' : `1px solid ${theme.colors.checkboxBorder}`};
    box-sizing: border-box;
    box-shadow: ${({ theme, paginate }) =>
      paginate ? 'none' : `0px 0px 5px ${theme.colors.boxShadowBlackButton}`};
    border-radius: 6px;
    width: 100%;
    min-width: ${({ width }) => (width ? width : '50px')};
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '500px')};
    max-height: ${({ isMulti }) => (isMulti ? '100%' : '40px')};
    min-height: ${({ isMulti }) => (isMulti ? '40px' : '39.2px')};
    height: ${({ height, isMulti }) =>
      isMulti ? 'auto' : height ? `${height}px` : '100%'};
    cursor: pointer;
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${marginBottom}px` : ''};
  }
  .Select__control--is-focused {
    font-size: ${({ theme }) => theme.size.default};
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.colors.darkRed}`};
  }
  .Select__control--is-focused:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.darkRed}`};
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__control--is-disabled {
    background: ${({ theme }) => theme.colors.lighterGrey};
  }
  .Select__menu {
    width: 100%;
    max-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '500px')};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightBlack};
    padding: 3px 5px;
    font-size: ${({ theme }) => theme.size.default};
    margin-top: 1px;
  }
  .Select__menu-list{
    height: max-content;
  }
  .Select__option {
    border-radius: 5px;
    margin: 3px 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
  }
  .Select__option--is-selected {
    background: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
  .Select__option:hover {
    background: ${({ theme }) => theme.colors.pink};
  }
  .Select__indicators {
    padding-right: 5px;
  }
  .Select__single-value {
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
  .css-b62m3t-container {
    height: 100% !important;
  }
  .Select__multi-value {
    width: 90px;
    height: 31px;
    background: ${({ theme }) => theme.colors.darkRed};
    box-shadow: ${({ theme }) =>
      `0px 1px 1px ${theme.colors.halfTranparentBlack}`};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    display: flex;
    justify-content: space-between;
  }
  .Select__multi-value__label {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    display: flex;
    align-items: center;
  }
  .Select__value-container--is-multi {
    overflow-y: auto;
  }
`;
