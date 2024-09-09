import { styled } from 'styles/theme';

import { GRID_ROWS_STYLE, TGridRowsStyles } from '../TableSettings.style';

export const TableSettingsItemStyles = {
  Item: styled.div<{ isCompanyTable?: boolean; rowStyle?: TGridRowsStyles }>`
    display: grid;
    ${({ rowStyle }) => rowStyle && GRID_ROWS_STYLE[rowStyle]};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    height: 30px;
    width: 100%;
    padding-left: 18px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  `,
  ActionButton: styled.div<{ isDisabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 9px;
    }
    ${({ isDisabled, theme }) =>
      isDisabled &&
      `& path {
        fill: ${theme.colors.borderWhite};
      }
      pointer-events: none;
      cursor: default;
    `}
  `,
  Column: styled.div`
    font-size: ${(props) => props.theme.size.default};
    display: flex;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.colors.lightBlack};
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    padding-left: 13px;
    &:last-child {
      border-right: none;
    }
  `,
  TextWrapper: styled.span<{ isExpired?: boolean }>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    ${({ isExpired, theme }) =>
      isExpired && `cursor: pointer; color: ${theme.colors.blue};`}
  `,
};
