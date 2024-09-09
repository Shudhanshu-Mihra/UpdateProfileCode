import { styled } from 'styles/theme';

export const ItemsCategoryStyle = {
  Item: styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: solid 1px ${(props) => props.theme.colors.borderWhite};
    min-height: 38px;
    max-height: fit-content;
    width: 100%;
    padding-left: 22px;
  `,
  Action: styled.div`
    display: flex;
    align-items: center;
    /* border-right: solid 1px ${(props) => props.theme.colors.borderWhite}; */
    max-width: 80px;
    min-width: 70px;
    width: 100%;
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
  Column: styled.div<{ width?: string }>`
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    /* border-right: solid 1px ${(props) => props.theme.colors.borderWhite}; */
    padding-left: 13px;
    display: flex;
    flex: 1;
    align-items: center;
    width: ${(props) => (props.width ? `${props.width}px` : '180px')};
    &:last-child {
      border-right: none;
    }
  `,
  NameWrapper: styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};
