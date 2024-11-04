import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Section,
  buttonStyle,
  paragraphStyle,
  titleStyle,
} from "./HeroSection.styled";
import { containerStyles } from "@styles/variables";

export interface HeroSectionProps {
  children?: ReactNode;
  bgImage?: string;
  viewType?: string;
  isEmpty?: boolean;
  pageName?: string;
  id?: string;
  paddingTop?:string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  bgImage,
  viewType,
  isEmpty,
  pageName,
  id,
  paddingTop
}) => {
  const navigate = useNavigate();

  return (
    <Section bgImage={bgImage} viewType={viewType} id={id} paddingTop={paddingTop}>
      <Container css={containerStyles} viewType={viewType}>
        {Array.isArray(children) ? (
          !pageName ? (
            <>
              <p css={paragraphStyle()}>{children[0].props.children}</p>
              <h1 css={[titleStyle(viewType,paddingTop)]}>{children[1].props.children}</h1>
            </>
          ) : (
            <>
              <h1 css={titleStyle(viewType,paddingTop)}>{children[0].props.children}</h1>
              <p css={paragraphStyle(pageName)}>{children[1].props.children}</p>
            </>
          )
        ) : (
          <>
            <h1 css={titleStyle(viewType,paddingTop)}>{children}</h1>
            {isEmpty && (
              <button
                css={buttonStyle}
                type="button"
                onClick={() => navigate("/store")}
              >
                Продовжити покупки
              </button>
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default HeroSection;
