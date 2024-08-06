import React, { useEffect, useState } from "react";
import {
  ButtonClose,
  Container,
  H2,
  svgClose,
  TitleContainer,
  ButtonShow,
  ItemContainer,
  Wrapper,
  Label,
  Input,
  svgCheckBox,
  SubItemContainer,
  P1,
  P2,
  FilterBtn,
  FilterWrapper,
} from "./StoreFilter.styled";
import { ReactComponent as Close } from "@assets/icons/close.svg";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/arrow-down-select.svg";
import { ReactComponent as CheckBox } from "@assets/icons/checkbox.svg";
import { ReactComponent as CheckBoxActive } from "@assets/icons/checkbox-active.svg";
import { useAppDispatch } from "@redux/hooks";
import { fetchCategories } from "@redux/categories/operations";
import { getCategoriesProductCount } from "@services/servicesApi";

interface ISorteFilter {
  closeFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredItemsId: React.Dispatch<
    React.SetStateAction<Record<string, string>[]>
  >;
}

interface CheckedItems {
  id: number;
  productsId: number[];
}

const StoreFilter: React.FC<ISorteFilter> = ({
  closeFilter,
  setFilteredItemsId,
}) => {
  const getSavedFilter = () => {
    const savedFilter = localStorage.getItem("filter");
    const parsedFilter = savedFilter && JSON.parse(savedFilter);
    return parsedFilter || [];
  };
  const dispatch = useAppDispatch();
  const [openCategories, setOpenCategories] = useState<{
    [key: number]: boolean;
  }>({});
  const [checkedItems, setCheckedItems] = useState<CheckedItems[]>(
    getSavedFilter()
  );

  const [categoriesProductCount, setCategoriesProductCount] = useState<any>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    async function fetchCategoriesProductCount() {
      const result = await getCategoriesProductCount();
      setCategoriesProductCount(result);
    }
    fetchCategoriesProductCount();
  }, []);

  const handleCheckboxChange = (
    typeKey: string,
    item: { id: number; category_id?: number }
  ) => {
    if (typeKey === "category") {
      if (!checkedItems.some((checkedItem) => checkedItem.id === item.id)) {
        setCheckedItems((prev) => [...prev, { id: item.id, productsId: [] }]);
      } else {
        setCheckedItems((prev) =>
          prev.filter((checkedItem) => checkedItem.id !== item.id)
        );
        setOpenCategories((prev) => ({ ...prev, [item.id]: false }));
      }
    } else if (typeKey === "product") {
      setCheckedItems((prev) =>
        prev.map((checkedItem) => {
          if (checkedItem.id === item.category_id) {
            const productsId = checkedItem.productsId.includes(item.id)
              ? checkedItem.productsId.filter((id) => id !== item.id)
              : [...checkedItem.productsId, item.id];
            return { ...checkedItem, productsId };
          }
          return checkedItem;
        })
      );
    }
  };

  const handleClick = (id: number) => {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClose = () => {
    closeFilter(false);
  };

  const handleShowResult = () => {
    const filteredItems = checkedItems.map((item) => ({
      categoryId: item.id.toString(),
      productId: item.productsId.join(","),
    }));
    setFilteredItemsId(filteredItems);
  };

  const convertJSONToReadableFormat = (data: any) => {
    const uniqueProducts: any[] = [];
    const productIds = new Set();

    data.forEach((item: any) => {
      JSON.parse(item.products).forEach((product: any) => {
        if (!productIds.has(product.product_id)) {
          uniqueProducts.push(product);
          productIds.add(product.product_id);
        }
      });
    });

    return uniqueProducts;
  };

  const products =
    categoriesProductCount &&
    convertJSONToReadableFormat(categoriesProductCount);

  return (
    <FilterWrapper>
      <Container>
        <TitleContainer>
          <H2>Фільтр</H2>
          <ButtonClose onClick={handleClose}>
            <Close css={svgClose} />
          </ButtonClose>
        </TitleContainer>
        {categoriesProductCount &&
          categoriesProductCount.map((category: any) => (
            <div key={category.id}>
              <ItemContainer isOpen={openCategories[category.id]}>
                <Wrapper>
                  <Label htmlFor={`checkBox${category.id}`}>
                    {checkedItems.some(
                      (checkedItem) => checkedItem.id === category.id
                    ) ? (
                      <CheckBoxActive />
                    ) : (
                      <CheckBox css={svgCheckBox} />
                    )}
                  </Label>
                  <Input
                    type="checkbox"
                    id={`checkBox${category.id}`}
                    checked={checkedItems.some(
                      (checkedItem) => checkedItem.id === category.id
                    )}
                    onChange={() =>
                      handleCheckboxChange("category", {
                        id: category.id,
                      })
                    }
                  />
                  <P1>{category.title}</P1>
                </Wrapper>
                <Wrapper>
                  <P2>{category.product_count}</P2>
                  <ButtonShow
                    onClick={() => handleClick(category.id)}
                    disabled={
                      !checkedItems.some(
                        (checkedItem) => checkedItem.id === category.id
                      )
                    }
                  >
                    {openCategories[category.id] &&
                    checkedItems.some(
                      (checkedItem) => checkedItem.id === category.id
                    ) ? (
                      <ArrowUp />
                    ) : (
                      <ArrowDown />
                    )}
                  </ButtonShow>
                </Wrapper>
              </ItemContainer>
              {openCategories[category.id] &&
              checkedItems.some(
                (checkedItem) => checkedItem.id === category.id
              ) ? (
                <>
                  {products &&
                    products
                      .filter((item: any) => item.categoryId === category.id)
                      .map((item: any) => (
                        <SubItemContainer
                          key={`${item.product_id}`}
                          isOpen={openCategories[category.id]}
                        >
                          <Wrapper>
                            <Label htmlFor={`checkBox${item.product_id}`}>
                              {checkedItems
                                .find(
                                  (checkedItem) =>
                                    checkedItem.id === item.categoryId
                                )
                                ?.productsId.includes(item.product_id) ? (
                                <CheckBoxActive />
                              ) : (
                                <CheckBox css={svgCheckBox} />
                              )}
                            </Label>
                            <Input
                              type="checkbox"
                              id={`checkBox${item.product_id}`}
                              checked={
                                checkedItems
                                  .find(
                                    (checkedItem) =>
                                      checkedItem.id === item.categoryId
                                  )
                                  ?.productsId.includes(item.product_id) ||
                                false
                              }
                              onChange={() =>
                                handleCheckboxChange("product", {
                                  id: item.product_id,
                                  category_id: item.categoryId,
                                })
                              }
                            />
                            <P1>{item.product_title}</P1>
                          </Wrapper>

                          <Wrapper>
                            <P2>{item.product_quantity}</P2>
                          </Wrapper>
                        </SubItemContainer>
                      ))}
                </>
              ) : null}
            </div>
          ))}
        <FilterBtn onClick={handleShowResult}>Показати</FilterBtn>
      </Container>
    </FilterWrapper>
  );
};

export default StoreFilter;
