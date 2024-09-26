import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./CardSlaider.css";

import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

import {
  ArrowContainer,
  Button,
  Container,
  H2,
  TitleContainer,
  arrowBigLeft,
  arrowBigRight,
  arrowContainer,
  arrowLeft,
  arrowOnImg,
  arrowRight,
  breakpoints,
  btnOnImg,
  swiper,
} from "./CardSlider.styled";

import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";
import { ReactComponent as ArrowShortLeft } from "@assets/icons/arrow-short-left.svg";
import { ReactComponent as ArrowShortRight } from "@assets/icons/arrow-short-right.svg";

import { CardItem } from "@components/CardItem";

import { StyleProps } from "@pages/MainPage/CardSliderSection/CardSliderSection";
import { Feedback, ImageUrl } from "Interfaces/Product";

export interface Itext {
  id: number;
  name: string;
  activity: string;
  description: string;
}

interface CardSliderProps {
  renderArrayImg?: ImageUrl[] | null;
  renderArrayText?: Feedback[];
  stylesProps: StyleProps;
}

const CardSlider: React.FC<CardSliderProps> = ({
  renderArrayImg,
  renderArrayText,
  stylesProps,
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [navigation, setNavigation] = useState<{
    prevEl: HTMLElement | null;
    nextEl: HTMLElement | null;
  }>({
    prevEl: null,
    nextEl: null,
  });
  const [key, setKey] = useState(0);

  const [hiddenButton, setHiddenButton] = useState(true);

  const getVisibleSlides = (width: number) => {
    if (width >= 1440) return 3.5;
    if (width >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      const visibleSlides = getVisibleSlides(screenWidth);

      const shouldHideButtons = !!(
        (renderArrayText && renderArrayText.length <= visibleSlides) ||
        (renderArrayImg && renderArrayImg.length <= visibleSlides)
      );

      setHiddenButton(shouldHideButtons);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderArrayImg, renderArrayText]);

  useEffect(() => {
    const prevEl = document.getElementById(stylesProps.prevEl?.[0] || "");
    const nextEl = document.getElementById(stylesProps.nextEl?.[0] || "");
    setNavigation({ prevEl, nextEl });
  }, [stylesProps.nextEl, stylesProps.prevEl, hiddenButton]);

  useEffect(() => {
    if (swiperRef) {
      const updateNavigationState = () => {
        const prevButton = navigation.prevEl;
        const nextButton = navigation.nextEl;

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
      updateNavigationState();

      return () => {
        swiperRef.off("slideChange", updateNavigationState);
      };
    }
  }, [swiperRef, navigation]);

  const handleSwiper = (swiper: SwiperCore) => {
    setSwiperRef(swiper);
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [stylesProps]);

  return (
    <Container stylesProps={stylesProps}>
      {(stylesProps.display?.[0] !== "none" ||
        stylesProps.display?.[1] !== "none") && (
        <TitleContainer>
          {stylesProps.display?.[0] !== "none" && (
            <H2>Діяльність у фотографіях</H2>
          )}
          {stylesProps.display?.[1] !== "none" && <H2>Відгуки</H2>}

          {!hiddenButton && (
            <ArrowContainer stylesProps={stylesProps}>
              <Button id={stylesProps.prevEl?.[0]}>
                {stylesProps.display?.[0] !== "none" && (
                  <ArrowLeft css={arrowBigLeft} />
                )}
                {stylesProps.display?.[1] !== "none" && (
                  <ArrowShortLeft css={arrowLeft} />
                )}
              </Button>
              <Button id={stylesProps.nextEl?.[0]}>
                {stylesProps.display?.[0] !== "none" && (
                  <ArrowRight css={arrowBigRight} />
                )}
                {stylesProps.display?.[1] !== "none" && (
                  <ArrowShortRight css={arrowRight} />
                )}
              </Button>
            </ArrowContainer>
          )}
        </TitleContainer>
      )}
      {stylesProps.display?.[2] !== "none" && (
        <div css={arrowContainer(stylesProps)}>
          <button id={stylesProps.prevEl?.[0]} css={btnOnImg}>
            <LuArrowLeft css={arrowOnImg} />
          </button>
          <button id={stylesProps.nextEl?.[0]} css={btnOnImg}>
            <LuArrowRight css={arrowOnImg} />
          </button>
        </div>
      )}
      <Swiper
        key={key}
        onSwiper={handleSwiper}
        css={swiper(stylesProps)}
        breakpoints={breakpoints(stylesProps)}
        modules={[Navigation]}
        navigation={navigation}
      >
        {renderArrayImg
          ? renderArrayImg.length > 0 &&
            renderArrayImg.map((item: ImageUrl, i) => (
              <SwiperSlide className="swiper-slide image-slide" key={i}>
                <img src={item.img_url} alt="" />
              </SwiperSlide>
            ))
          : renderArrayText &&
            renderArrayText.length > 0 &&
            renderArrayText.map((item) => (
              <SwiperSlide className="swiper-slide text-slide" key={item.id}>
                <CardItem text={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  );
};

export default CardSlider;
