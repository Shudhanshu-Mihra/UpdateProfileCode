import React from 'react';

import { theme } from 'styles/theme';
import { Icon } from 'components/Icons/Icons';

import { NavigationButtonStyles } from './NavigationButton.style';

export type NavigationButtonProps = {
  iconBehavior?: 'iconPrevious' | 'iconNext' | 'iconBack' | 'iconForward';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  isReverse?: boolean;
  isWithoutArrow?: boolean;
  isArrow?: boolean;
  isDisabled?: boolean;
  themedButton?: 'navigation' | 'pagination' | 'current';
};

export const NavigationButton = ({
  themedButton,
  children,
  isReverse,
  isWithoutArrow,
  isArrow,
  isDisabled,
  onClick,
  iconBehavior,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonStyles.Button
      themedButton={themedButton}
      isReverse={isReverse}
      onClick={onClick}
      isWithoutArrow={isWithoutArrow}
      isArrow={isArrow}
      isDisabled={isDisabled}
      data-testid="navigation-button"
    >
      <NavigationButtonStyles.Content
        isReverse={isReverse}
        isWithoutArrow={isWithoutArrow}
        isArrow={isArrow}
        isDisabled={isDisabled}
      >
        <>
          {iconBehavior === 'iconPrevious' && themedButton === 'navigation' && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}

          {iconBehavior === 'iconBack' && isDisabled && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
              <Icon type="arrowLeft" fill={theme.colors.halfTranparentBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
          {iconBehavior === 'iconPrevious' && themedButton === 'pagination' && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowLeft" fill={theme.colors.lightBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}

          {iconBehavior === 'iconBack' && !isDisabled && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowLeft" fill={theme.colors.lightBlack} />
              <Icon type="arrowLeft" fill={theme.colors.lightBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
          {iconBehavior === 'iconNext' && themedButton === 'navigation' && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
          {iconBehavior === 'iconForward' && isDisabled && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
              <Icon type="arrowRight" fill={theme.colors.halfTranparentBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
          {iconBehavior === 'iconNext' && themedButton === 'pagination' && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowRight" fill={theme.colors.lightBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
          {iconBehavior === 'iconForward' && !isDisabled && (
            <NavigationButtonStyles.IconWrapper>
              <Icon type="arrowRight" fill={theme.colors.lightBlack} />
              <Icon type="arrowRight" fill={theme.colors.lightBlack} />
            </NavigationButtonStyles.IconWrapper>
          )}
        </>
      </NavigationButtonStyles.Content>
      <NavigationButtonStyles.Content>
        {children}
      </NavigationButtonStyles.Content>
    </NavigationButtonStyles.Button>
  );
};
