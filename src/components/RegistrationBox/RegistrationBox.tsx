import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import Select, { OptionProps, SingleValue, components } from "react-select";

import {
  agreementStyle,
  container,
  descriptionWrapper,
  errorStyle,
  formStyle,
  formWrapper,
  checkboxStyle,
  inputStyle,
  submitStyle,
  messageInput,
  customStyles,
  OptionType,
  selectInputStyle,
} from "./RegistrationBox.styled";

import checkedIcon from "@assets/icons/checked.svg";

const options = [
  { value: "NY", label: "New York" },
  { value: "SF", label: "San Francisco" },
  { value: "CH", label: "Chicago" },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .max(30, "Має бути 30 символів або менше")
    .required("Обов'язкове"),
  interest: Yup.string().required("Обов'язковий"),
  email: Yup.string()
    .email("Невірна адреса електронної пошти")
    .required("Обов'язковий"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Невірний номер телефону")
    .required("Обов'язковий"),
  message: Yup.string().max(200, "Не більше 200 символів"),
  agreement: Yup.boolean().oneOf([true], "Обов'язковий"),
});

const CustomOption = (props: OptionProps<OptionType>) => (
  <components.Option {...props}>
    {props.isSelected && <img src={checkedIcon} alt="check icon" />}
    {props.label}
  </components.Option>
);

interface IRegistrationBoxProps {
  children: React.ReactNode;
}

const RegistrationBox: React.FC<IRegistrationBoxProps> = ({ children }) => {
  return (
    <div css={container}>
      <div css={descriptionWrapper}>{children}</div>
      <div css={formWrapper}>
        <Formik
          initialValues={{
            name: "",
            interest: "",
            email: "",
            phone: "",
            message: "",
            agreement: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log({ ...values, phone: values.phone.slice(3) });
              setSubmitting(false);
            }, 400);
          }}
          // validateOnChange={true}
          validateOnBlur={false}
        >
          {({ setFieldValue, setFieldTouched, touched, errors }) => (
            <Form css={formStyle}>
              <label htmlFor="name">
                <Field
                  name="name"
                  type="text"
                  placeholder="Ім’я"
                  css={inputStyle}
                  onFocus={() => setFieldTouched("name", false, false)}
                  style={
                    errors.name && touched.name
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                <ErrorMessage name="name">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="interest">
                <Select
                  isMulti={false}
                  name="interest"
                  options={options}
                  styles={{
                    ...customStyles,
                    control: (provided) => ({
                      ...provided,
                      ...selectInputStyle(
                        !!(touched.interest && errors.interest)
                      ),
                    }),
                  }}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Що цікавить?"
                  components={{ Option: CustomOption }}
                  onChange={(option) =>
                    setFieldValue(
                      "interest",
                      (option as SingleValue<OptionType>)?.value
                    )
                  }
                />
                <ErrorMessage name="interest">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="email">
                <Field
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  css={inputStyle}
                  onFocus={() => setFieldTouched("email", false, false)}
                  style={
                    errors.email && touched.email
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                <ErrorMessage name="email">
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
                      css={inputStyle}
                      style={
                        errors.phone && touched.phone
                          ? { border: "1px solid red" }
                          : {}
                      }
                    />
                  )}
                </Field>
                <ErrorMessage name="phone">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Текст повідомлення"
                  css={messageInput}
                />
                <ErrorMessage name="message">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <Field
                type="checkbox"
                name="agreement"
                id="agreement"
                css={checkboxStyle}
              />
              <label
                htmlFor="agreement"
                css={agreementStyle}
                style={
                  errors.agreement && touched.agreement
                    ? {
                        color: "red",
                      }
                    : undefined
                }
              >
                Я погоджуюсь на обробку моїх персональних данних
              </label>

              <button type="submit" css={submitStyle}>
                Зареєструватись
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationBox;
