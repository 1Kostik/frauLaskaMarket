import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";

import {
  deliveryTypes,
  errorBorder,
  errorStyle,
  formWrapper,
  groupWrapper,
  inputStyle,
  paymentMethods,
  recipientStyle,
} from "./CartForm.styled";
import { Item } from "Interfaces/IItem";
import { handleNumericInput } from "@utils/handleNumericInput";
import { makePayment } from "@services/servicesApi";
import { inputLabel } from "@components/AdminForm/AdminForm.styled";
import { replaceNullsWithEmptyStrings } from "@utils/replaceNullsWithEmptyStrings ";

const validationSchema = (isOtherRecipient: boolean) =>
  Yup.object({
    name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    lastName: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .required("Обов'язковий"),
    email: Yup.string()
      .email("Невірна адреса електронної пошти")
      .required("Обов'язковий"),
    deliveryType: Yup.string().oneOf(["postPickup", "selfPickup"]),

    recipientName: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test("isOtherRecipient-recipientName", "Обов'язкове", function (value) {
        if (isOtherRecipient && (!value || value.trim() === "")) {
          return false;
        }
        return true;
      }),
    recipientLastName: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test(
        "isOtherRecipient-recipientLastName",
        "Обов'язкове",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),
    recipientPhone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .test(
        "isOtherRecipient-recipientPhone",
        "Обов'язковий",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),

    postOfficeNumber: Yup.number()
      .positive()
      .integer()
      .test("is-postPickup", "Обов'язкове поле", function (value) {
        const { deliveryType } = this.parent;
        if (
          deliveryType === "postPickup" &&
          (value === null || value === undefined)
        ) {
          return false;
        }
        return true;
      }),
    paymentMethod: Yup.string().oneOf(["liqPay", "deliveryPayment", "other"]),
  });

const initialValue = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  deliveryType: "postPickup",
  recipientName: "",
  recipientLastName: "",
  recipientPhone: "",
  postOfficeNumber: "",
  paymentMethod: "liqPay",
};

interface ICartFormProps {
  addedItems: Item[];
  total_amount: number;
}

const CartForm: React.FC<ICartFormProps> = ({ addedItems, total_amount }) => {
  const [isOtherRecipient, setIsOtherRecipient] = useState(false);

  const handleRecipient = () => {
    setIsOtherRecipient((prev) => !prev);
  };

  const preventNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema(isOtherRecipient)}
      onSubmit={async (values) => {
        const date = new Date();
        console.log({
          status: "В очікуванні",
          order_date: date.toISOString(),
          ...replaceNullsWithEmptyStrings(values),
          order_itmes: addedItems,
          total_amount,
        });
        // makePayment(50);
      }}
      validateOnBlur={false}
    >
      {({ setFieldValue, setFieldTouched, touched, errors, values }) => (
        <Form css={formWrapper} id="orderForm">
          <div
            role="group"
            aria-labelledby="contactDetailsLabel"
            css={groupWrapper}
          >
            <h3>Ваші контактні дані</h3>
            <div>
              <label htmlFor="name">
                <Field
                  name="name"
                  type="text"
                  placeholder="Ім’я"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.name && touched.name)),
                  ]}
                  onFocus={() => setFieldTouched("name", false, false)}
                  onKeyDown={preventNumberInput}
                />
                <p css={inputLabel(!!values.name)}>Ім’я</p>
                <ErrorMessage name="name">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="lastName">
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Прізвище"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.lastName && touched.lastName)),
                  ]}
                  onFocus={() => setFieldTouched("lastName", false, false)}
                  onKeyDown={preventNumberInput}
                />
                <p css={inputLabel(!!values.lastName)}>Прізвище</p>
                <ErrorMessage name="lastName">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="phone">
                <Field name="phone">
                  {(props: FieldProps<string>) => (
                    <input
                      {...props.field}
                      type="tel"
                      placeholder="Номер телефону"
                      onFocus={() => {
                        setFieldTouched("phone", false, false);
                        if (!props.field.value) {
                          setFieldValue("phone", "+380");
                        }
                      }}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/^\+380\d{0,9}$/)) {
                          setFieldValue("phone", value);
                        }
                      }}
                      onBlur={() => {
                        if (props.field.value === "+380") {
                          setFieldValue("phone", "");
                        }
                      }}
                      css={[
                        inputStyle,
                        errorBorder(!!(errors.phone && touched.phone)),
                      ]}
                    />
                  )}
                </Field>
                <p css={inputLabel(!!values.phone)}>Номер телефону</p>
                <ErrorMessage name="phone">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                <Field
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.email && touched.email)),
                  ]}
                  onFocus={() => setFieldTouched("email", false, false)}
                />
                <p css={inputLabel(!!values.email)}>E-mail</p>
                <ErrorMessage name="email">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>
            </div>
          </div>

          <div role="group" aria-labelledby="deliveryLabel" css={groupWrapper}>
            <h3>Доставка</h3>
            <div>
              <div css={deliveryTypes}>
                <Field
                  type="radio"
                  name="deliveryType"
                  value="postPickup"
                  id="postPickup"
                />
                <label htmlFor="postPickup">Самовивіз з відділення</label>
                <Field
                  type="radio"
                  name="deliveryType"
                  value="selfPickup"
                  id="selfPickup"
                />
                <label htmlFor="selfPickup">Самовивіз</label>
              </div>
              {values.deliveryType === "postPickup" && (
                <label htmlFor="postOfficeNumber">
                  <Field
                    name="postOfficeNumber"
                    type="text"
                    placeholder="Номер відділення"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(errors.postOfficeNumber && touched.postOfficeNumber)
                      ),
                    ]}
                    onKeyPress={handleNumericInput}
                    onFocus={() =>
                      setFieldTouched("postOfficeNumber", false, false)
                    }
                  />
                  <p css={inputLabel(!!values.postOfficeNumber)}>
                    Номер відділення
                  </p>
                  <ErrorMessage name="postOfficeNumber">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>
              )}
            </div>
          </div>
          <div css={[groupWrapper, recipientStyle]}>
            <h3>Отримувач інша особа</h3>
            <input type="checkbox" id="recipient" className="hiddenInput" />
            <label htmlFor="recipient" onClick={handleRecipient}>
              Отримувач буде інша особа
            </label>
          </div>
          {isOtherRecipient && (
            <div
              role="group"
              aria-labelledby="recipientLabel"
              css={groupWrapper}
            >
              <h3>Контактні дані отримувача</h3>
              <div>
                <label htmlFor="recipientName">
                  <Field
                    name="recipientName"
                    type="text"
                    placeholder="Ім’я"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(errors.recipientName && touched.recipientName)
                      ),
                    ]}
                    onFocus={() =>
                      setFieldTouched("recipientName", false, false)
                    }
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.recipientName)}>Ім’я</p>
                  <ErrorMessage name="recipientName">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="recipientLastName">
                  <Field
                    name="recipientLastName"
                    type="text"
                    placeholder="Прізвище"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(
                          errors.recipientLastName && touched.recipientLastName
                        )
                      ),
                    ]}
                    onFocus={() =>
                      setFieldTouched("recipientLastName", false, false)
                    }
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.recipientLastName)}>Прізвище</p>
                  <ErrorMessage name="recipientLastName">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="recipientPhone">
                  <Field name="recipientPhone">
                    {(props: FieldProps<string>) => (
                      <input
                        {...props.field}
                        type="tel"
                        placeholder="Номер телефону"
                        onFocus={() => {
                          setFieldTouched("recipientPhone", false, false);
                          if (!props.field.value) {
                            setFieldValue("recipientPhone", "+380");
                          }
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.match(/^\+380\d{0,9}$/)) {
                            setFieldValue("recipientPhone", value);
                          }
                        }}
                        onBlur={() => {
                          if (props.field.value === "+380") {
                            setFieldValue("recipientPhone", "");
                          }
                        }}
                        css={[
                          inputStyle,
                          errorBorder(
                            !!(errors.recipientPhone && touched.recipientPhone)
                          ),
                        ]}
                      />
                    )}
                  </Field>
                  <p css={inputLabel(!!values.recipientPhone)}>
                    Номер телефону
                  </p>
                  <ErrorMessage name="recipientPhone">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>
              </div>
            </div>
          )}

          <div role="group" aria-labelledby="paymenyLabel" css={groupWrapper}>
            <h3>Оплата</h3>
            <div css={paymentMethods}>
              <Field
                type="radio"
                name="paymentMethod"
                value="liqPay"
                id="liqPay"
              />
              <label htmlFor="liqPay">
                LiqPay - моментальні платежі по всьому світу
              </label>
              <Field
                type="radio"
                name="paymentMethod"
                value="deliveryPayment"
                id="deliveryPayment"
              />
              <label htmlFor="deliveryPayment">
                Оплата при отриманні замовлення
              </label>
              <Field
                type="radio"
                name="paymentMethod"
                value="other"
                id="other"
              />
              <label htmlFor="other">Other Text</label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CartForm;
