import TabBox from "@components/TabBox";
import { containerStyles } from "@styles/variables";

import { tabArr } from "@assets/tabArr";
import frauLaska from "@assets/images/frau-laska.webp";

const AboutSection = () => {
  return (
    <div css={containerStyles}>
      <TabBox content={tabArr} photo={frauLaska} title={"Title"} />
    </div>
  );
};

export default AboutSection;
