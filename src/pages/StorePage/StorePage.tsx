import HeroSection from "@components/HeroSection/HeroSection";
import ProductCard from "@components/ProductCard/ProductCard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { containerStyles } from "@styles/variables";
import { ReactComponent as FilterSm } from "@assets/icons/filterDim.svg";
import { Product } from "Interfaces/Product";
import { CategoriesProductCount } from "Interfaces/CategoriesProductCount";
import { getCategoriesProductCount, getCheckedItems, getProductsAndSorted } from "@services/servicesApi";
import {
  getSavedCheckedItems,
  getSavedIsOpenFilter,
} from "@utils/getSavedFilter";
import { getSavedSearchItem } from "@utils/getSavedSearchItem";
import { fetchCategories } from "@redux/categories/operations";
import { loadingProductsStatus } from "@redux/ads/slice";
import { useAppDispatch } from "@redux/hooks";
import ErrorProducts from "@components/ErrorProducts/ErrorProducts";


interface SavedFilter {
  id: string;
  productsId: string[];
}

function StorePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { sortOrder = "ASC", sortField = "price", page, search } = params;

  const savedFilteredItemsId = (): {
    categoryId: string;
    productId: string;
  }[] => {
    return getSavedCheckedItems().map((item: SavedFilter) => ({
      categoryId: item.id.toString(),
      productId: item.productsId.join(","),
    }));
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [typeOfSort, setTypeOfSort] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(Number(page || 1));
  const [openSearch, setOpenSearch] = useState(false);
  const [searchItem, setSearchItem] = useState<string>(
    getSavedSearchItem() || ""
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isAdvertDeleted, setIsAdvertDeleted] = useState(false);

    const [categoriesProductCount, setCategoriesProductCount] =
      useState<CategoriesProductCount[]>();

  const countItemPages = 12;
  const lastPage = totalPage && Math.ceil(totalPage / countItemPages);

  const options = [
    "Від найменшої ціни до найбільшої",
    "Від найбільшої ціни до найменшої",
    "За популярністю",
  ];

  const isInitialMount = useRef(true);

  const writeUrlFromStorage = () => {
    const categoryId = savedFilteredItemsId().map((item) => item.categoryId);
    const productId = savedFilteredItemsId().flatMap((item) =>
      item.productId.split(",")
    );
    const newParams = {
      ...params,
      categoryId,
      productId,
    };

    updateSearchParams(newParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const checkedItemsArr: number[] = [];
        const openedCategories: { [key: string]: boolean } = {};
        const checkedCategories: { id: string; productsId: [] }[] = [];

        searchParams.forEach((value, key) => {
          if (key.includes("categoryId")) {
            sessionStorage.setItem("savedOpenFilter", JSON.stringify(true));
            checkedCategories.push({ id: value, productsId: [] });
          } else if (key.includes("productId")) {
            checkedItemsArr.push(Number(value));
          }
        });

        const checkedItems =
          checkedItemsArr.length > 0
            ? await getCheckedItems(checkedItemsArr)
            : [];

        checkedItems?.forEach(
          ({ id, productsId }: { id: string; productsId: string[] }) => {
            if (productsId.length > 0) {
              openedCategories[id] = true;
            }
          }
        );

        sessionStorage.setItem(
          "savedFilterState",
          JSON.stringify({
            openCategories: openedCategories,
            checkedItems:
              checkedItems.length > 0 ? checkedItems : checkedCategories,
          })
        );
      } catch (error) {
        console.error("Ошибка при записи в sessionStorage:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    getSavedIsOpenFilter() && setOpenFilter(getSavedIsOpenFilter());
  }, []);

  useEffect(() => {
    sessionStorage.setItem("savedOpenFilter", JSON.stringify(openFilter));
  }, [openFilter]);

  useEffect(() => {
    if (isInitialMount.current) {
      switch (`sortOrder=${sortOrder}&sortField=${sortField}`) {
        case `sortOrder=ASC&sortField=price`:
          setTypeOfSort("Від найменшої ціни до найбільшої");
          break;
        case `sortOrder=DESC&sortField=price`:
          setTypeOfSort("Від найбільшої ціни до найменшої");
          break;
        case `sortOrder=DESC&sortField=popularity`:
          setTypeOfSort("За популярністю");
          break;
        default:
          break;
      }
      isInitialMount.current = false;
    }
  }, [sortOrder, sortField]);

  useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        async function fetchCategoriesProductCount() {
          const result = await getCategoriesProductCount();
          setCategoriesProductCount(result);
        }
        fetchCategoriesProductCount();
      }, []);

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | string[]>) => {
      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        Object.keys(newParams).forEach((key) => updatedParams.delete(key));
        Object.entries(newParams).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((val) => updatedParams.append(key, val));
          } else if (value !== "") {
            updatedParams.set(key, value);
          }
        });
        return updatedParams;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    switch (typeOfSort) {
      case "Від найменшої ціни до найбільшої":
        updateSearchParams({ sortOrder: "ASC", sortField: "price" });
        break;
      case "Від найбільшої ціни до найменшої":
        updateSearchParams({ sortOrder: "DESC", sortField: "price" });
        break;
      case "За популярністю":
        updateSearchParams({ sortOrder: "DESC", sortField: "popularity" });
        break;
      default:
        break;
    }
  }, [typeOfSort, isAdvertDeleted, updateSearchParams]);

  useEffect(() => {
    const initialCategoryIds = searchParams.getAll("categoryId");
    const initialProductIds = searchParams.getAll("productId");

    const newSearchParams = {
      ...params,
      sortOrder: sortOrder,
      sortField: sortField,
      categoryId: initialCategoryIds.length > 0 ? initialCategoryIds : [],
      productId: initialProductIds.length > 0 ? initialProductIds : [],
      page: currentPage.toString(),
      limit: countItemPages.toString(),
      search: searchItem.trim() || search,
    };

    const nonEmptyParams = Object.entries(newSearchParams).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          const filteredValue = value.filter((v) => v !== "");
          acc[key] = filteredValue;
        } else if (value !== undefined && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string | string[]>
    );

    updateSearchParams(nonEmptyParams);

    const searchParamsString = new URLSearchParams();

    Object.entries(nonEmptyParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (val !== "") {
            searchParamsString.append(key, val);
          }
        });
      } else if (value !== "") {
        searchParamsString.append(key, value);
      }
    });

    async function fetchProducts() {
      try {
        dispatch(loadingProductsStatus(true));
        const result = await getProductsAndSorted(
          searchParamsString.toString()
        );
        dispatch(loadingProductsStatus(false));
        setTotalPage(Number(result.total_products));
        setProducts(result.productData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        dispatch(loadingProductsStatus(false));
      }
    }

    fetchProducts();
  }, [
    currentPage,
    searchItem,
    sortOrder,
    sortField,
    isAdvertDeleted,
    params,
    updateSearchParams,
    searchParams,
    search,
  ]);

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
  const firstPageBtn = () => setCurrentPage(1);
  const lastPageBtn = () => setCurrentPage(lastPage);
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
    navigate(`/product/${id}`, { state: { from: location.pathname } });
  };

  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <Section>
        <div css={containerStyles}>
          <MaineContainer>
            {openFilter && (
              <StoreFilter
                closeFilter={setOpenFilter}
                writeUrlFromStorage={writeUrlFromStorage}
                setCurrentPage={setCurrentPage}
                categoriesProductCount={categoriesProductCount}
              />
            )}
            <Container>
              <SearchContainer>
                <SearchStore
                  isOpenSearch={setOpenSearch}
                  setSearchItem={setSearchItem}
                  setOpenFilter={setOpenFilter}
                  isOpenFilter={openFilter}
                />
                <Wrapper>
                  <Button onClick={handleOpenFilter}>
                    <FilterSm css={svgFilterSm} />
                    <P>Фільтр</P>
                  </Button>
                  <SortingItems<string>
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
                {products.length === 0 && searchItem !== "" ? (
                  <ErrorProducts />
                ) : (
                  products.map((item: Product) => (
                    <ProductCard
                      key={item.id}
                      show={openFilter}
                      handleOnClickCard={() => handleOnClickCard(item.id)}
                      item={item}
                      setIsAdvertDeleted={setIsAdvertDeleted}
                    />
                  ))
                )}
              </ProductListContainer>
            </Container>
          </MaineContainer>
        </div>
        {products && products.length > 0 && (
          <Pagination
            totalPage={totalPage}
            countItemPages={countItemPages}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            firstPageBtn={firstPageBtn}
            lastPageBtn={lastPageBtn}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        )}
      </Section>
    </>
  );
}

export default StorePage;
