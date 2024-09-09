import { styled } from 'styles/theme';

import { TABLE_GRID_MARKUP } from '../TableInboxAdmin.constants';

export const TableInboxAdminItemStyles = {
  // border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  // border-right: ${({ theme, isBorder }) => isBorder ? `solid 1px ${theme.colors.borderWhite}` : ''};

  Item: styled.div`
    display: grid;
    grid-template-columns: ${TABLE_GRID_MARKUP};
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 30px;
    max-height: fit-content;
    width: 100%;
    padding-block: 8px;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Link: styled.a`
    color: ${(props) => props.theme.colors.blue};
    margin-right: 3px;
  `,
  Checkbox: styled.div<{ isBorder?: boolean; isHidden?: boolean }>`
    display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    padding-left: ${({ isBorder }) => (isBorder ? '5px' : 0)};
    padding-right: 10px;
    
  `,
  View: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
    margin-right: 3px;
    padding-left: 9px;
  `,
  Selector: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-size: ${(props) => props.theme.size.default};
    padding-left: 9px;
  `,
  Status: styled.div`
    display: flex;
    align-items: center;
  `,
  ValueWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
