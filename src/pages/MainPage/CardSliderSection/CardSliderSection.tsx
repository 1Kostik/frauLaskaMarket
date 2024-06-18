import CardSlider, { Itext } from "@components/CardSlider/CardSlider";
import { containerStyles } from "@styles/variables";
export interface StyleProps {
  container?: {
    "padding-top": string[];
    "padding-bottom": string[];
    width: string[];
    height: string[];
  };
  display?: string[];
  width?: string[];
  height?: string[];
  gap?: string[];
  slidesPerView?:number[];
  spaceBetween?:number[];
  prevEl?:string[];
  nextEl?:string[];

}
import React from "react";
interface ICardSliderSectionProps {
  renderArrayImg?: string[];
  renderArrayText?: Itext[];
  stylesProps: StyleProps;
}
const CardSliderSection: React.FC<ICardSliderSectionProps> = ({
  renderArrayImg,
  renderArrayText,
  stylesProps,
}) => {
  return (
    <section>
      <div css={containerStyles}>
        {renderArrayImg && renderArrayImg.length > 0 && (
          <CardSlider
            renderArrayImg={renderArrayImg}
            stylesProps={stylesProps}
          />
        )}
        {renderArrayText && renderArrayText.length > 0 && (
          <CardSlider renderArrayText={renderArrayText} stylesProps={stylesProps}/>
        )}
      </div>
    </section>
  );
};

export default CardSliderSection;
