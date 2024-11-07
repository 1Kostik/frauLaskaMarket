import React, { useEffect, useState, ChangeEvent } from "react";

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

// import { Product } from "Interfaces/Product";
import { getSavedSearchItem } from "@utils/getSavedSearchItem";
import { useLocation, useNavigate } from "react-router-dom";

interface PropsSearch {
  isOpenSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchItem?: React.Dispatch<React.SetStateAction<string>>;
  // setFindProduct?: React.Dispatch<React.SetStateAction<Product[]>>;
  hasFilteredProducts?: boolean;
  setOpenFilter?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchStore: React.FC<PropsSearch> = ({
  isOpenSearch,
  setSearchItem,
  // setFindProduct,
  hasFilteredProducts,
  setOpenFilter,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchProduct, setSearchProduct] = useState(
    getSavedSearchItem() || ""
  );
  const handleOpenInput = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (hasFilteredProducts) {
      setSearchProduct("");
    }
  }, [hasFilteredProducts]);

  useEffect(() => {
    if (windowWidth >= 1440 && isOpenSearch) {
      setIsOpen(true);
      isOpenSearch(true);
    } else if (isOpenSearch) {
      isOpenSearch(isOpen);
    }
  }, [isOpen, windowWidth, isOpenSearch]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };
  const clearSearchParams = () => {
    const url = location.search.split("&");
    const clearUrl =
      location.pathname +
      url.filter((item) => !item.includes("search")).join("&");
    navigate(clearUrl);
  };
  const handleInputBlur = () => {
    if (searchProduct === "" && setSearchItem) {
      clearSearchParams();
      setSearchItem("");
      sessionStorage.setItem(
        "savedSearchItem",
        JSON.stringify(searchProduct.toLowerCase())
      );
      return;
    }
  };
  const handleSearchBtn = () => {
    if (setSearchItem && setOpenFilter) {
      sessionStorage.setItem(
        "savedSearchItem",
        JSON.stringify(searchProduct.toLowerCase())
      );
      setSearchItem(searchProduct.toLowerCase());
      setOpenFilter(false);
    }
    if (searchProduct === "") {
      clearSearchParams();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchBtn();
    }
  };

  return (
    <div css={container}>
      {!isOpen && (
        <button css={openSearch} onClick={handleOpenInput}>
          <HiOutlineSearch css={svgSearch} />
        </button>
      )}
      {isOpen && (
        <div css={inputContainer}>
          <button css={search} onClick={handleSearchBtn}>
            <HiOutlineSearch css={svgSearch} />
          </button>
          <input
            type="text"
            id="search"
            placeholder="Search"
            css={inputSearch}
            value={searchProduct}
            autoComplete="off"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
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
