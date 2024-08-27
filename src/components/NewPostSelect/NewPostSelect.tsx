import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import {
  inputWrapper,
  listStyle,
  selectContainer,
} from "./NewPostSelect.styled";
import { getNPCities, getWarehouses } from "@services/servicesApi";
import { FormikProps } from "formik";
import { IInitialCartFormValue } from "Interfaces/IInitialCartFormValue";
import { errorBorder, inputStyle } from "@components/CartForm/CartForm.styled";
import { inputLabel } from "@components/AdminForm/AdminForm.styled";

interface INewPostSelectPorps {
  formik: FormikProps<IInitialCartFormValue>;
}

interface ICity {
  Present: string;
  DeliveryCity: string;
}
interface IWarehouse {
  Description: string;
}

const NewPostSelect: React.FC<INewPostSelectPorps> = ({ formik }) => {
  const { setFieldValue, setFieldTouched, touched, errors, values } = formik;

  const [isShowSelectCities, setIsShowSelectCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState<null | ICity>(null);
  const [searchCity, setSearchCity] = useState("");

  const [isShowSelectWarehouse, setIsShowSelectWarehouse] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("");
  const [searchWarehouse, setSearchWarehouse] = useState("");

  const [cities, setCities] = useState<ICity[] | null>(null);
  const [warehouses, setWarehouses] = useState<[] | null>(null);

  const handleSearchValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = e.target.value;
    type === "city"
      ? setSearchCity(value.trim())
      : setSearchWarehouse(value.trim());
  };

  const onSelectCity = (value: ICity) => {
    setSelectedCity(value);
    setSearchCity("");
    setIsShowSelectCities(false);
    setCities(null);
  };

  const onSelectWarehouse = (value: string) => {
    setSelectedWarehouse(value);
    setSearchWarehouse("");
    setIsShowSelectWarehouse(false);
  };

  useEffect(() => {
    const isCyrillicCityName = /^[а-яА-ЯёЁіІїЇ\s'’]+$/u.test(searchCity);
    if (searchCity.length > 1 && isCyrillicCityName) {
      (async () => {
        const cities = await getNPCities(searchCity);
        setCities(cities);
      })();
    }
    if (searchCity.length === 0) {
      setCities(null);
    }
  }, [searchCity]);

  useEffect(() => {
    const cityRef = selectedCity?.DeliveryCity;
    cityRef &&
      (async () => {
        const warehouses = await getWarehouses(cityRef);
        setWarehouses(warehouses);
      })();
    setSelectedWarehouse("");
  }, [selectedCity]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (!element.closest("[id=city]") && !element.closest("[id=warehouse]")) {
        setIsShowSelectCities(false);
        setCities(null);
        setSearchCity("");

        setIsShowSelectWarehouse(false);
        setSearchWarehouse("");
      } else if (element.closest("[id=city]")) {
        setIsShowSelectCities(true);
        setIsShowSelectWarehouse(false);
      }
      if (element.closest("[id=warehouse]")) {
        setIsShowSelectWarehouse(true);
        setIsShowSelectCities(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setFieldValue("delivery_city", selectedCity?.Present);
    setFieldValue("delivery_destination", selectedWarehouse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWarehouse, selectedCity]);

  const filteredWarehouses =
    warehouses &&
    warehouses.filter((warehous: IWarehouse) =>
      warehous.Description.includes(searchWarehouse)
    );

  return (
    <>
      <div css={selectContainer}>
        <div css={inputWrapper}>
          <input
            type="text"
            name="city"
            id="city"
            placeholder={selectedCity ? "" : "Місто"}
            onChange={(e) => handleSearchValue(e, "city")}
            value={searchCity}
            autoComplete="none"
            onFocus={() => setFieldTouched("delivery_city", false, false)}
            css={[
              inputStyle,
              errorBorder(!!(errors.delivery_city && touched.delivery_city)),
            ]}
          />
          <p css={inputLabel(!!searchCity || !!values.delivery_city)}>Місто</p>

          {!searchCity && <div>{selectedCity?.Present}</div>}
        </div>
        {isShowSelectCities && cities && cities.length > 0 && (
          <div css={listStyle}>
            {cities.map((сity) => (
              <p
                key={nanoid()}
                onClick={() => {
                  onSelectCity(сity);
                }}
              >
                {сity.Present}
              </p>
            ))}
          </div>
        )}
      </div>

      <div css={selectContainer}>
        <div css={inputWrapper}>
          <input
            type="text"
            name="warehouse"
            id="warehouse"
            placeholder={selectedWarehouse ? "" : "Відділення"}
            onChange={(e) => handleSearchValue(e, "warehouse")}
            value={searchWarehouse}
            autoComplete="none"
            onFocus={() =>
              setFieldTouched("delivery_destination", false, false)
            }
            css={[
              inputStyle,
              errorBorder(
                !!(errors.delivery_destination && touched.delivery_destination)
              ),
            ]}
          />
          <p
            css={inputLabel(!!searchWarehouse || !!values.delivery_destination)}
          >
            Відділення
          </p>

          {!searchWarehouse && <div>{selectedWarehouse}</div>}
        </div>

        {isShowSelectWarehouse && (
          <div css={listStyle}>
            {filteredWarehouses ? (
              filteredWarehouses.map(({ Description }) => (
                <p
                  key={nanoid()}
                  onClick={() => {
                    onSelectWarehouse(Description);
                  }}
                >
                  {Description}
                </p>
              ))
            ) : (
              <p style={{ cursor: "default" }}>Спочатку оберіть місто</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NewPostSelect;
