import React, { ReactNode } from "react";
import {
  Container,
  Section,
  paragraphStyle,
  titleStyle,
} from "./HeroSection.styled";
import { containerStyles } from "@styles/variables";

export interface HeroSectionProps {
  children?: ReactNode;
  bgImage?: string;
  viewType?: string;
  id?:string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  bgImage,
  viewType,
  id
}) => {

  return (
    <Section bgImage={bgImage} viewType={viewType} id={id}>
      <Container css={containerStyles} viewType={viewType}>
        {Array.isArray(children) ? (
          <>
            <p css={paragraphStyle}>{children[0].props.children}</p>
            <h1 css={titleStyle(viewType)}>{children[1].props.children}</h1>
          </>
        ) : (
          <>
            <h1 css={titleStyle(viewType)}>{children}</h1>
          </>
        )}
      </Container>
    </Section>
  );
};

export default HeroSection;
