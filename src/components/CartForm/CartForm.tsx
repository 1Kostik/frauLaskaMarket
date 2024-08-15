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

import { handleNumericInput } from "@utils/handleNumericInput";
import { makePayment } from "@services/servicesApi";
import { inputLabel } from "@components/AdminForm/AdminForm.styled";
import { replaceNullsWithEmptyStrings } from "@utils/replaceNullsWithEmptyStrings ";

import { makeOrder } from "@services/servicesApi";

import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";
import { orderItemsConverter } from "@utils/orderItemsConverter";
import { useNavigate } from "react-router-dom";

const validationSchema = (isOtherRecipient: boolean) =>
  Yup.object({
    name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    last_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .required("Обов'язкове"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .required("Обов'язковий"),
    email: Yup.string()
      .email("Невірна адреса електронної пошти")
      .required("Обов'язковий"),
    delivery_type: Yup.string().oneOf(["Самовивіз з відділення", "Самовивіз"]),

    recipient_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test("isOtherRecipient-recipient_name", "Обов'язкове", function (value) {
        if (isOtherRecipient && (!value || value.trim() === "")) {
          return false;
        }
        return true;
      }),
    recipient_last_name: Yup.string()
      .max(15, "Має бути 15 символів або менше")
      .test(
        "isOtherRecipient-recipient_last_name",
        "Обов'язкове",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),
    recipient_phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Невірний номер телефону")
      .test(
        "isOtherRecipient-recipient_phone",
        "Обов'язковий",
        function (value) {
          if (isOtherRecipient && (!value || value.trim() === "")) {
            return false;
          }
          return true;
        }
      ),

    post_office_number: Yup.number()
      .positive()
      .integer()
      .test("is-postPickup", "Обов'язкове поле", function (value) {
        const { delivery_type } = this.parent;
        if (
          delivery_type === "Самовивіз з відділення" &&
          (value === null || value === undefined)
        ) {
          return false;
        }
        return true;
      }),
    payment_method: Yup.string().oneOf(["liqPay", "deliveryPayment", "other"]),
  });

interface IInitialValue {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  delivery_type: string;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
  post_office_number: string | number;
  payment_method: string;
}

const initialValue: IInitialValue = {
  name: "",
  last_name: "",
  phone: "",
  email: "",
  delivery_type: "Самовивіз з відділення",
  recipient_name: "",
  recipient_last_name: "",
  recipient_phone: "",
  post_office_number: "",
  payment_method: "liqPay",
};

interface ICartFormProps {
  addedItems: IAddedToCartProduct[];
  total_amount: number;
  callMeBack: boolean;
}

const CartForm: React.FC<ICartFormProps> = ({ addedItems, callMeBack }) => {
  const [isOtherRecipient, setIsOtherRecipient] = useState(false);

  const navigate = useNavigate();

  const handleRecipient = () => {
    setIsOtherRecipient((prev) => !prev);
  };

  const preventNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onOrderSubmit = (values: IInitialValue) => {
    const newOrder = {
      ...replaceNullsWithEmptyStrings(values),
      order_items: orderItemsConverter(addedItems),
      call_me_back:callMeBack,
    };
    if (values.payment_method === "liqPay") {
      makeOrder(newOrder).then((resp) => {
        console.log("resp", resp);
        makePayment(resp);
      });
    } else {
      makeOrder(newOrder).then((resp) => {
        console.log("resp", resp);
        navigate(`/ordered?email=${values.email}`);
      });
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema(isOtherRecipient)}
      onSubmit={(values) => onOrderSubmit(values)}
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

              <label htmlFor="last_name">
                <Field
                  name="last_name"
                  type="text"
                  placeholder="Прізвище"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.last_name && touched.last_name)),
                  ]}
                  onFocus={() => setFieldTouched("last_name", false, false)}
                  onKeyDown={preventNumberInput}
                />
                <p css={inputLabel(!!values.last_name)}>Прізвище</p>
                <ErrorMessage name="last_name">
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
                  name="delivery_type"
                  value="Самовивіз з відділення"
                  id="postPickup"
                />
                <label htmlFor="postPickup">Самовивіз з відділення</label>
                <Field
                  type="radio"
                  name="delivery_type"
                  value="Самовивіз"
                  id="selfPickup"
                />
                <label htmlFor="selfPickup">Самовивіз</label>
              </div>
              {values.delivery_type === "Самовивіз з відділення" && (
                <label htmlFor="post_office_number">
                  <Field
                    name="post_office_number"
                    type="text"
                    placeholder="Номер відділення"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(
                          errors.post_office_number &&
                          touched.post_office_number
                        )
                      ),
                    ]}
                    onKeyPress={handleNumericInput}
                    onFocus={() =>
                      setFieldTouched("post_office_number", false, false)
                    }
                  />
                  <p css={inputLabel(!!values.post_office_number)}>
                    Номер відділення
                  </p>
                  <ErrorMessage name="post_office_number">
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
                <label htmlFor="recipient_name">
                  <Field
                    name="recipient_name"
                    type="text"
                    placeholder="Ім’я"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(errors.recipient_name && touched.recipient_name)
                      ),
                    ]}
                    onFocus={() =>
                      setFieldTouched("recipient_name", false, false)
                    }
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.recipient_name)}>Ім’я</p>
                  <ErrorMessage name="recipient_name">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="recipient_last_name">
                  <Field
                    name="recipient_last_name"
                    type="text"
                    placeholder="Прізвище"
                    css={[
                      inputStyle,
                      errorBorder(
                        !!(
                          errors.recipient_last_name &&
                          touched.recipient_last_name
                        )
                      ),
                    ]}
                    onFocus={() =>
                      setFieldTouched("recipient_last_name", false, false)
                    }
                    onKeyDown={preventNumberInput}
                  />
                  <p css={inputLabel(!!values.recipient_last_name)}>Прізвище</p>
                  <ErrorMessage name="recipient_last_name">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>
                </label>

                <label htmlFor="recipient_phone">
                  <Field name="recipient_phone">
                    {(props: FieldProps<string>) => (
                      <input
                        {...props.field}
                        type="tel"
                        placeholder="Номер телефону"
                        onFocus={() => {
                          setFieldTouched("recipient_phone", false, false);
                          if (!props.field.value) {
                            setFieldValue("recipient_phone", "+380");
                          }
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.match(/^\+380\d{0,9}$/)) {
                            setFieldValue("recipient_phone", value);
                          }
                        }}
                        onBlur={() => {
                          if (props.field.value === "+380") {
                            setFieldValue("recipient_phone", "");
                          }
                        }}
                        css={[
                          inputStyle,
                          errorBorder(
                            !!(
                              errors.recipient_phone && touched.recipient_phone
                            )
                          ),
                        ]}
                      />
                    )}
                  </Field>
                  <p css={inputLabel(!!values.recipient_phone)}>
                    Номер телефону
                  </p>
                  <ErrorMessage name="recipient_phone">
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
                name="payment_method"
                value="liqPay"
                id="liqPay"
              />
              <label htmlFor="liqPay">
                LiqPay - моментальні платежі по всьому світу
              </label>
              <Field
                type="radio"
                name="payment_method"
                value="deliveryPayment"
                id="deliveryPayment"
              />
              <label htmlFor="deliveryPayment">
                Оплата при отриманні замовлення
              </label>
              <Field
                type="radio"
                name="payment_method"
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
