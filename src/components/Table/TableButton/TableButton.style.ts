import { styled } from 'styles/theme';

import { TableButtonProps } from './TableButton';

export const TableButtonStyles = {
  Button: styled.button<TableButtonProps>`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    color: ${(props) => props.theme.colors.lightBlack};
    background-color: transparent;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    cursor: pointer;
  `,
  Content: styled.div<{ isSorted?: boolean }>`
    display: flex;
    transform: ${({ isSorted }) => isSorted && 'rotate(180deg)'};
    transition: all 0.2s linear;
    &:not(:last-child) {
      margin-right: 5px;
    }
  `,
};
