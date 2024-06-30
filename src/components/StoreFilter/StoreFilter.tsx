import React, { useState } from "react";
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
import { categories, products } from "@assets/products";
import { Product } from "Interfaces/Product";
interface ISorteFilter {
  closeFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
interface ChekedItems {
  id: number;
  categoryId: number;
}
const StoreFilter: React.FC<ISorteFilter> = ({
  closeFilter,
  setFilteredProducts,
}) => {
  const [openCategories, setOpenCategories] = useState<{
    [key: number]: boolean;
  }>({});

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: any }>({});

  const handleCheckboxChange = (typeKey: string, item: ChekedItems) => {
    if (typeKey === "category") {
      if (!Object.keys(checkedItems).includes(`${item.id}`)) {
        setCheckedItems((prev) => {
          return { ...prev, [item.id]: [] };
        });
      } else {
        setCheckedItems((prev) => {
          const { [item.id]: removed, ...rest } = prev;
          setOpenCategories((prev) => ({ ...prev, [item.id]: false }));
          return rest;
        });
      }
    } else if (typeKey === "product") {
      setCheckedItems((prev) => {
        if (!prev[item.categoryId].includes(item.id)) {
          return {
            ...prev,
            [item.categoryId]: [...prev[item.categoryId], item.id],
          };
        } else {
          return {
            ...prev,
            [item.categoryId]: [
              ...prev[item.categoryId].filter((id: number) => id !== item.id),
            ],
          };
        }
      });
    }
  };

  const handleClick = (id: number) => {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClose = () => {
    closeFilter(false);
  };
  const handleShowResult = () => {
    setFilteredProducts([]);

    (() =>
      Object.keys(checkedItems).forEach((categoryId) => {
        if (checkedItems[Number(categoryId)].length === 0) {
          setFilteredProducts((prev) => [
            ...prev,
            ...products.filter(
              (item: Product) => Number(categoryId) === item.categoryId
            ),
          ]);
        } else {
          setFilteredProducts((prev) => [
            ...prev,
            ...products.filter((item: Product) =>
              checkedItems[Number(categoryId)].includes(item.id)
            ),
          ]);
        }
      }))();
  };

  return (
    <FilterWrapper>
      <Container>
        <TitleContainer>
          <H2>Фільтр</H2>
          <ButtonClose onClick={handleClose}>
            <Close css={svgClose} />
          </ButtonClose>
        </TitleContainer>
        {categories.map((category) => (
          <div key={category.id}>
            <ItemContainer isOpen={openCategories[category.id]}>
              <Wrapper>
                <Label htmlFor={`checkBox${category.id}`}>
                  {Object.keys(checkedItems).includes(`${category.id}`) ? (
                    <CheckBoxActive />
                  ) : (
                    <CheckBox css={svgCheckBox} />
                  )}
                </Label>
                <Input
                  type="checkbox"
                  id={`checkBox${category.id}`}
                  checked={Object.keys(checkedItems).includes(`${category.id}`)}
                  onChange={() =>
                    handleCheckboxChange("category", {
                      id: category.id,
                      categoryId: category.id,
                    })
                  }
                />
                <P1>{category.title}</P1>
              </Wrapper>
              <Wrapper>
                <P2>{category.count}</P2>
                <ButtonShow
                  onClick={() => handleClick(category.id)}
                  disabled={checkedItems[category.id] ? false : true}
                >
                  {openCategories[category.id] && checkedItems[category.id] ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                </ButtonShow>
              </Wrapper>
            </ItemContainer>
            {openCategories[category.id] && checkedItems[category.id] ? (
              <>
                {products
                  .filter(({ categoryId }: any) => categoryId === category.id)
                  .map((item: Product) => (
                    <SubItemContainer
                      key={`${item.id}`}
                      isOpen={openCategories[category.id]}
                    >
                      <Wrapper>
                        <Label htmlFor={`checkBox${item.id}`}>
                          {checkedItems[item.categoryId] &&
                          checkedItems[item.categoryId].includes(item.id) ? (
                            <CheckBoxActive />
                          ) : (
                            <CheckBox css={svgCheckBox} />
                          )}
                        </Label>
                        <Input
                          type="checkbox"
                          id={`checkBox${item.id}`}
                          checked={
                            checkedItems[item.categoryId] &&
                            checkedItems[item.categoryId].includes(item.id)
                          }
                          onChange={() =>
                            handleCheckboxChange("product", {
                              id: item.id,
                              categoryId: item.categoryId,
                            })
                          }
                        />
                        <P1>{item.title}</P1>
                      </Wrapper>

                      <Wrapper>
                        <P2>{item.stockCount}</P2>
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
