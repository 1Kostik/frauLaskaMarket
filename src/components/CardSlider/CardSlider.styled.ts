import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SliderSection = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  .container {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 1.2rem;
`;

export const Title = styled.h2`
  font-size: var(--mobile-2xl);
  font-weight: 700;
  line-height: 120%;
  color: var(--color-black);

  @media (min-width: 768px) {
    font-size: var(--tablet-2xl);
    line-height: 100%;
  }

  @media (min-width: 1440px) {
    font-size: var(--desktop-2xl);
  }
`;

export const NavBtns = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  user-select: none;
  max-width: var(--mobile-min-width);
  padding: 0 20px;
  margin-inline: auto;

  @media (min-width: 768px) {
    max-width: var(--tablet-min-width);
    box-sizing: border-box;
    padding: 0 40px;
  }

  @media (min-width: 1440px) {
    max-width: var(--desktop-min-width);
    padding: 0 96px;
  }

  .swiper {
    width: 320px;

    @media (min-width: 768px) {
      width: 688px;
    }

    @media (min-width: 1440px) {
      width: 1248px;
    }
  }

  .slide {
    display: block;
    box-sizing: border-box;

    @media (min-width: 768px) {
      max-width: 520px;
      width: 100%;
    }

    &:first-child,
    &:last-child {
      @media (min-width: 768px) {
        margin-inline: 0;
      }
    }
  }
`;

export const squareBtn = css`
  width: 32px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  box-shadow: var(--shadow-btn);
  border: none;

  &:hover {
    background-color: var(--bg-hover-btn);
  }

  img {
    display: block;
    width: 10px;
    height: 20px;
    object-fit: cover;
  }

  &.squareBtn_left img {
    margin-inline-end: 2px;
  }

  &.squareBtn_right img {
    margin-inline-start: 2px;
  }
`;
// @import '../../styles/utils/breakpoints';
// @import '../../styles/utils/variables';

// .slider {
//   width: 100%;
//   .swiper {
//     width: 320px;
//     // gap: 16px;
//     @include onTablet {
//       width: 688px;
//     }
//     @include onDesktop {
//       width: 1248px;
//     }
//   }
//   .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
//     user-select: none;
//     max-width: $mobile-min-width;
//     padding: 0 20px;
//     margin-inline: auto;
//     @include onTablet {
//       max-width: $tablet-min-width;
//       // margin-inline: auto;
//       box-sizing: border-box;
//       padding: 0 40px;
//     }
//     @include onDesktop {
//       max-width: $desktop-min-width;
//       padding: 0 96px;
//     }
//   }

//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-block-end: 1.2rem;
//   }

//   .title {
//     font-size: $mobile-2xl;
//     font-weight: 700;
//     line-height: 120%;
//     color: $color-black;
//     @include onTablet {
//       font-size: $tablet-2xl;
//       line-height: 100%;
//     }
//     @include onDesktop {
//       font-size: $desctop-2xl;
//     }
//   }

//   .navBtns {
//     display: none;

//     @include onTablet {
//       display: flex;
//       justify-content: center;
//       gap: 0.5rem;
//     }
//   }

//   .slide {
//     display: block;
//     box-sizing: border-box;
//     // width: 264px;

//     @include onTablet {
//       max-width: 520px;
//       width: 100%;
//     }

//     &:first-child {
//       // margin-inline-start: $mobile-padding;
//     }

//     &:last-child {
//       margin-inline-end: $mobile-padding;
//     }

//     &:first-child,
//     &:last-child {
//       @include onTablet {
//         margin-inline: 0;
//       }
//     }
//   }
// }

// .squareBtn {
//   width: 32px;
//   aspect-ratio: 1/1;
//   border-radius: 50%;
//   box-shadow: $shadow-btn;
//   border: none;

//   &:hover {
//     background-color: $bg-hover-btn;
//   }

//   img {
//     display: block;
//     width: 10px;
//     height: 20px;
//     object-fit: cover;
//   }

//   &.squareBtn_left {
//     img {
//       margin-inline-end: 2px;
//     }
//   }

//   &.squareBtn_right {
//     img {
//       margin-inline-start: 2px;
//     }
//   }
// }
