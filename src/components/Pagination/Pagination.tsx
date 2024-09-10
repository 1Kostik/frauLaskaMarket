import React from "react";
import {
  arrow,
  ButtonPage,
  Container,
  doubleArrow,
  PaginationContainer,
} from "./Pagination.styled";
import { ReactComponent as ArrowNext } from "@assets/icons/arrow_next.svg";
import { ReactComponent as ArrowPrev } from "@assets/icons/arrow_prev.svg";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface IPagination {
  totalPage: number;
  countItemPages: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstPageBtn:() => void;
  lastPageBtn:() => void;
  currentPage: number;
  lastPage: number;
}

const Pagination: React.FC<IPagination> = ({
  totalPage,
  countItemPages,
  paginate,
  prevPage,
  nextPage,
  firstPageBtn,
  lastPageBtn,
  currentPage,
  lastPage,
}) => {
  const totalPages = Math.ceil(totalPage / countItemPages);

  const numberOfPagesToDisplay = () => {
    const range = 5;
    let start: number;
    let end: number;

    if (totalPages <= range) {
      // If there are 5 or fewer pages, display all pages
      start = 0;
      end = totalPages;
    } else {
      // If more than 5 pages, calculate the start and end of the range
      const halfRange = Math.floor(range / 2);

      if (currentPage <= halfRange) {
        // If current page is near the start
        start = 0;
        end = range;
      } else if (currentPage + halfRange >= totalPages) {
        // If current page is near the end
        start = totalPages - range;
        end = totalPages;
      } else {
        // If current page is in the middle
        start = currentPage - halfRange - 1;
        end = currentPage + halfRange;
      }
    }

    return Array.from({ length: end - start }, (_, i) => i + start + 1);
  };

  return (
    <Container>
      <PaginationContainer>
      <button
          onClick={() => firstPageBtn()}
          style={{ visibility: totalPages < 3 || currentPage === 1 ? "hidden" : "visible" }}         
        >
      <MdKeyboardDoubleArrowLeft css={doubleArrow}/>
      </button>
        <button
          onClick={() => prevPage()}
          style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
        >
          <ArrowPrev css={arrow}/>
        </button>
        {numberOfPagesToDisplay().map((page) => (
          <ButtonPage
            key={page}
            onClick={() => paginate(page)}
            currentPage={currentPage === page}
            style={{ visibility: totalPages > 1 ? "visible" : "hidden" }}
          >
            {page}
          </ButtonPage>
        ))}
        <button
          onClick={() => nextPage()}
          style={{ visibility: currentPage === lastPage ? "hidden" : "visible" }}
        >
          <ArrowNext css={arrow}/>
        </button>
        <button
          onClick={() => lastPageBtn()}    
          style={{ visibility: totalPages < 3 || currentPage === lastPage ? "hidden" : "visible" }}    
        >
        <MdKeyboardDoubleArrowRight  css={doubleArrow}/>
        </button>
      </PaginationContainer>
    </Container>
  );
};

export default Pagination;
