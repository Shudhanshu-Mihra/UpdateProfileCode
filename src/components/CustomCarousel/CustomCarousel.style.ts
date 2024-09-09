import { styled } from 'styles/theme';

export const CustomCarouselStyles = {
  Container: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    padding: 0 75px;
    height: 158px;
    justify-content: center;
    margin-bottom: 12px;
  `,
  SliderWrapper: styled.div`
    &:last-child {
      margin-right: 0;
    }
    height: 158px;
    position: absolute;
    left: 75px;
    max-width: calc(100vw - 250px);
    width: 100%;
    .slick-track {
      display: flex !important;
      max-width: calc(100vw - 250px) !important;
      width: 100% !important;
    }
    .slick-next,
    .slick-prev {
      font-size: 14px;
      line-height: 0;
      position: absolute;
      top: 50%;
      display: flex;
      z-index: 100;
      background: green;
      width: 50px;
      height: 50px;
      padding: 0;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      cursor: pointer;
      border: none;
    }
    .slick-prev {
      left: -75px;
    }
    .slick-next {
      right: -65px;
    }
    .slick-slide,
    .slick-active,
    .slick-current {
      width: 129px !important;
      min-width: 129px !important;
      height: 158px;
      margin-right: 15px;
    }
  `,
};
