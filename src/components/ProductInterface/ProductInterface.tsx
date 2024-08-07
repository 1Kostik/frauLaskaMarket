import { MouseEvent } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { interfaceStyle } from "./ProductInterface.styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getAuth } from "@redux/auth/selectors";
import { deleteProduct, getProduct } from "@redux/ads/operations";

interface IProductInterfaceProps {
  productId: number;
}

const ProductInterface: React.FC<IProductInterfaceProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const isAuth = useAppSelector(getAuth);
  const isAuth = true;

  const handleProductEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(getProduct(productId)).then(() => {
      navigate(`/admin/edit-advert/:${productId}`);
    });
  };

  const handleProductDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteProduct(productId));
    navigate("/store");
  };

  return (
    <>
      {isAuth ? (
        <div css={interfaceStyle}>
          <button type="button" onClick={handleProductEdit}>
            <CiEdit />
          </button>
          <button type="button" onClick={handleProductDelete}>
            <MdOutlineDeleteForever />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ProductInterface;
