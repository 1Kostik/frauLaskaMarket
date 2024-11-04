import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  currentPageTitle,
  navContainer,
  previosPageTitle,
  svgArrowBack,
  svgArrowRight,
} from "./BackNavigation.styled";
interface IBackNavigationProps {
  previousPage: string;
  currentPage: string;
}

const BackNavigation: React.FC<IBackNavigationProps> = ({
  previousPage,
  currentPage,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div css={navContainer}>
      <button onClick={handleBackClick}>
        <IoArrowBack css={svgArrowBack} />
      </button>
      <h2 onClick={handleBackClick} css={previosPageTitle}>
        {previousPage}
      </h2>
      <MdOutlineKeyboardArrowRight css={svgArrowRight} />
      <h2 css={currentPageTitle}>{currentPage}</h2>
    </div>
  );
};

export default BackNavigation;
