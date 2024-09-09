import { FC } from 'react';

import { getCorrectCustomId } from 'services/utils';

import { NavigationButton } from '../NavigationButton';
import { ReceiptDetailsHeaderStyles as Styled } from './ReceiptDetailsHeader.style';

interface IReceiptDetailsHeaderProps {
  isBackButton?: boolean;
  backButtonText?: string;
  onGoBackHandler?: () => void;
  totalReceiptsCount?: number;
  currentReceiptPosition?: number;
  onClickGetNextReceiptHandler?: () => void;
  onClickGetPrevReceiptHandler?: () => void;
  customId?: string;
}

export const ReceiptDetailsHeader: FC<IReceiptDetailsHeaderProps> = (props) => {
  const {
    backButtonText,
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
    isBackButton,
    currentReceiptPosition,
    totalReceiptsCount,
    customId,
  } = props;

  return (
    <Styled.Wrapper>
      <Styled.BackWrapper>
        {isBackButton ? (
          <Styled.BoxWrapper onClick={onGoBackHandler}>
            <NavigationButton
              themedButton="navigation"
              iconBehavior="iconPrevious"
            >
              <Styled.ButtonText>{backButtonText || 'Back'}</Styled.ButtonText>
            </NavigationButton>
          </Styled.BoxWrapper>
        ) : (
          <>
            <Styled.BoxWrapper>
              <NavigationButton
                themedButton="navigation"
                iconBehavior="iconPrevious"
                onClick={onGoBackHandler}
              >
                <Styled.ButtonText>Back</Styled.ButtonText>
              </NavigationButton>
              <Styled.ReceiptNumber>
                {getCorrectCustomId(customId || '')}
              </Styled.ReceiptNumber>
            </Styled.BoxWrapper>

            <Styled.RightButtonBox>
              <NavigationButton
                themedButton="navigation"
                iconBehavior="iconPrevious"
                onClick={onClickGetPrevReceiptHandler}
              >
                <Styled.ButtonText>Previous</Styled.ButtonText>
              </NavigationButton>
              <Styled.ReceiptNumber>{`${currentReceiptPosition}/${totalReceiptsCount}`}</Styled.ReceiptNumber>
              <NavigationButton
                themedButton="navigation"
                iconBehavior="iconNext"
                isReverse
                onClick={onClickGetNextReceiptHandler}
              >
                <Styled.ButtonText>Next</Styled.ButtonText>
              </NavigationButton>
            </Styled.RightButtonBox>
          </>
        )}
      </Styled.BackWrapper>
    </Styled.Wrapper>
  );
};
