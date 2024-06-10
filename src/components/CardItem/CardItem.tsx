import React from "react";
import { H3, P1, P2, TitleWrapper, Wrapper } from "./CardItem.styled";

interface IText {
  id: number;
  name: string;
  activity: string;
  description: string;
}

interface Props {
  text: IText;
}

export const CardItem: React.FC<Props> = ({ text }) => {
  const { id, name, activity, description } = text;
  return (
    <>
      <Wrapper key={id}>
        <TitleWrapper>
          <H3>{name}</H3>
          <P1>{activity}</P1>
        </TitleWrapper>
        <P2>{description}</P2>
      </Wrapper>
    </>
  );
};
