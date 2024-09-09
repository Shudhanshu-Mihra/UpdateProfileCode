import { css } from 'styled-components';

import { styled } from 'styles/theme';

export const GRID_ROWS_STYLE = {
  member: css`
    grid-template-columns:
      minmax(50px, 55px) minmax(100px, 201px) minmax(175px, 240px) minmax(
        90px,
        135px
      )
      minmax(110px, 150px) minmax(130px, 135px) minmax(100px, 150px) minmax(110px, 170px);
  `,
  user: css`
    grid-template-columns:
      minmax(100px, 201px) minmax(175px, 240px) minmax(90px, 135px)
      minmax(110px, 150px) minmax(130px, 135px) minmax(100px, 150px) minmax(110px, 170px);
  `,
  company: css`
    grid-template-columns:
      minmax(55px, 65px) minmax(120px, 230px) minmax(111px, 170px)
      minmax(111px, 200px);
  `,
  companyUser: css`
    grid-template-columns:
      minmax(110px, 220px) minmax(111px, 170px)
      minmax(121px, 210px);
  `,
};

export type TGridRowsStyles = keyof typeof GRID_ROWS_STYLE;

export const TableSettingsStyles = {
  Head: styled.div<{
    rowStyle: TGridRowsStyles;
  }>`
    display: grid;
    ${(props) => props.rowStyle && GRID_ROWS_STYLE[props.rowStyle]};
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 18px;
  `,
  Actions: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.lightBlack};
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  `,
  Column: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    padding-left: 13px;
    &:last-child {
      border-right: none;
    }
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 50px;
    width: 100%;
  `,
};
