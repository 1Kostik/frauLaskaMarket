import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import {
  inputSearch,
  svgSearch,
  openSearch,
  search,
  container,
  inputContainer,
  svgClose,
  btnClose,
} from "./SearchStore.styled";

interface PropsSearch {
  isOpenSearch?: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchStore: React.FC<PropsSearch> = ({ isOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleOpenInput = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (windowWidth >= 1440 && isOpenSearch) {
      setIsOpen(true);
      isOpenSearch(true);
    }
    if (isOpenSearch) {
      isOpenSearch(isOpen);
    }
  }, [isOpen,windowWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div css={container}>
      {isOpen === false && (
        <button css={openSearch} onClick={handleOpenInput}>
          <HiOutlineSearch css={svgSearch} />
        </button>
      )}
      {isOpen && (
        <div css={inputContainer}>
          <button css={search}>
            <HiOutlineSearch css={svgSearch} />
          </button>
          <input
            type="text"
            id="search"
            placeholder="Search"
            css={inputSearch}
            autoComplete="off"
          />
          <button css={btnClose} onClick={handleOpenInput}>
            <IoIosClose css={svgClose} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchStore;
