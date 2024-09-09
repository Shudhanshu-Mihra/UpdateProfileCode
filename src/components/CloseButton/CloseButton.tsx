import { FC } from 'react';

import { Icon } from 'components/Icons/Icons';

import { CloseButtonStyles as Styled } from './CloseButton.styles';

interface ICloseButtonProps {
  onClickHandler: () => void;
}

export const CloseButton: FC<ICloseButtonProps> = (props) => {
  const { onClickHandler } = props;

  return (
    <Styled.Button data-testid="button" onClick={onClickHandler}>
      <Icon type="closeWindow" />
    </Styled.Button>
  );
};
