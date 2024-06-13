import HeroSection from "@components/HeroSection/HeroSection";
import ProductCard from "@components/ProductCard/ProductCard";
import { useState } from "react";
import {
  Container,
  SearchContainer,
  Button,
  Section,
  MaineContainer,
  Wrapper,
  ProductListContainer,
} from "./StorePage.styled";
import StoreFilter from "@components/StoreFilter/StoreFilter";
import SearchStore from "@components/SearchStore/SearchStore";
import SortingItems from "@components/SortingItems/SortingItems";
import Pagination from "@components/Pagination/Pagination";

function StorePage() {
  const [openFilter, setOpenFilter] = useState(false);
  const arrNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const countItemPages = 12;
  const lastIndex = currentPage * countItemPages;
  const firstIndex = lastIndex - countItemPages;
  const currentItem = arrNumbers.slice(firstIndex, lastIndex);
  const totalPage = arrNumbers.length;
  const lastPage = Math.ceil(totalPage / countItemPages);

  const paginate = (page: number) => setCurrentPage(page);
  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === lastPage) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };
  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <Section>
        <MaineContainer>
          {openFilter && <StoreFilter closeFilter={setOpenFilter} />}
          <Container>
            <SearchContainer>
              <SearchStore />
              <Wrapper>
                <Button onClick={handleOpenFilter}>Фільтр</Button>
                <SortingItems />
              </Wrapper>
            </SearchContainer>

            <ProductListContainer>
              {currentItem &&
                currentItem.map((item) => (
                  <ProductCard key={item} show={openFilter} />
                ))}
            </ProductListContainer>
          </Container>
        </MaineContainer>
        <Pagination
          totalPage={totalPage}
          countItemPages={countItemPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      </Section>
    </>
  );
}

export default StorePage;
