import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomCarouselStyles as Styled } from './CustomCarousel.style';
import { SliderArrow } from '../SliderArrow';
import { settingsSlider } from './customCarousel.constants';

interface ICustomCarouselProps {
  children: React.ReactElement[];
}
export const CustomCarousel: FC<ICustomCarouselProps> = (props) => {
  const { children } = props;
  return (
    <Styled.Container>
      <Styled.SliderWrapper>
        <Slider
          {...settingsSlider}
          nextArrow={<SliderArrow isForwardButton />}
          prevArrow={<SliderArrow />}
        >
          {children}
        </Slider>
      </Styled.SliderWrapper>
    </Styled.Container>
  );
};
