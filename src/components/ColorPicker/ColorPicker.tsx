import { useEffect, useState } from "react";
import { colorsWrapper, inputStyle } from "./ColorPicker.styled";
import { nanoid } from "nanoid";
import { FormikProps } from "formik";
import { IAdvert } from "Interfaces/IAdvert";

const colorArr = ["#768159", "#D7D7D7", "#D9B8FF", "#E09C4F"];

interface IColorPickerProps {
  formik: FormikProps<IAdvert>;
  colorsForEdit?: string[];
}

const ColorPicker: React.FC<IColorPickerProps> = ({
  formik,
  colorsForEdit,
}) => {
  const [selectedColors, setSelectedColors] = useState<string[]>(
    colorsForEdit || []
  );

  const handleSelectColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((prev) =>
        prev.filter((itemColor) => itemColor !== color)
      );
    } else {
      setSelectedColors((prev) => [...prev, color]);
    }
  };

  useEffect(() => {
    formik.setFieldValue("colors", selectedColors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColors]);

  return (
    <div>
      <p>Колір</p>
      <div css={colorsWrapper}>
        {colorArr.map((color, i) => (
          <div key={nanoid()}>
            <input
              type="checkbox"
              name="color"
              id={`color-${i}`}
              checked={selectedColors.includes(color)}
              css={inputStyle(color)}
              onChange={() => {
                handleSelectColor(color);
                formik.setFieldError("color", undefined);
              }}
            />
            <label htmlFor={`color-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
