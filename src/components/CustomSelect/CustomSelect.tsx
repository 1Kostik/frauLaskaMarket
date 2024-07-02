import { useEffect, useState } from "react";
import { FormikProps } from "formik";
import { dropdown, selectWrapper, selectorStyle } from "./CustomSelect.styled";
import { ReactComponent as ArrowDownIcon } from "@assets/icons/arrow-down-select.svg";
import { IAdvert } from "Interfaces/IAdvert";

interface ICustomSelectProps {
  formik: FormikProps<IAdvert>;
  selectedCategory?: number;
}

export enum Category {
  BODY_CARE = 1,
  SUPPLEMENTS,
  SCENTED_CANDLES,
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  formik,
  selectedCategory,
}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [categogy, setCategogy] = useState<Category | undefined>(
    selectedCategory
  );

  const handleShowDropDown = () => {
    setIsShowDropdown((prev) => !prev);
    formik.setFieldError("categoryId", undefined);
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement> | number) => {
    let optionValue;
    if (typeof e === "number") {
      optionValue = e;
      console.log("e", e);
    } else {
      optionValue = (e.target as HTMLDivElement).innerText;
    }

    setCategogy(() => {
      console.log("set");
      switch (optionValue) {
        case "Догляд за тілом":
          return Category.BODY_CARE;
        case "Харчові добавки":
          return Category.SUPPLEMENTS;
        case "Ароматизовані свічки":
          return Category.SCENTED_CANDLES;
        default:
          break;
      }
    });
    setIsShowDropdown((prev) => !prev);
  };

  const handleSelectedCategory = () => {
    switch (categogy) {
      case Category.BODY_CARE:
        return "Догляд за тілом";
      case Category.SUPPLEMENTS:
        return "Харчові добавки";
      case Category.SCENTED_CANDLES:
        return "Ароматизовані свічки";

      default:
        return "Оберіть категорію";
    }
  };

  useEffect(() => {
    if (categogy) {
      formik.setFieldValue("categoryId", categogy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categogy]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("[data-options]") &&
        !target.closest("[data-dropdown-trigger]")
      ) {
        setIsShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div css={selectWrapper}>
      <div
        onClick={handleShowDropDown}
        data-dropdown-trigger
        css={selectorStyle(isShowDropdown)}
      >
        <p>{handleSelectedCategory()}</p>
        <ArrowDownIcon className="arrow" />
      </div>
      {isShowDropdown && (
        <div data-options css={dropdown(categogy)} onClick={handleOptionClick}>
          <div>Догляд за тілом</div>
          <div>Харчові добавки</div>
          <div>Ароматизовані свічки</div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
