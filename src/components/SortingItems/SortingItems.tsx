import { useEffect, useRef, useState,Dispatch, SetStateAction } from "react";
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

interface ISortingItProps<T> {
  width?: string;
  options: T[] | null;
  padding?: string;
  borderRadius?: string;
  isOpenSearch?: boolean;
  isOpenFilter?: boolean;
  disableWidth?: string;
  setSelectedOption?: Dispatch<SetStateAction<T | null>>;
  selectedOption?: T | null;
}
const SortingItems = <T extends number | string>({
  width,
  options,
  padding,
  borderRadius,
  isOpenSearch,
  isOpenFilter,
  disableWidth,
  setSelectedOption,
  selectedOption,
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
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSelectedOption, options]);
  

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: T) => {
    if (setSelectedOption) {
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
            {selectedOption ? selectedOption : ''}
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