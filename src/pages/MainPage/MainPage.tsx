import React from "react";

import HeroSection from "@components/HeroSection/HeroSection";
import bgImage from "/src/assets/images/hero_photo_desktop.webp";

const MainPage = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType={"main"}>
        Frau Laska
      </HeroSection>
    </>
  );
};

export default MainPage;
