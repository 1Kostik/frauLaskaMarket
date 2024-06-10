import React from "react";
import ContentBox from "@components/ContentBox/ContentBox";
import plugImg4 from "/src/assets/images/legs-in-stockings.webp";
import { containerStyles } from "@styles/variables";
import { css } from "@emotion/react";

const MyWaySection = () => {
  return (
    <section
      css={[
        containerStyles,
        css`
          padding: 0 !important;
        `,
      ]}
    >
      <ContentBox
        photo={plugImg4}
        type="myWay"
        changeDirection={true}
        isHideMobileImg={true}
      >
        Мій шлях
      </ContentBox>
    </section>
  );
};

export default MyWaySection;
