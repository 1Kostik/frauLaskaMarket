import React, { useEffect, useRef, useState } from "react";
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

interface ISortingItProps {
  width?: string;
  options: number[] | string [] | null;
  padding?: string;
  borderRadius?: string;
  isOpenSearch?: boolean;
  isOpenFilter?: boolean;
  disableWidth?:string;
  setSelectedOption?:React.Dispatch<React.SetStateAction<number | string | null>>;
  selectedOption?:number| string | null;
}
const SortingItems: React.FC<ISortingItProps> = ({
  width,
  options,
  padding,
  borderRadius,
  isOpenSearch,
  isOpenFilter,
  disableWidth,
  setSelectedOption,
  selectedOption
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChecked(true);
    if(setSelectedOption && options){
    setSelectedOption(options[0]);
    const handleCklickOutSide = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleCklickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleCklickOutSide);
    };
  }
  }, []);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelect = (option: number | string) => {
    if(setSelectedOption){
    setSelectedOption(option);
    setChecked(true);
    setIsOpen(false);
    }
  };
  const isChange = isOpenFilter && isOpenSearch;
  return (
    <Container>
      <SelectContainer>
        <SelectTitleContainer
          onClick={handleClick}
          isOpen={isOpen}
          padding={padding}
          borderRadius={borderRadius}
        >
          <P isOpen={isOpen} isChange={isChange} isOpenSearch={isOpenSearch} disableWidth={disableWidth}>
            {selectedOption ? selectedOption : selectedOption}
          </P>
          {isOpen ? (
            <ArrowUp css={svgArrowUp} />
          ) : (
            <ArrowDpwn css={svgArrowDpwn} />
          )}
        </SelectTitleContainer>
        {isOpen && (
          <SelectOptionContainer width={width}>
            {options && options.map((option, i) => (
              <SelectOne key={option + `${i}`}>
                <SvgContainer>
                  {checked && selectedOption === option && (
                    <Checked css={svgCheckedStyles} />
                  )}
                </SvgContainer>
                <SelectOption key={i} onClick={() => handleSelect(option)}>
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
