import React from "react";

import HeroSection from "@components/HeroSection/HeroSection";
import ContentBox from "@components/ContentBox/ContentBox";

import bgImage from "/src/assets/images/hero_photo.webp";
import plugImg1 from "/src/assets/images/plug1.svg";
import plugImg2 from "/src/assets/images/plug2.svg";
import plugImg3 from "/src/assets/images/humanitarian_aid.webp";

const MainPage = () => {
  return (
    <>
      <HeroSection bgImage={bgImage} viewType={"main"} id={"section1"}>
        Frau Laska
      </HeroSection>
      <section style={{ backgroundColor: "#252525" }} id="section2">
        <ContentBox photo={plugImg1} contentGap={[16, 16, 20]} type={"type1"}>
          Більше 16 років я присвятила питанню оздоровлення та психологічного
          відновлення людей. З початком агресії країни терориста я почала
          активно допомагати військовим в питаннях психологічної підтримки,
          стала для них духовною сестрою. З початку повномасштабного вторгнення
          моя увага приділялася також і цивільним, які пережили військові події,
          або знаходяться в постійному стресі на більш мирних територіях.
        </ContentBox>
        <ContentBox
          photo={plugImg2}
          contentGap={[16, 16, 20]}
          isHideMobileImg={true}
          changeDirection={true}
          type={"type1"}
        >
          За цей період яктивно вивчала психологію (в більшості роботу з
          метафоричними картами в період кризи, втрат, військових дій).
          Закінчила міжнародний університет нутріціології та натуропатії,
          активно підвищувала кваліфікацію на різноманітних курсах,
          конференціях. Для того, щоб приймати участь у питаннях відродження
          нашої нації, а питання здоров’я та психіки в цьому напрямку стоїть на
          першому місці, я відкрила офіційно міжнародну асоціацію ароматерапії,
          натуропатії та практичної психології яку наразі розвиваю створюючи
          коло спеціалістів. З чого починається здоровя
        </ContentBox>
        <ContentBox photo={plugImg3} contentGap={12} type={"type2"}>
          <h3>
            Добровольче обʼєднання патронатного супроводу військових «Sol»
          </h3>
          <p>
            Метою обʼєднання є патронатна допомога захисникам ( психологічна,
            юридична, оздоровча та волонтерська). Команда спеціалістів мого
            обʼєднання виїжджає на місця несення служби, допомагає дистанційно.
            Також ми допомагаємо дітям з прифронтових сіл, рідним військових. Ми
            поряд!
          </p>
          <a href="#">Перейти</a>
        </ContentBox>
      </section>
    </>
  );
};

export default MainPage;
