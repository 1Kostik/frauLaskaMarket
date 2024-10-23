import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FormikProps } from "formik";

import { IoMdClose } from "react-icons/io";

import {
  colorPickerStyle,
  colorsWrapper,
  inputStyle,
} from "./ColorPicker.styled";

import { IAdvert, IVariation } from "Interfaces/IAdvert";

import { ReactComponent as CheckedIcon } from "@assets/icons/radio-btn-checked.svg";
import { ReactComponent as UncheckedIcon } from "@assets/icons/radio-btn-unchecked.svg";

const colorArr = [
  "#FFFF",
  "#000000",
  "#808080",
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#00FFFF",
  "#0000FF",
  "#8B00FF",
  "#FFC0CB",
  "#50C878",
  "#808000",
  "#FFD700",
  "#C0C0C0",
];

interface IColorPickerProps {
  formik: FormikProps<IAdvert>;
  variation?: IVariation;
  index: number;
  onClose: (index: number, formik: FormikProps<IAdvert>) => void;
}

const ColorPicker: React.FC<IColorPickerProps> = ({
  formik,
  variation,
  index,
  onClose,
}) => {
  const [selectedColor, setSelectedColor] = useState<IVariation>(
    variation || formik.values.variations[index]
  );

  const handleSelectColor = (color: string) => {
    setSelectedColor((prev) => ({ ...prev, color }));
  };

  useEffect(() => {
    formik.setFieldValue(`variations.${index}.color`, selectedColor.color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor]);

  return (
    <div css={colorPickerStyle}>
      <div className="title-wrapper">
        <h3>Колір</h3>
        <button type="button" onClick={() => onClose(index, formik)}>
          <IoMdClose />
        </button>
      </div>

      <div css={colorsWrapper}>
        {colorArr.map((color, i) => (
          <div key={nanoid()}>
            <input
              type="radio"
              name="color"
              id={`color-${index}-${i}`}
              checked={selectedColor.color === color}
              css={inputStyle(color)}
              onChange={() => {
                handleSelectColor(color);
                formik.setFieldError(`variations.${index}`, undefined);
              }}
            />
            <label htmlFor={`color-${index}-${i}`}>
              {selectedColor.color === color ? (
                <CheckedIcon />
              ) : (
                <UncheckedIcon />
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
