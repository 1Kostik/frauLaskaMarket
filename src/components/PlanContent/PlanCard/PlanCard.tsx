import React from "react";
import { IContent } from "@assets/recoveryPlan";
import { ReactComponent as CheckedIcon } from "@assets/icons/checked.svg";
import { nanoid } from "nanoid";
import { cardContainer, infoWrapper } from "./PlanCard.styled";
import { useNavigate } from "react-router-dom";

interface IPlanCardProps {
  content: IContent;
  cardHeight: number | undefined;
}

const PlanCard: React.FC<IPlanCardProps> = ({ content, cardHeight }) => {
  const { contentTitle, price, info } = content;

  const navigate = useNavigate();

  const onSignUpClick = () => {
    navigate("/aroma-school", { state: contentTitle });
    setTimeout(() => {
      const elementPosition = (
        document.querySelector("#registrationForm") as HTMLElement
      ).offsetTop;

      window.scrollTo({ top: elementPosition - 100, behavior: "smooth" });
    }, 200);
  };

  return (
    <div css={cardContainer(cardHeight)}>
      <h3>{contentTitle}</h3>
      <p>{price}</p>
      <button onClick={onSignUpClick}>Зареєструватись</button>
      {info.map((item) => {
        return (
          <div key={nanoid()} css={infoWrapper}>
            <CheckedIcon />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlanCard;
