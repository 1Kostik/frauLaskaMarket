import { useAppSelector } from "@redux/hooks";

import { selectCart, selectCartTotalQuantity } from "@redux/cart/selectors";

import {
  Button,
  CheckBoxContainer,
  EndPrice,
  InfoPaymentContainer,
  InfoPrice,
  InfoWrapperPayment,
  Line,
  PaymentContainer,
  TitleInfo,
  TitlePayment,
  WrapperTitle,
} from "./PaymentBlock.styled";
import { useNavigate } from "react-router-dom";

interface IPaymentBlockProps {
  setCallMeBack?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentBlock: React.FC<IPaymentBlockProps> = ({ setCallMeBack }) => {
  const navigate = useNavigate();
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const cart = useAppSelector(selectCart);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.total_cost;
  }, 0);

  return (
    <PaymentContainer>
      <TitlePayment>Разом</TitlePayment>
      <InfoPaymentContainer>
        <TitleInfo>
          {totalQuantity}{" "}
          {totalQuantity === 1
            ? "товар"
            : totalQuantity > 1 && totalQuantity < 5
            ? "товари"
            : "товарів"}{" "}
          на суму:
        </TitleInfo>{" "}
        <InfoPrice>{totalPrice} ₴</InfoPrice>
      </InfoPaymentContainer>
      <Line />
      <InfoWrapperPayment>
        <WrapperTitle>До сплати:</WrapperTitle>{" "}
        <EndPrice>{totalPrice} ₴</EndPrice>
      </InfoWrapperPayment>

      {setCallMeBack && (
        <CheckBoxContainer>
          <input type="checkbox" id="callMeBack" className="hiddenInput" />
          <label
            htmlFor="callMeBack"
            onClick={() => setCallMeBack((prev) => !prev)}
          >
            Передзвоніть мені для підтвердження
          </label>
        </CheckBoxContainer>
      )}

      <Button type="submit" onClick={() => navigate("/order")}>
        Перейти до замовлення
      </Button>
    </PaymentContainer>
  );
};

export default PaymentBlock;