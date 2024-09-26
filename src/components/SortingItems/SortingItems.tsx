import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";

import { ReactComponent as Checked } from "@assets/icons/checked.svg";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg";

import {
  Container,
  P,
  SelectContainer,
  SelectOption,
  SelectOptionContainer,
  SelectTitleContainer,
  svgCheckedStyles,
  SelectOne,
  SvgContainer,
  svgArrowUp,
  svgArrowDpwn,
} from "./SortingItems.styled";

import { updateOrder, updatePamentStatus } from "@services/servicesApi";

interface ISortingItProps<T> {
  idOrders?: number;
  width?: string;
  widthTagP?: string;
  widthContainer?: string;
  height?: string;
  border?: string;
  options: T[] | null;
  padding?: string;
  color?: string;
  top?: string;
  gap?: string;
  fontSize?: string;
  borderRadius?: string;
  justifyContent?: string;
  backGround?: string;
  isOpenSearch?: boolean;
  isOpenFilter?: boolean;
  disableWidth?: string;
  setSelectedOption?: Dispatch<SetStateAction<T | null>>;
  selectedOption?: T | null;
  setIsOpenModal?: Dispatch<SetStateAction<boolean>>;
  setIdForUpdCount?: Dispatch<SetStateAction<number | null>>;
  disable?: boolean;
}
const SortingItems = <T extends number | string>({
  width,
  idOrders,
  widthTagP,
  widthContainer,
  height,
  border,
  options,
  padding,
  top,
  gap,
  color,
  fontSize,
  borderRadius,
  justifyContent,
  backGround,
  isOpenSearch,
  isOpenFilter,
  disableWidth,
  setSelectedOption,
  selectedOption,
  setIsOpenModal,
  disable,
  setIdForUpdCount,
}: ISortingItProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      if (setSelectedOption && options && options.length > 0) {
        setSelectedOption(options[0]);
        setChecked(true);
      }
      isInitialMount.current = false;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedOption, options]);

  const handleClick = () => {
    if (disable) {
      return;
    }
    setIsOpen((prev) => !prev);
  };
  async function updateStatus(orderId: number, status: string) {
    await updateOrder(orderId, status);
  }
  async function changePamentStatus(id: number) {
    await updatePamentStatus(id);
  }
  const handleSelect = (option: T) => {
    if (setSelectedOption) {
      setSelectedOption(option);
      setChecked(true);
      setIsOpen(false);
      if (setIsOpenModal && option === "Відхилено") {
        setIsOpenModal(true);
      } else if (setIsOpenModal) {
        setIsOpenModal(false);
      }
    }
    if (idOrders && setIdForUpdCount && option === "Відправлено") {
      setIdForUpdCount(Number(idOrders));
      updateStatus(idOrders, option);
    }
    if (idOrders && option === "Оплачено") {
      changePamentStatus(idOrders);
    }
  };

  const isChange = isOpenFilter && isOpenSearch;
  return (
    <Container>
      <SelectContainer height={height} widthContainer={widthContainer}>
        <SelectTitleContainer
          onClick={handleClick}
          isOpen={isOpen}
          padding={padding}
          border={border}
          borderRadius={borderRadius}
          justifyContent={justifyContent}
          backGround={backGround}
        >
          <P
            widthTagP={widthTagP}
            isOpen={isOpen}
            isChange={isChange}
            isOpenSearch={isOpenSearch}
            disableWidth={disableWidth}
            color={color}
            fontSize={fontSize}
          >
            {selectedOption ? selectedOption : ""}
          </P>
          {isOpen && !disable ? (
            <ArrowUp css={svgArrowUp(color)} />
          ) : (
            <ArrowDpwn css={svgArrowDpwn(color)} />
          )}
        </SelectTitleContainer>
        {isOpen && (
          <SelectOptionContainer
            width={width}
            color={color}
            backGround={backGround}
            top={top}
          >
            {options &&
              options.map((option, i) => (
                <SelectOne key={option + `${i}`} gap={gap}>
                  <SvgContainer>
                    {checked && selectedOption === option && (
                      <Checked css={svgCheckedStyles(color)} />
                    )}
                  </SvgContainer>
                  <SelectOption
                    key={i}
                    onClick={() => handleSelect(option)}
                    color={color}
                  >
                    {option}
                  </SelectOption>
                </SelectOne>
              ))}
          </SelectOptionContainer>
        )}
      </SelectContainer>
    </Container>
  );
};

export default SortingItems;
