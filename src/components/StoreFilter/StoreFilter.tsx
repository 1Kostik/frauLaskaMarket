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
} from "./StoreFilter.styled";
import { ReactComponent as Close } from "@assets/icons/close.svg";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/arrow-down-select.svg";
import { ReactComponent as CheckBox } from "@assets/icons/checkbox.svg";
import { ReactComponent as CheckBoxActive } from "@assets/icons/checkbox-active.svg";
interface ISorteFilter{
  closeFilter:React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreFilter:React.FC<ISorteFilter> = ({closeFilter}) => {
  const [openCategories, setOpenCategories] = useState<{
    [key: number]: boolean;
  }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: any }>({});
  const items1 = [
    { id: 2, name: "Нічний крем", count: 43 },
    { id: 3, name: "Мило", count: 43 },
    { id: 4, name: "Шампунь", count: 43 },
    { id: 5, name: "Кондиціонер", count: 43 },
    { id: 6, name: "Кондиціонер", count: 43 },
  ];
  const items2 = [
    { id: 3, name: "Вітамін д3", count: 43 },
    { id: 4, name: "Екстракт женьшеня", count: 43 },
    { id: 5, name: "Вітамін В", count: 43 },
    { id: 6, name: "Вітаміни А", count: 43 },
    { id: 7, name: "Вітаміни А", count: 43 },
    { id: 8, name: "Вітаміни А", count: 43 },
  ];
  const items3 = [
    { id: 4, name: "Аромат лимона", count: 43 },
    { id: 5, name: "Аромат троянд", count: 43 },
    { id: 6, name: "Аромат полуниці", count: 43 },
    { id: 8, name: "Аромат фіалок", count: 43 },
    { id: 9, name: "Аромат фіалок", count: 43 },
    { id: 10, name: "Аромат фіалок", count: 43 },
    { id: 11, name: "Аромат фіалок", count: 43 },
  ];

  const categories = [
    { id: 1, name: "Догляд за тілом", count: items1.length, items: items1 },
    { id: 2, name: "Харчові добавки", count: items2.length, items: items2 },
    {
      id: 3,
      name: "Ароматизовані свічки",
      count: items3.length,
      items: items3,
    },
  ];
  useEffect(() => {
    const updatedOpenCategories = { ...openCategories };
    categories.forEach((category) => {
      const hasCheckedItems = category.items.some(
        (item) => checkedItems[`category${category.id}-item${item.id}`]
      );

      if (!hasCheckedItems) {
        updatedOpenCategories[category.id] = false;
      }
    });
    setOpenCategories(updatedOpenCategories);
  }, [checkedItems]);
  const handleClick = (id: number) => {
    if (
      !categories
        .find((category) => category.id === id)
        ?.items.some((_item, i) => checkedItems[`category${id}-item${i}`])
    ) {
      return;
    }
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckboxChange = (categoryId: number, item: any) => {
    const itemId = `category${categoryId}-item${item.id}`;

    setCheckedItems((prev) => {
      if (prev[itemId] && prev[itemId].id === prev[itemId].categoryId) {
        return Object.fromEntries(
          Object.entries(prev).filter(
            ([_key, value]) => prev[itemId].id !== value.categoryId
          )
        );
      } else if (prev[itemId]) {
        const { [itemId]: removedItem, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [itemId]: { ...item, categoryId } };
      }
    });
  };
const handleClose=()=>{
  closeFilter(false)
}
const handleShowResult=()=>{
  closeFilter(false)
}
  return (
    <Container>
      <div style={{ width: "272px" }}>
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
                  {Object.keys(checkedItems).some((key) =>
                    key.startsWith(`category${category.id}`)
                  ) ? (
                    <CheckBoxActive />
                  ) : (
                    <CheckBox css={svgCheckBox} />
                  )}
                </Label>
                <Input
                  type="checkbox"
                  id={`checkBox${category.id}`}
                  checked={Object.keys(checkedItems).some((key) =>
                    key.startsWith(`category${category.id}`)
                  )}
                  onChange={() =>
                    handleCheckboxChange(category.id, {
                      id: category.id,
                      name: category.name,
                      count: category.count,
                    })
                  }
                />
                <P1>{category.name}</P1>
              </Wrapper>
              <Wrapper>
                <P2>{category.count}</P2>
                <ButtonShow onClick={() => handleClick(category.id)}>
                  {openCategories[category.id] &&
                  category.items.some(
                    (_item, i) =>
                      checkedItems[`category${category.id}-item${i}`]
                  ) ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                </ButtonShow>
              </Wrapper>
            </ItemContainer>
            {openCategories[category.id] &&
              category.items.some(
                (_item, i) => checkedItems[`category${category.id}-item${i}`]
              ) && (
                <>
                  {category.items.map((item) => (
                    <SubItemContainer
                      key={`${category.id}-${item.id}`}
                      isOpen={openCategories[category.id]}
                    >
                      <Wrapper>
                        <Label htmlFor={`checkBox${category.id}-${item.id}`}>
                          {checkedItems[
                            `category${category.id}-item${item.id}`
                          ] ? (
                            <CheckBoxActive />
                          ) : (
                            <CheckBox css={svgCheckBox} />
                          )}
                        </Label>
                        <Input
                          type="checkbox"
                          id={`checkBox${category.id}-${item.id}`}
                          checked={
                            !!checkedItems[
                              `category${category.id}-item${item.id}`
                            ]
                          }
                          onChange={() =>
                            handleCheckboxChange(category.id, item)
                          }
                        />
                        <P1>{item.name}</P1>
                      </Wrapper>

                      <Wrapper>
                        <P2>{item.count}</P2>
                      </Wrapper>
                    </SubItemContainer>
                  ))}
                </>
              )}
          </div>
        ))}
        <FilterBtn onClick={handleShowResult}>Показати</FilterBtn>
      </div>
    </Container>
  );
};

export default StoreFilter;
