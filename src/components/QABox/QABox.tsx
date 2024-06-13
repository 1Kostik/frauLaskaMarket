import { useState } from "react";
import { nanoid } from "nanoid";
import { QaType } from "@assets/questionsArr";
import {
  contentContainer,
  imgThumb,
  qaCard,
  qaWrapper,
  titleStyle,
  titleWrapper,
} from "./QABox.styled";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-up.svg";

interface QaProps {
  content: QaType[];
}

const QuestionsBox: React.FC<QaProps> = ({ content }) => {
  const [openedCards, setOpenedCards] = useState<number[]>([]);

  const handleOpenCard = (id: number) => {
    if (openedCards.includes(id)) {
      setOpenedCards((prev) => prev.filter((item) => item !== id));
    } else {
      setOpenedCards((prev) => [...prev, id]);
    }
  };

  return (
    <div>
      <h3 css={titleStyle}>Питання</h3>
      <div css={contentContainer}>
        <div css={imgThumb}></div>
        <div css={qaWrapper}>
          {content.map((item, i) => {
            return (
              <div key={nanoid()} css={qaCard(openedCards.includes(i))}>
                <div css={titleWrapper}>
                  <h4>{item.title}</h4>
                  <button onClick={() => handleOpenCard(i)}>
                    <ArrowIcon />
                  </button>
                </div>
                {openedCards.includes(i) && <p>{item.text}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionsBox;
