import React from "react";
import {
  ButtonPage,
  Container,
  PaginationContainer,
} from "./Pagination.styled";
import { ReactComponent as ArrowNext } from "@assets/icons/arrow_next.svg";
import { ReactComponent as ArrowPrev } from "@assets/icons/arrow_prev.svg";
interface IPagination {
  totalPage: number;
  countItemPages: number;
  paginate: (pageNamber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
  lastPage: number;
}

const Pagination: React.FC<IPagination> = ({
  totalPage,
  countItemPages,
  paginate,
  prevPage,
  nextPage,
  currentPage,
  lastPage,
}) => {
  const btnNumber = [];
  for (let i = 1; i <= Math.ceil(totalPage / countItemPages); i++) {
    btnNumber.push(i);
  }

  console.log("countItemPages :>> ", countItemPages);
  console.log("currentPage :>> ", currentPage);

  const start = currentPage - 1;
  const end = lastPage - (5 - currentPage);

  console.log("start :>> ", start);
  console.log("end :>> ", end);

  const numberOfPagesToDisplay = btnNumber.slice(
    start === 1 ? 0 : start < 4 ? 0 : start > 4 ? 4 : start,
    end <= 8 ? 5 : end
  );

  return (
    <Container>
      <PaginationContainer>
        <button
          onClick={() => prevPage()}
          style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
        >
          <ArrowPrev />
        </button>
        {numberOfPagesToDisplay.map((item) => (
          <ButtonPage
            key={item}
            onClick={() => paginate(item)}
            currentPage={currentPage === item}
            style={{ visibility: btnNumber.length > 1 ? "visible" : "hidden" }}
          >
            {item}
          </ButtonPage>
        ))}
        <button
          onClick={() => nextPage()}
          style={{
            visibility: currentPage === lastPage ? "hidden" : "visible",
          }}
        >
          <ArrowNext />
        </button>
      </PaginationContainer>
    </Container>
  );
};

export default Pagination;
