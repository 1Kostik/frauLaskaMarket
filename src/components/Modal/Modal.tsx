import { useEffect } from "react";
import { modalContainer, overlayStyle } from "./Modal.styled";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

interface IModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ setIsOpen, children }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLDivElement;
    if (id === "overlay") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("no-scroll");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [setIsOpen]);

  return (
    <div css={overlayStyle} onClick={handleOverlayClick} id="overlay">
      <div css={modalContainer}>
        <button type="button" onClick={handleModalClose} className="closeBtn">
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
