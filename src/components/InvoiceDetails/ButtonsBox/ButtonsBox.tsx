import { FC } from 'react';

import { Button } from '../../Button';

import { ButtonsBoxStyles as Styled } from './ButtonsBox.style';

export const ButtonsBox: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.LeftButtonsWrapper>
        <Button themedButton={'roundedWhite'} width={'rounded'}>
          Archive
        </Button>
        <Button themedButton={'roundedWhite'} width={'rounded'}>
          Reject
        </Button>
      </Styled.LeftButtonsWrapper>
      <Styled.RightButtonsWrapper>
        <Button themedButton={'roundedRed'} width={'roundedBig'}>
          Approved & Save
        </Button>
        <Button themedButton={'roundedWhite'} width={'rounded'}>
          Reject
        </Button>
        <Button themedButton={'roundedWhite'} width={'rounded'}>
          Reject
        </Button>
      </Styled.RightButtonsWrapper>
    </Styled.Wrapper>
  );
};
