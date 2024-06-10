// import { containerStyles } from "@styles/variables";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  box,
  imgThumb,
  linkStyle,
  linkWrapper,
  myWayContenContainer,
  // paddingsForMyWay,
  slideStyle,
  swiperContainer,
  textContainer,
  titleContainer,
} from "./ContentBox.styled";

import { ReactComponent as ArrowLeft } from "/src/assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "/src/assets/icons/arrow-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import { myWay, myWayHistoryArr } from "@assets/myWayHistoryArr";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

interface ContentBoxProps {
  children: React.ReactNode;
  photo?: string;
  contentGap?: number | number[];
  isHideMobileImg?: boolean;
  changeDirection?: boolean;
  type?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  photo,
  contentGap,
  isHideMobileImg,
  changeDirection,
  type,
}) => {
  const [textHeight, setTextHeight] = useState<number | undefined>(undefined);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  // const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setTextHeight((entries[0].target as HTMLElement).offsetHeight);
    });

    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiper) {
      const updateButtonsVisibility = () => {
        if (swiper.isBeginning) {
          refPrevBtn.current!.style.visibility = "hidden";
        } else if (swiper.isEnd) {
          refNextBtn.current!.style.visibility = "hidden";
        } else {
          refPrevBtn.current!.style.visibility = "visible";
          refNextBtn.current!.style.visibility = "visible";
        }
      };
      swiper.on("slideChange", updateButtonsVisibility);
      updateButtonsVisibility();
      return () => {
        swiper.off("slideChange", updateButtonsVisibility);
      };
    }
  }, [swiper]);

  return (
    // <div
    //   css={[containerStyles, type === "myWay" && paddingsForMyWay]}
      // ref={containerRef}
    // >
      <div css={box(contentGap, changeDirection, type)}>
        {(type === "projects" || type === "info") && (
          <div css={textContainer(type)}>
            {typeof children === "string" && <p ref={textRef}>{children}</p>}
            {typeof children === "object" && children}
          </div>
        )}
        {type === "myWay" && (
          <div css={myWayContenContainer}>
            <div css={titleContainer}>
              <h2>{children}</h2>
              <button onClick={handlePrev} ref={refPrevBtn}>
                <ArrowLeft />
              </button>
              <button onClick={handleNext} ref={refNextBtn}>
                <ArrowRight />
              </button>
            </div>
            <Swiper
              css={swiperContainer}
              slidesPerView={1.088}
              onSwiper={(swiper) => setSwiper(swiper)}
              scrollbar={{ draggable: true }}
              modules={[Navigation]}
              navigation={{
                prevEl: "#prevButton",
                nextEl: "#nextButton",
              }}
              breakpoints={{
                360: { slidesPerView: 1.088, spaceBetween: 16 },
                1440: { slidesPerView: 2, spaceBetween: 20 },
              }}
            >
              {myWayHistoryArr &&
                myWayHistoryArr.map((item: myWay, i) => (
                  <SwiperSlide key={i}>
                    <div css={slideStyle}>
                      <p>{item.year}</p>
                      <p>{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div css={linkWrapper}>
              <Link to="/cart" css={linkStyle}>
                Сертифікати
              </Link>
            </div>
          </div>
        )}
        <div css={imgThumb(textHeight, isHideMobileImg, type, photo)}></div>
      </div>
    // </div>
  );
};

export default ContentBox;
