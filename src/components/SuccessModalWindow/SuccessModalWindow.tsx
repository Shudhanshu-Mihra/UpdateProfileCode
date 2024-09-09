import { FC } from 'react';
import ReactModal from 'react-modal';

import { Button } from '../Button';
import { Icon } from '../Icons';
import {
  SuccessModalStyles,
  SuccessModalWindowStyle as Styled,
} from './SuccessModalWindow.style';

interface ISuccessModalWindowProps {
  text: string;
  onCloseModalWindowHandler: () => void;
  isExpiredToken?: boolean;
  isModalWindowOpen: boolean;
}

export const SuccessModalWindow: FC<ISuccessModalWindowProps> = (props) => {
  const { text, isModalWindowOpen, isExpiredToken, onCloseModalWindowHandler } =
    props;
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isModalWindowOpen}
      style={SuccessModalStyles}
      onRequestClose={onCloseModalWindowHandler}
    >
      <Styled.ContentWrapper data-testid="success-modal">
        {isExpiredToken ? (
          <Styled.IconWrapper>
            <Icon type="warning" />
          </Styled.IconWrapper>
        ) : (
          <Styled.Circle>
            <Styled.Checkmark />
          </Styled.Circle>
        )}
        <Styled.Label>{text}</Styled.Label>
        <Button
          themedButton="primary"
          width="primary"
          onClick={onCloseModalWindowHandler}
        >
          Got it
        </Button>
      </Styled.ContentWrapper>
    </ReactModal>
  );
};
