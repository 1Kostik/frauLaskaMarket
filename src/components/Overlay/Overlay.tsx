import { useEffect } from "react";
import { overlayStyle } from "./Overlay.styled";
import { useAppSelector } from "@redux/hooks";
import { selectIsAdsLoading } from "@redux/ads/selectors";

interface IOverlayProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  type?: string;
}

const Overlay: React.FC<IOverlayProps> = ({ setIsOpen, children, type }) => {
  const isLoadingProduct = useAppSelector(selectIsAdsLoading);

  const handleOverlayClick = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLDivElement;
    if (id === "overlay") {
      setIsOpen && setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  {
    if (!isLoadingProduct && type === "loader") {
      return null;
    } else {
      return (
        <div css={overlayStyle} onClick={handleOverlayClick} id="overlay">
          {children}
        </div>
      );
    }
  }
};

export default Overlay;
