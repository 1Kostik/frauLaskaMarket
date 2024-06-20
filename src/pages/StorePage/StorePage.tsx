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
  svgFilterSm,
  P,
} from "./StorePage.styled";
import StoreFilter from "@components/StoreFilter/StoreFilter";
import SearchStore from "@components/SearchStore/SearchStore";
import SortingItems from "@components/SortingItems/SortingItems";
import Pagination from "@components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { containerStyles } from "@styles/variables";
import { ReactComponent as FilterSm } from "@assets/icons/filterDim.svg";

function StorePage() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
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
  const handleOnClickCard = (id: number) => {
    navigate(`${id}`);
  };
  const options = [
    "Від найменшої ціни до найбільшої",
    "Від найбільшої ціни до найменшої",
    "За ретингом",
    "За популярністю",
  ];
  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <Section>
        <div css={containerStyles}>
          <MaineContainer>
            {openFilter && <StoreFilter closeFilter={setOpenFilter} />}
            <Container>
              <SearchContainer>
                <SearchStore isOpenSearch={setOpenSearch} />
                <Wrapper>
                  <Button onClick={handleOpenFilter}>
                    {/* <Filter css={svgFilter} /> */}
                    <FilterSm css={svgFilterSm} />
                    <P>Фільтр</P>
                  </Button>
                  <SortingItems
                    options={options}
                    width={"260px"}
                    isOpenSearch={openSearch}
                    isOpenFilter={openFilter}
                  />
                </Wrapper>
              </SearchContainer>

              <ProductListContainer>
                {currentItem &&
                  currentItem.map((item) => (
                    <ProductCard
                      key={item}
                      show={openFilter}
                      handleOnClickCard={handleOnClickCard}
                      id={item}
                    />
                  ))}
              </ProductListContainer>
            </Container>
          </MaineContainer>
        </div>
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
