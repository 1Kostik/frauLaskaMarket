import { MouseEvent } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { interfaceStyle } from "./ProductInterface.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@redux/hooks";
import { getAuth } from "@redux/auth/selectors";

interface IProductInterfaceProps {
  productId: number;
}

const ProductInterface: React.FC<IProductInterfaceProps> = ({ productId }) => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuth);

  const handleProductEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/admin/edit-advert/:${productId}`);
  };

  const handleProductDelete = () => {
    console.log("delete", productId);
  };

  return (
    <>
      {isAuth ? (
        <div css={interfaceStyle}>
          <button type="button" onClick={handleProductEdit}>
            <CiEdit />
          </button>
          <button type="button">
            <MdOutlineDeleteForever onClick={handleProductDelete} />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ProductInterface;
