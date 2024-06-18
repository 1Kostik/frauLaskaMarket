import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { IContent, IPlan } from "@assets/recoveryPlan";

import PlanCard from "./PlanCard";
import { nanoid } from "nanoid";
import { swiperContainer, titleWrapper } from "./PlanContent.styled";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left-swapper32.svg";
import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right-swapper32.svg";
import {
  handleNext,
  handlePrev,
  updateButtonsVisibility,
} from "@utils/swiperUtils";

interface IPlanProps {
  plan: IPlan;
}

const PlanContent: React.FC<IPlanProps> = ({ plan }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const { planTitle, content } = plan;
  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () =>
        updateButtonsVisibility(swiper, refPrevBtn, refNextBtn)
      );
      updateButtonsVisibility(swiper, refPrevBtn, refNextBtn);
      return () => {
        swiper.off("slideChange", () =>
          updateButtonsVisibility(swiper, refPrevBtn, refNextBtn)
        );
      };
    }
  }, [swiper]);

  return (
    <div>
      <div css={titleWrapper}>
        <h2>{planTitle}</h2>
        <div>
          <button onClick={() => handlePrev(swiper!)} ref={refPrevBtn}>
            <ArrowLeft />
          </button>
          <button onClick={() => handleNext(swiper!)} ref={refNextBtn}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        css={swiperContainer}
        slidesPerView={1.088}
        onSwiper={(swiper) => setSwiper(swiper)}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        breakpoints={{
          360: { slidesPerView: 1.127, spaceBetween: 12 },
          768: { slidesPerView: 2.379, spaceBetween: 12 },
          1440: { slidesPerView: 3, spaceBetween: 12 },
        }}
      >
        {content.map((content: IContent) => {
          return (
            <SwiperSlide key={nanoid()}>
              <PlanCard content={content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PlanContent;
