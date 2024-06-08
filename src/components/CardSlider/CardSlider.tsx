import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { containerStyles } from "@styles/variables";
import {
  ArrowContainer,
  Button,
  Container,
  H2,
  TitleContainer,
  arrowLeft,
  arrowRight,
  swiper,
} from "./CardSlider.styled";
import foto1 from "@assets/images/imagesSwiper/photo (2).png";
import foto2 from "@assets/images/imagesSwiper/photo (1).png";
import foto3 from "@assets/images/imagesSwiper/teleg (1).png";
import foto4 from "@assets/images/imagesSwiper/teleg (2).png";
import foto5 from "@assets/images/imagesSwiper/teleg (3).png";
import { Swiper as SwiperClass } from "swiper/types";
import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";

const CardSlider = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  const updateNavigationState = (swiper: SwiperClass) => {
    if (swiper.isBeginning) {
      document.getElementById("prevButton")!.style.visibility = "hidden";
    } else {
      document.getElementById("prevButton")!.style.visibility = "visible";
    }
    if (swiper.isEnd) {
      document.getElementById("nextButton")!.style.visibility = "hidden";
    } else {
      document.getElementById("nextButton")!.style.visibility = "visible";
    }
  };

  const handleClick = (direction: string) => {
    if (direction === "right") {
      swiperRef?.slideNext();
    } else {
      swiperRef?.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRef) {
      updateNavigationState(swiperRef);
      swiperRef.on("slideChange", () => updateNavigationState(swiperRef));
    }
  }, [swiperRef]);

  return (
    <section css={containerStyles}>
      <Container>
        <TitleContainer>
          <H2>Діяльність у фотографіях</H2>
          <ArrowContainer>
            <Button id="prevButton" onClick={() => handleClick("left")}>
              <ArrowLeft css={arrowLeft} />
            </Button>
            <Button id="nextButton" onClick={() => handleClick("right")}>
              <ArrowRight css={arrowRight} />
            </Button>
          </ArrowContainer>
        </TitleContainer>
        <Swiper
          spaceBetween={12}
          onSwiper={setSwiperRef}
          css={swiper}
          breakpoints={{
            360: {
              slidesPerView: 1.06,
            },
            768: {
              slidesPerView: 1.5,
            },
            1440: {
              slidesPerView: 2.1,
            },
          }}
        >
          <SwiperSlide>
            <img src={foto1} alt="Фото 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto2} alt="Фото 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto3} alt="Фото 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto4} alt="Фото 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto5} alt="Фото 5" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default CardSlider;
