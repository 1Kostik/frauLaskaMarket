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
} from "./CartForm.styled";

const validationSchema = Yup.object({
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
  deliveryName: Yup.string()
    .max(15, "Має бути 15 символів або менше")
    .required("Обов'язкове"),
  deliveryLastName: Yup.string()
    .max(15, "Має бути 15 символів або менше")
    .required("Обов'язкове"),
  deliverySurname: Yup.string().max(15, "Має бути 15 символів або менше"),
  postOfficeNumber: Yup.number().positive().integer().required("Обов'язкове"),
  paymentMethod: Yup.string().oneOf(["liqPay", "deliveryPayment", "other"]),
});

const initialValue = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  deliveryType: "postPickup",
  deliveryName: "",
  deliveryLastName: "",
  deliverySurname: "",
  postOfficeNumber: undefined,
  paymentMethod: "liqPay",
};

const CartForm = () => {
  const preventNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log({ values });
          setSubmitting(false);
        }, 400);
      }}
      // validateOnChange={true}
      validateOnBlur={false}
    >
      {({ setFieldValue, setFieldTouched, touched, errors }) => (
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

              <label htmlFor="deliveryName">
                <Field
                  name="deliveryName"
                  type="text"
                  placeholder="Ім’я"
                  css={[
                    inputStyle,
                    errorBorder(
                      !!(errors.deliveryName && touched.deliveryName)
                    ),
                  ]}
                  onFocus={() => setFieldTouched("deliveryName", false, false)}
                  onKeyDown={preventNumberInput}
                />
                <ErrorMessage name="deliveryName">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="deliveryLastName">
                <Field
                  name="deliveryLastName"
                  type="text"
                  placeholder="Прізвище"
                  css={[
                    inputStyle,
                    errorBorder(
                      !!(errors.deliveryLastName && touched.deliveryLastName)
                    ),
                  ]}
                  onFocus={() =>
                    setFieldTouched("deliveryLastName", false, false)
                  }
                  onKeyDown={preventNumberInput}
                />
                <ErrorMessage name="deliveryLastName">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="deliverySurname">
                <Field
                  name="deliverySurname"
                  type="text"
                  placeholder="По батькові"
                  css={[
                    inputStyle,
                    errorBorder(
                      !!(errors.deliverySurname && touched.deliverySurname)
                    ),
                  ]}
                  onFocus={() =>
                    setFieldTouched("deliverySurname", false, false)
                  }
                  onKeyDown={preventNumberInput}
                />
                <ErrorMessage name="deliverySurname">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="postOfficeNumber">
                <Field
                  name="postOfficeNumber"
                  type="number"
                  placeholder="Номер відділення"
                  css={[
                    inputStyle,
                    errorBorder(
                      !!(errors.postOfficeNumber && touched.postOfficeNumber)
                    ),
                  ]}
                  onFocus={() =>
                    setFieldTouched("postOfficeNumber", false, false)
                  }
                />
                <ErrorMessage name="postOfficeNumber">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>
            </div>
          </div>

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

