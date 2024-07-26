import { useEffect } from "react";
import { modalContainer } from "./Modal.styled";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";
import Overlay from "@components/Overlay";

interface IModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ setIsOpen, children }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  return (
    <Overlay setIsOpen={handleModalClose}>
      <div css={modalContainer}>
        <button type="button" onClick={handleModalClose} className="closeBtn">
          <CloseIcon />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
