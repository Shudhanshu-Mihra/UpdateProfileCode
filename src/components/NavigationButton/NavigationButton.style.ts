import { css } from 'styled-components';
import { styled } from 'styles/theme';
import { NavigationButtonProps } from './NavigationButton';

const THEME = {
  navigation: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${(props) => props.theme.colors.lightBlack};
  `,
  pagination: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
    padding: 0 2px 0 2px;
    margin: 0 10px 0 0;
  `,
  current: css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25px;
    padding: 7px;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    margin: 0 4px 0 0;
  `,
};

export const NavigationButtonStyles = {
  Button: styled.button<NavigationButtonProps>`
    display: flex;
    max-height: 25px;
    font-size: ${(props) => props.theme.size.default};
    ${(props) => props.themedButton && THEME[props.themedButton]};
    flex-direction: ${(props) => props.isReverse && 'row-reverse'};
    cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  `,
  Content: styled.div<{
    isReverse?: boolean;
    isWithoutArrow?: boolean;
    isArrow?: boolean;
    isDisabled?: boolean;
  }>`
    margin: ${({ isDisabled }) => isDisabled && '0 4px 0 0'};
    padding: ${({ isDisabled }) => isDisabled && '0 2px 0 2px'};
    color: ${({ theme }) => theme.colors.lightBlack};
    &:not(:last-child) {
      margin: ${({ isWithoutArrow }) => (isWithoutArrow ? '0' : '0 14px 0 0')};
      margin: ${({ isArrow }) => isArrow && '0 6px 0 6px'};
      margin: ${({ isReverse }) => isReverse && '0 0 0 14px'};
    }
  `,
  IconWrapper: styled.div<{
    isDisabled?: boolean;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
