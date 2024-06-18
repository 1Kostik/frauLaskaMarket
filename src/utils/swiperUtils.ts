import SwiperCore from "swiper";

export const updateButtonsVisibility = (
  swiper: SwiperCore,
  refPrev: React.RefObject<HTMLButtonElement>,
  refNext: React.RefObject<HTMLButtonElement>
) => {
  if (swiper.isBeginning) {
    refPrev.current!.style.visibility = "hidden";
    refNext.current!.style.visibility = "visible";
  } else if (swiper.isEnd) {
    refNext.current!.style.visibility = "hidden";
    refPrev.current!.style.visibility = "visible";
  } else {
    refPrev.current!.style.visibility = "visible";
    refNext.current!.style.visibility = "visible";
  }
};

export const handlePrev = (swiper: SwiperCore) => {
  if (swiper) {
    swiper.slidePrev();
  }
};

export const handleNext = (swiper: SwiperCore) => {
  if (swiper) {
    swiper.slideNext();
  }
};
