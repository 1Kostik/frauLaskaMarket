import React from "react";
import { IContent } from "@assets/recoveryPlan";
import { ReactComponent as CheckedIcon } from "@assets/icons/checked.svg";
import { nanoid } from "nanoid";
import { cardContainer, infoWrapper } from "./PlanCard.styled";

interface IPlanCardProps {
  content: IContent;
  cardHeight: number | undefined;
}

const PlanCard: React.FC<IPlanCardProps> = ({ content, cardHeight }) => {
  const { contentTitle, price, info } = content;

  return (
    <div css={cardContainer(cardHeight)}>
      <h3>{contentTitle}</h3>
      <p>{price}</p>
      <a href="">Зареєструватись</a>
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
