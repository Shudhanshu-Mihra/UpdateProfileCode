import { styled } from 'styles/theme';

export const TableInvitesItemStyles = {
  Item: styled.div`
    display: grid;
    grid-template-columns:
      minmax(55px, 65px) minmax(175px, 240px) minmax(130px, 180px)
      minmax(110px, 200px) minmax(90px, 170px)
      minmax(111px, 200px);
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    height: 50px;
    width: 100%;
    padding-left: 18px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  `,
  ActionButton: styled.div<{ isDisabled: boolean }>`
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
  ValueWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
