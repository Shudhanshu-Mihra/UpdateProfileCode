export const settingsSlider = {
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
  autoplay: false,
  slidesToShow: 9,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
      },
    },
  ],
};
