import PlanContent from "@components/PlanContent";

import { recoveryPlan } from "@assets/recoveryPlan";
import { pregnantPlan } from "@assets/pregnantPlan";
import { containerStyles } from "@styles/variables";
import { photo } from "./PlansSection.styled";

const PlansSection = () => {
  return (
    <section>
      <div css={containerStyles}>
        <PlanContent plan={recoveryPlan} />
        <div css={photo}></div>
        <PlanContent plan={pregnantPlan} />
      </div>
    </section>
  );
};

export default PlansSection;
