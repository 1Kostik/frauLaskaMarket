import HeroSection from "@components/HeroSection/HeroSection";
import HistorySection from "./HistorySection/HistorySection";
import CardSlider from "@components/CardSlider/CardSlider";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import MyWaySection from "./MyWaySection/MyWaySection";

import bgImage from "/src/assets/images/hero_photo.webp";

const MainPage = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType={"main"} id="section1">
        Frau Laska
      </HeroSection>
      <HistorySection />
      <CardSlider />
      <AboutSection />
      <ProjectsSection />
      <MyWaySection />
    </>
  );
};

export default MainPage;
