import React from "react";
import HeroSection from "@components/HeroSection/HeroSection";
import bgImage from "/src/assets/images/gradient_banner.svg";
import CardSlider from "@components/CardSlider/CardSlider";

const AromaSchool = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType="school">
        <p>Сильна і міцна нація починається зі здорового способу життя.</p>
        <h1>Школа ароматерапії</h1>
      </HeroSection>
      <div style={{ background: "#252525" }}>
        <CardSlider />
      </div>
    </>
  );
};

export default AromaSchool;
