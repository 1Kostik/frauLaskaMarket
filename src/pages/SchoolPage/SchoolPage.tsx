import HeroSection from "@components/HeroSection/HeroSection";
import CardSlider from "@components/CardSlider/CardSlider";

import bgImage from "/src/assets/images/gradient_banner.svg";
import About from "./AboutSection/AboutSection";
import QASection from "./QASection/QASection";
import RegistrationSection from "./RegistrationSection/RegistrationSection";

const AromaSchool = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType="school">
        <p>Сильна і міцна нація починається зі здорового способу життя.</p>
        <h1>Школа ароматерапії</h1>
      </HeroSection>
      <About />
      <CardSlider />
      <QASection />
      <RegistrationSection />
    </>
  );
};

export default AromaSchool;
