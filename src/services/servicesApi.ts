import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081/api/";

export const getCategories = async () => {
  const { data } = await axios.get("categories");
  return data;
};

export const postCategory = async (title: string) => {
  const newCategory = { title };
  const { data } = await axios.post("categories", newCategory);
  return data;
};

export const deleteCategory = async (id: number) => {
  const { data } = await axios.delete(`categories/${id}`);
  return data;
};

export const patchCategory = async ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const { data } = await axios.patch(`categories/${id}`, { title: name });
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await axios.get(`products/${id}`);
  return data;
};

export const postAdvert = async (formData: FormData) => {
  const { data } = await axios.post("products", formData);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios.get(`products`);
  return data;
};

export const getProductsAndSorted = async (queryParams:string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};

export const findProducts = async (queryParams:string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};

export const getCategoriesProductCount = async () => {
  const { data } = await axios.get(`categories/product-count`);
  return data;
};

/*
Дмитрий, [25.07.2024 16:35]
import HeroSection from "@components/HeroSection/HeroSection";
import ProductCard from "@components/ProductCard/ProductCard";
import { useCallback, useEffect, useMemo, useState } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { containerStyles } from "@styles/variables";
import { ReactComponent as FilterSm } from "@assets/icons/filterDim.svg";
import { Product } from "Interfaces/Product";
import { findProducts, getProductsAndSorted } from "@services/servicesApi";

function StorePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const {
    sortOrder = "ASC",
    sortField = "price",
    page,
    limit,
    search,
    categoryId,
    productId,
  } = params;

  const filteredParams = {
    sortOrder: sortOrder  undefined,
    sortField: sortField  undefined,
    page: page  undefined,
    limit: limit  undefined,
    search: search  undefined,
    categoryId: categoryId  undefined,
    productId: productId || undefined,
  };

  const nonEmptyParams = Object.entries(filteredParams).reduce((acc, [key, value]) => {
    if(value !== undefined) {
      acc[key] = value; 
    }
    return acc;
  }, {} as  Record<string, string>);

  const queryParams = new URLSearchParams(nonEmptyParams).toString();

  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [typeOfSort, setTypeOfSort] = useState<number | string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [findProduct, setFindProduct] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    switch (sortOrder=${sortOrder}&sortField=${sortField}) {
      case sortOrder=ASC&sortField=price:
        setTypeOfSort("Від найменшої ціни до найбільшої");
        break;
      case sortOrder=DESC&sortField=price:
        setTypeOfSort("Від найбільшої ціни до найменшої");
        break;
      case sortOrder=DESC&sortField=ranking:
        setTypeOfSort("За ретингом");
        break;
      case sortOrder=DESC&sortField=popularity:
        setTypeOfSort("За популярністю");
        break;
      default:
        break;
    }
  }, [sortField, sortOrder]);

  const updateSearchParams = useCallback(
    (newParams: Record<string, string>) => {
      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        console.log("updatedParams", ...updatedParams);
        for (const [key, value] of Object.entries(newParams)) {
          if (value === "") continue;
          updatedParams.set(key, value);
        }
        return updatedParams;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    updateSearchParams({
      page: currentPage.toString(),
      limit: "12",
      search: searchItem.trim(),
      categoryId: "2",
      productId: "88",
    });
  }, [currentPage, searchItem, categoryId, productId, updateSearchParams]);

  const countItemPages = 12;
  const lastIndex = currentPage * countItemPages;
  const firstIndex = lastIndex - countItemPages;

  const currentItems =
    products && filteredProducts.length > 0
      ? filteredProducts
      : findProduct.length > 0
      ? findProduct
      : products;

Дмитрий, [25.07.2024 16:35]
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
    switch (typeOfSort) {
      case "Від найменшої ціни до найбільшої":
        updateSearchParams({ sortOrder: "ASC", sortField: "price" });
        break;
      case "Від найбільшої ціни до найменшої":
        updateSearchParams({ sortOrder: "DESC", sortField: "price" });
        break;
      case "За ретингом":
        updateSearchParams({ sortOrder: "DESC", sortField: "ranking" });
        break;
      case "За популярністю":
        updateSearchParams({ sortOrder: "DESC", sortField: "popularity" });
        break;
      default:
        break;
    }
  }, [updateSearchParams, typeOfSort]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await getProductsAndSorted(queryParams);
        setProducts(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, [limit, page, search, sortField, sortOrder]);

  useEffect(() => {
    if (searchItem === "") {
      return;
    }

    async function findProduct(searchItem: string) {
      // Заменяем символы _ на пробелы
      const queryParams = search=${searchItem.split("_").join(" ")};
      console.log("queryParams :>> ", queryParams);
      try {
        const result = await findProducts(queryParams);
        setFindProduct(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    console.log("Searching for:", searchItem);
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
    navigate(${id});
  };

  const sortedArray = [...currentItems].slice(firstIndex, lastIndex);

Дмитрий, [25.07.2024 16:35]
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
*/