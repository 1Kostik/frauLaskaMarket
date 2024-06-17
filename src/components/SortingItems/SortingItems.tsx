import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Checked } from "@assets/icons/checked.svg";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg";
import {
  Container,
  H4,
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
  isNone?: boolean;
  options: string[];
  padding?: string;
  borderRadius?: string;
}
const SortingItems: React.FC<ISortingItProps> = ({
  isNone,
  options,
  padding,
  borderRadius,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChecked(true);
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
  }, []);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setChecked(true);
    setIsOpen(false);
  };
  return (
    <Container>
      <H4 isNone={isNone}>Сортувати за</H4>
      <SelectContainer>
        <SelectTitleContainer
          onClick={handleClick}
          isOpen={isOpen}
          padding={padding}
          borderRadius={borderRadius}
        >
          <P isOpen={isOpen}>
            {selectedOption ? selectedOption : selectedOption}
          </P>
          {isOpen ? (
            <ArrowUp css={svgArrowUp} />
          ) : (
            <ArrowDpwn css={svgArrowDpwn} />
          )}
        </SelectTitleContainer>
        {isOpen && (
          <SelectOptionContainer>
            {options.map((option, i) => (
              <SelectOne key={option + i}>
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