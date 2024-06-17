import RegistrationBox from "@components/RegistrationBox";
import { containerStyles } from "@styles/variables";

const RegistrationSection = () => {
  return (
    <div css={containerStyles}>
      <RegistrationBox>
        <h3>Реєстрація на курс</h3>
        <p>
          Eu mi et tellus etiam tellus varius ut fermentum. Lorem egestas
          lacinia nec aliquam elit etiam. Neque fames iaculis enim lacus. Risus
          cursus enim feugiat in praesent non.
        </p>
      </RegistrationBox>
    </div>
  );
};

export default RegistrationSection;
