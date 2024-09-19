import RegistrationBox from "@components/RegistrationBox";
// import { section } from "@pages/MainPage/ProjectsSection/ProjectsSection.styled";
import { containerStyles } from "@styles/variables";

const RegistrationSection = () => {
  return (
    <section id="registrationForm">
      <div css={containerStyles}>
        <RegistrationBox>
          <h3>Реєстрація на курс</h3>
          <p>
            Eu mi et tellus etiam tellus varius ut fermentum. Lorem egestas
            lacinia nec aliquam elit etiam. Neque fames iaculis enim lacus.
            Risus cursus enim feugiat in praesent non.
          </p>
        </RegistrationBox>
      </div>
    </section>
  );
};

export default RegistrationSection;
