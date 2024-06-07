import React from "react";

import HeroSection from "@components/HeroSection/HeroSection";
import bgImage from "/src/assets/images/hero_photo_desktop.webp";

const MainPage = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType={"main"} id={"section1"}>
        Frau Laska
      </HeroSection>
      <section style={{background:"black",width:"100%",height:"500px"}} id="section2">
        <h2>under hero
          </h2> 
      </section>
      <section style={{background:"black",width:"100%",height:"500px"}}>
        <h2>under hero
          </h2> 
      </section>
    </>
  );
};

export default MainPage;
