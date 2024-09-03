import { fullPrice } from "@utils/fullPrice";
import { Variation } from "Interfaces/Product";
import React from "react";
import { old_price, P } from "./PriceItem.styled";
interface IPriceItemProps {
  variations: Variation;
}
const PriceItem: React.FC<IPriceItemProps> = ({ variations }) => {
  const { price, discount } = variations;
  return (
    <P>
      {discount && (
        <span>
          {" "}
          <span css={old_price}>{fullPrice(price, discount)}</span> -{" "}
        </span>
      )}
      {price}
      грн
    </P>
  );
};

export default PriceItem;
