import { ErrorMessage, Field, Form, Formik } from "formik";
import { ILogin } from "Interfaces/ILogin";
import * as Yup from "yup";

import { ReactComponent as CloseEyeIcon } from "@assets/icons/eye-close.svg";
import { ReactComponent as OpenEyeIcon } from "@assets/icons/eye-open.svg";
import { useState } from "react";
import {
    errorAuthStyle,
  errorBorder,
  errorStyle,
  eyeWrapper,
  formStyle,
  formWrapper,
  inputStyle,
  labelStyle,
  submitStyle,
} from "./LoginForm.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAuth } from "@redux/auth/slice";

const LOGIN = "Frau";
const PASSWORD = "Laska123";

const initialValues = {
  login: "",
  password: "",
};

const validationSchema = Yup.object({
  login: Yup.string().max(15).required("Обов'язкове поле"),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Пароль повинен містити лише англійські літери та цифри"
    )
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Пароль повинен містити хоча б одну англійську літеру та одну цифру"
    )
    .min(8, "Пароль має бути від 8 до 15 символів")
    .max(15, "Пароль має бути від 8 до 15 символів")
    .required("Обов'язкове поле"),
});

const LoginForm = () => {
  const [isErrorAuth, setIsErrorAuth] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: ILogin) => {
          if (values.login === LOGIN && values.password === PASSWORD) {
            dispatch(handleAuth(true));
            navigate("/store");
          } else {
            setIsErrorAuth(true);
          }

          console.log("values", values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ touched, errors, setFieldError }) => (
          <div css={formWrapper}>
            <Form css={formStyle}>
              {isErrorAuth && <div css={errorAuthStyle}>Невірний логін, пароль!</div>}
              <label htmlFor="login" css={labelStyle}>
                <Field
                  type="string"
                  name="login"
                  id="login"
                  placeholder="Логін"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.login && touched.login)),
                  ]}
                  onFocus={() => setFieldError("login", undefined)}
                />
                <ErrorMessage name="login">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <label htmlFor="password" css={labelStyle}>
                <Field
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  css={[
                    inputStyle,
                    errorBorder(!!(errors.login && touched.login)),
                  ]}
                />

                <div onClick={handleShowPassword} css={eyeWrapper}>
                  {isShowPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </div>

                <ErrorMessage name="password">
                  {(msg) => <div css={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </label>

              <button type="submit" css={submitStyle}>
                Увійти
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
