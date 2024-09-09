import { styled } from 'styles/theme';

export const TableSupplierStyles = {
  Head: styled.div`
    display: flex;
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    flex: 1;
    padding-left: 22px;
  `,
  Actions: styled.div`
    display: flex;
    align-items: center;
    max-width: 80px;
    min-width: 70px;
    width: 100%;
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    /* border-right: solid 1px ${(props) => props.theme.colors.borderWhite}; */
  `,
  Column: styled.div<{ width?: string }>`
    display: flex;
    flex: 1;
    align-items: center;
    width: ${(props) => (props.width ? `${props.width}px` : '180px')};
    /* border-right: solid 1px ${(props) => props.theme.colors.borderWhite}; */
    padding-left: 13px;
    &:last-child {
      border-right: none;
    }
    & button {
      cursor: default;
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
