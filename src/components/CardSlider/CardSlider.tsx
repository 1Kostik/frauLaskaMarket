import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "./CardSlaider.css";
import { containerStyles } from "@styles/variables";
import {
  ArrowContainer,
  Button,
  Container,
  H2,
  TitleContainer,
  arrowLeft,
  arrowRight,
  reviews,
  swiper,
} from "./CardSlider.styled";
import foto1 from "@assets/images/imagesSwiper/photo (2).png";
import foto2 from "@assets/images/imagesSwiper/photo (1).png";
import foto3 from "@assets/images/imagesSwiper/teleg (1).png";
import foto4 from "@assets/images/imagesSwiper/teleg (2).png";
import foto5 from "@assets/images/imagesSwiper/teleg (3).png";
import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";
import { ReactComponent as ArrowShortLeft } from "@assets/icons/arrow-short-left.svg";
import { ReactComponent as ArrowShortRight } from "@assets/icons/arrow-short-right.svg";
import { CardItem } from "@components/CardItem";
import { Navigation } from "swiper/modules";
import { useLocation } from "react-router-dom";
import SwiperCore from "swiper";

const CardSlider = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  useEffect(() => {
    if (swiperRef) {
      const updateNavigationState = () => {
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");

        if (prevButton && nextButton) {
          if (swiperRef.isBeginning) {
            prevButton.style.visibility = "hidden";
          } else {
            prevButton.style.visibility = "visible";
          }

          if (swiperRef.isEnd) {
            nextButton.style.visibility = "hidden";
          } else {
            nextButton.style.visibility = "visible";
          }
        }
      };

      swiperRef.on("slideChange", updateNavigationState);
      updateNavigationState(); // Initial check
    }
  }, [swiperRef]);

  const handleSwiper = (swiper: SwiperCore) => {
    setSwiperRef(swiper);
  };

  const images = [foto1, foto2, foto3, foto4, foto5];
  const text = [
    {
      id: 1,
      name: "Lera",
      activity: "фітнес тренер",
      description:
        "Знання в школі допомогли мені створити свою лінію аромакомпозицій для клієнтів які домогамають отримати найшвидкіші результати в сфері краси тіла",
    },
    {
      id: 2,
      name: "Sveta",
      activity: "домогосподарка, мама",
      description:
        "Ароматерапія, навіть з першого курсу, відкрилася для мене як спосіб допомоги рідним природним способом. Я змінила звичні ліки на аромааптечку. Дякую",
    },
    {
      id: 3,
      name: "Lena",
      activity: "масажист, психолог",
      description:
        "Дякую за знання! Вони допомогли мені мати свій особливий відхід до допомоги клієнтам. Мало хто з колег працює професійно з ефірними оліями.",
    },
    {
      id: 4,
      name: "Anna",
      activity: "студент",
      description:
        "Знання в школі допомогли мені створити свою лінію аромакомпозицій для клієнтів які домогамають отримати найшвидкіші результати в сфері краси тіла",
    },
    {
      id: 5,
      name: "Anna",
      activity: "студент",
      description:
        "Знання в школі допомогли мені створити свою лінію аромакомпозицій для клієнтів які домогамають отримати найшвидкіші результати в сфері краси тіла",
    },
    {
      id: 6,
      name: "Anna",
      activity: "студент",
      description:
        "Знання в школі допомогли мені створити свою лінію аромакомпозицій для клієнтів які домогамають отримати найшвидкіші результати в сфері краси тіла",
    },
    {
      id: 7,
      name: "Anna",
      activity: "студент",
      description:
        "Знання в школі допомогли мені створити свою лінію аромакомпозицій для клієнтів які домогамають отримати найшвидкіші результати в сфері краси тіла",
    },
  ];

  return (
    <section css={containerStyles}>
      <Container isMainPage={isMainPage}>
        <TitleContainer>
          {isMainPage ? <H2>Діяльність у фотографіях</H2> : <H2>Відгуки</H2>}

          <ArrowContainer isMainPage={isMainPage}>
            <Button id="prevButton">
              {isMainPage ? (
                <ArrowLeft css={arrowLeft} />
              ) : (
                <ArrowShortLeft css={arrowLeft} />
              )}
            </Button>
            <Button id="nextButton">
              {isMainPage ? (
                <ArrowRight css={arrowRight} />
              ) : (
                <ArrowShortRight css={arrowLeft} />
              )}
            </Button>
          </ArrowContainer>
        </TitleContainer>
        <Swiper
          onSwiper={handleSwiper}
          css={isMainPage ? swiper : reviews}
          breakpoints={{
            360: {
              slidesPerView: 1.06,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: isMainPage ? 1.5:2.1 ,
              spaceBetween: isMainPage ? 12 : 16,
            },
            1440: {
              slidesPerView: isMainPage ? 2.1 : 3.5,
              spaceBetween: isMainPage ? 12 : 20,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: "#prevButton",
            nextEl: "#nextButton",
          }}
        >
          {isMainPage
            ? images &&
              images.length > 0 &&
              images.map((item, i) => (
                <SwiperSlide className="swiper-slide image-slide" key={i}>
                  <img src={item} alt="" />
                </SwiperSlide>
              ))
            : text &&
              text.length > 0 &&
              text.map((item) => (
                <SwiperSlide className="swiper-slide text-slide" key={item.id}>
                  <CardItem text={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CardSlider;
