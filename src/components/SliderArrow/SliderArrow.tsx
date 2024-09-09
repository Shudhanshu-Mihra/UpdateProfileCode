import { FC } from 'react';
import { CustomArrowProps } from 'react-slick';

import { Icon } from '../Icons';
import { SliderArrowStyles } from './SliderArrow.style';

interface ISliderArrowProps extends CustomArrowProps {
  isForwardButton?: boolean;
}

export const SliderArrow: FC<ISliderArrowProps> = (props) => {
  const { onClick, isForwardButton } = props;

  return (
    <SliderArrowStyles.Wrapper
      isForwardButton={isForwardButton}
      onClick={onClick}
    >
      <SliderArrowStyles.IconWrapper isForwardButton={isForwardButton}>
        <Icon type="arrowDown" />
      </SliderArrowStyles.IconWrapper>
    </SliderArrowStyles.Wrapper>
  );
};
