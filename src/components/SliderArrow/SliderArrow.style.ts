import { styled } from 'styles/theme';

export const SliderArrowStyles = {
  Wrapper: styled.button<{ isForwardButton?: boolean }>`
    display: flex;
    background-color: ${({ theme }) => theme.colors.lightRed};
    width: 50px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-self: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ isForwardButton }) => !isForwardButton && '-75px'};
    right: ${({ isForwardButton }) => isForwardButton && '-65px'};
    z-index: ${({ theme }) => theme.zIndex.xs};
  `,
  IconWrapper: styled.div<{ isForwardButton?: boolean }>`
    display: flex;
    width: 14px;
    height: 8px;
    transform: ${({ isForwardButton }) =>
      isForwardButton ? 'rotate(-90deg)' : 'rotate(90deg)'};
  `,
};
