import { styled } from 'styles/theme';

export const TableStyles = {
  Head: styled.div<{ templateColumns: string }>`
    display: grid;
    grid-template-columns: ${({ templateColumns }) => templateColumns};
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 19px;
    padding-right: 9px;
  `,
  Checkbox: styled.div`
    display: flex;
    align-items: center;
    margin-right: 3px;
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
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    background-color: ${({ isSorted, theme }) =>
      isSorted && `${theme.colors.checkboxBackground}`};
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

export const TableItemStyles = {
  Item: styled.div<{ templateColumns: string }>`
    display: grid;
    grid-template-columns: ${({ templateColumns }) => templateColumns};
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 30px;
    max-height: fit-content;
    width: 100%;
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
    padding-left: ${({ isBorder }) => (isBorder ? '5px' : 0)};
    border-right: ${({ theme, isBorder }) =>
      isBorder ? `solid 1px ${theme.colors.borderWhite}` : ''};
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
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
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
