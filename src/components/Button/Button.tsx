import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { ButtonStyles } from './Button.style';
import { LoaderComponent } from '../Loader';

export type ButtonStyleProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconType?: 'google';
  children?: React.ReactNode;
  isDisabled?: boolean;
  isAccout?: boolean;
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  themedButton?: TButtonTheme;
  width:
  | 'auth'
  | 'primary'
  | 'secondary'
  | 'actions'
  | 'rounded'
  | 'roundedBig'
};

export const Button = ({
  themedButton,
  iconType,
  width,
  children,
  onClick,
  type,
  isDisabled,
  isLoading,
  isAccout
}: ButtonStyleProps) => {
  return (
    <ButtonStyles.Button
      type={type || 'button'}
      themedButton={themedButton}
      width={width}
      onClick={onClick}
      style={isAccout && isDisabled ? { opacity: 0.5 } : undefined}
      disabled={isDisabled}
    >
      {themedButton === 'capium' && (
        <ButtonStyles.Content>
          {!isLoading && <Icon type={iconType ? 'googleIcon' : 'capiumLogo'} />}
        </ButtonStyles.Content>
      )}
      {width === 'actions' && <Icon type="threeDots" fill="red" />}
      <ButtonStyles.Content>
        {isLoading ? (
          <LoaderComponent
            theme={themedButton === 'capium' || themedButton === 'roundedWhite' ? 'avatarMin' : ''}
          />
        ) : (
          children
        )}
      </ButtonStyles.Content>
    </ButtonStyles.Button>
  );
};
