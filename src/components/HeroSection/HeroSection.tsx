import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
}

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  bgImage,
  viewType,
  isEmpty,
  pageName,
  id,
}) => {
  const navigate = useNavigate();

  const titleVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section bgImage={bgImage} viewType={viewType} id={id}>
      <Container
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeInOut" }}
        css={containerStyles}
        viewType={viewType}
      >
        {Array.isArray(children) ? (
          !pageName ? (
            <>
              <p css={paragraphStyle()}>{children[0].props.children}</p>
              <motion.h1 variants={titleVariants} css={[titleStyle(viewType)]}>
                {children[1].props.children}
              </motion.h1>
            </>
          ) : (
            <>
              <h1 css={titleStyle(viewType)}>{children[0].props.children}</h1>
              <p css={paragraphStyle(pageName)}>{children[1].props.children}</p>
            </>
          )
        ) : (
          <>
            <h1 css={titleStyle(viewType)}>{children}</h1>
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
