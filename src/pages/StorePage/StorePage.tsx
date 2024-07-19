import HeroSection from "@components/HeroSection/HeroSection";
import ProductCard from "@components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
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
import { Product } from "Interfaces/Product";
import { findProducts, getProductsAndSorted } from "@services/servicesApi";

function StorePage() {
  const navigate = useNavigate();

  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [typeOfSort, setTypeOfSort] = useState<number | string | null>(
    "Від найменшої ціни до найбільшої"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [findProduct, setFindProduct] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const countItemPages = 12;
  const lastIndex = currentPage * countItemPages;
  const firstIndex = lastIndex - countItemPages;

  let currentItems =
    products && filteredProducts.length > 0
      ? filteredProducts
      : findProduct.length > 0
      ? findProduct
      : products;

  const totalPage =
    products && filteredProducts.length > 0
      ? filteredProducts.length
      : findProduct.length > 0
      ? findProduct.length
      : products.length;

  const lastPage = Math.ceil(totalPage / countItemPages);

  const options = [
    "Від найменшої ціни до найбільшої",
    "Від найбільшої ціни до найменшої",
    "За ретингом",
    "За популярністю",
  ];

  useEffect(() => {
    let queryParams = "";
    switch (typeOfSort) {
      case "Від найменшої ціни до найбільшої":
        queryParams = "sortOrder=ASC&sortField=price";
        break;
      case "Від найбільшої ціни до найменшої":
        queryParams = "sortOrder=DESC&sortField=price";
        break;
      case "За ретингом":
        queryParams = "sortOrder=DESC&sortField=ranking";
        break;
      case "За популярністю":
        queryParams = "sortOrder=DESC&sortField=popularity";
        break;
      default:
        queryParams = "";
    }

    async function fetchProducts() {
      try {
        const result = await getProductsAndSorted(queryParams);
        setProducts(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, [typeOfSort]);

  useEffect(() => {
    if (searchItem === "") {
      return;
    }

    async function findProduct(searchItem: string) {
      // Заменяем символы _ на пробелы
      const queryParams = `search=${searchItem.split("_").join(" ")}`;
      console.log('queryParams :>> ', queryParams);
      try {
        const result = await findProducts(queryParams);
        setFindProduct(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    console.log('Searching for:', searchItem);
    findProduct(searchItem);

  }, [searchItem]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setSearchItem("");
      setFindProduct([]);
    } else if (searchItem !== "") {
      setFilteredProducts([]);
    }
  }, [filteredProducts, searchItem]);

  useEffect(() => {
    if (products && searchItem !== "" && products.length > 0) {
      const findItem = products.filter((item: Product) =>
        item.title.toLowerCase().startsWith(searchItem.toLowerCase())
      );
      setFindProduct(findItem);
    } else {
      setFindProduct([]);
    }
  }, [searchItem]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (openFilter && windowWidth >= 360 && windowWidth < 768) {
      document.body.classList.add("no-scroll");
      document.querySelector("#topBtn")?.classList.add("btn-hide");
    } else {
      document.querySelector("#topBtn")?.classList.remove("btn-hide");
      document.body.classList.remove("no-scroll");
    }
  }, [openFilter, windowWidth]);

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

  let sortedArray = [...currentItems].slice(firstIndex, lastIndex);

  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <Section>
        <div css={containerStyles}>
          <MaineContainer>
            {openFilter && (
              <StoreFilter
                closeFilter={setOpenFilter}
                setFilteredProducts={setFilteredProducts}
              />
            )}
            <Container>
              <SearchContainer>
                <SearchStore
                  isOpenSearch={setOpenSearch}
                  setSearchItem={setSearchItem}
                  setFindProduct={setFindProduct}
                  hasFilteredProducts={filteredProducts.length > 0}
                  setOpenFilter={setOpenFilter}
                />
                <Wrapper>
                  <Button onClick={handleOpenFilter}>
                    <FilterSm css={svgFilterSm} />
                    <P>Фільтр</P>
                  </Button>
                  <SortingItems
                    options={options}
                    width={"260px"}
                    isOpenSearch={openSearch}
                    isOpenFilter={openFilter}
                    setSelectedOption={setTypeOfSort}
                    selectedOption={typeOfSort}
                  />
                </Wrapper>
              </SearchContainer>

              <ProductListContainer>
                {sortedArray &&
                  sortedArray.map((item: Product) => (
                    <ProductCard
                      key={item.id}
                      show={openFilter}
                      handleOnClickCard={() => handleOnClickCard(item.id)}
                      item={item}
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
