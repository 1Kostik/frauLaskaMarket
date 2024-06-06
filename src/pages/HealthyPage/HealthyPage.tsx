import HeroSection from "@components/HeroSection/HeroSection";
import bgImage from "/src/assets/images/gradient_banner.svg";


const HealthyPage = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType="school">
        <p>Сильна і міцна нація починається зі здорового способу життя.</p>
        <h1>Оздоровлення</h1>
      </HeroSection>
    </>
  );
};

export default HealthyPage;
