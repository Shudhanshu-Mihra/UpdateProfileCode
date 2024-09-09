import { Stats } from 'fs';
import { styled, theme, Z_INDEX } from 'styles/theme';

const TABLE_GRID_MARKUP = `
minmax(30px, 60px) minmax(max-content, auto) minmax(max-content, 400px)
minmax(100px, 150px);
`;
// const TABLE_GRID_MARKUP = `
// minmax(12px, 30px) minmax(60px, 70px) minmax(70px, 80px)
// minmax(100px, 150px) minmax(145px, 150px) minmax(100px, 130px)
// minmax(94px, 106px) minmax(60px, 75px) minmax(60px, 75px)
// minmax(60px, 75px) minmax(83px, 95px)
// minmax(60px, 65px) minmax(90px, 85px) minmax(100px, 95px) minmax(90px, 105px);
// `;

export const TableUploadViewStyles = {
  // border-right: solid 1px ${(props) => props.theme.colors.borderWhite};

  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  ActionPanelPlaceHolder: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    gap: 20px;  
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1 0 auto;
  `,
  TableWrapper: styled.div`
    position: relative;
    width: 100%;
  `,
  
  Head: styled.div`
    display: grid;
    grid-template-columns: ${TABLE_GRID_MARKUP};
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
  `,
  Text: styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    padding-left: 9px;
  `,
  Selector: styled.div<{ isSorted?: boolean }>`
    :hover {
      cursor: pointer;
    }
    padding-left: 10px;
    background-color: ${({ isSorted, theme }) =>
      isSorted && `${theme.colors.checkboxBackground}`};

    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.lightBlack};
    font-size: ${(props) => props.theme.size.default};
    padding-left: 9px;

    svg[fill] {
      fill: ${(props) => props.theme.colors.green}
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


  Item: styled.div`
    display: grid;
    grid-template-columns: ${TABLE_GRID_MARKUP};
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 45px;
    max-height: fit-content;
    width: 100%;
    padding-block: 8px;
    // padding-left: 19px;
    // padding-right: 9px;
  `,
  Link: styled.a`
    color: ${(props) => props.theme.colors.blue};
    margin-right: 3px;
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


  // title pannel
  Title: styled.div`
        font-size: 24px;
        font-weight: 600;
        padding: 0 8px;

        display: flex;
        align-items: center;
    `,
    Stats: styled.div`
        font-size: 18px;
        margin-left: auto;
        font-weight: initial;
    `,
    Stat: styled.span<{color: keyof typeof theme.colors}>`
        color: ${(props) => props.theme.colors[props.color]}
    `,
    Bar: styled.div`
        width: 100%;
        height: 5px;
        background-color: ${(props) => props.theme.colors.lighterBlue};
        margin-top: 6px;
    `,
    Progress: styled.div<{width?: number}>`
        height: 100%;
        width: ${(props) => props.width || '10'}%;
        background-color: ${(props) => props.width ? props.theme.colors.green: props.theme.colors.gray};
    `
};
