import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  Formik,
  Form,
  ErrorMessage,
  FieldArray,
  FormikProps,
  Field,
} from "formik";
import * as Yup from "yup";
import {
  errorStyle,
  imageWrapper,
  imageThumb,
  imagesContainer,
  addImagesBtn,
  formDataWrapper,
  pageTitle,
  formContainer,
  submitWrapper,
  blockWrapper,
  categoryFields,
  commonBlock,
  inputFieldStyle,
  buttonStyle,
  titleImagesWrapper,
  textAreaStyle,
  trashCan,
} from "./AdminForm.styled";
import { errorBorder } from "@components/CartForm/CartForm.styled";

import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";
import { ReactComponent as CheckedIcon } from "@assets/icons/radio-btn-checked.svg";
import { ReactComponent as UncheckedIcon } from "@assets/icons/radio-btn-unchecked.svg";

import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

import CustomSelect from "@components/CustomSelect";
import ColorPicker from "@components/ColorPicker";

import { createCategory, fetchCategories } from "@redux/categories/operations";
import { selectCategories } from "@redux/categories/selectors";

import { ICategory } from "Interfaces/ICategory";
import { IAdvert } from "Interfaces/IAdvert";

const FILE_SIZE = 1024 * 1024 * 2;

interface IAdminFormProps {
  advert?: IAdvert;
}

const initialValues: IAdvert = {
  categoryId: undefined,
  imageFiles: [],
  mainImage: undefined,

  title: "",
  productCode: "",
  composition: "",
  benefit: "",
  description: "",

  variations: [{ size: "", price: "", count: "", color: "", discount: "" }],

  feedbacks: [""],

  newCategory: "",
};

const validationSchema = Yup.object({
  categoryId: Yup.number().required("Оберіть категорію"),
  imageFiles: Yup.array()
    .min(1, "Необхідно вибрати принаймні одне зображення")
    .nullable(),

  title: Yup.string().required("Назва обов'язкова"),
  productCode: Yup.string().required("Код обов'язковий"),
  composition: Yup.string(),
  benefit: Yup.string(),
  description: Yup.string().required("Опис обов'язковий"),

  variations: Yup.array().of(
    Yup.object().shape({
      price: Yup.mixed().required("Ціна обов'язкова"),
      discount: Yup.number(),
      count: Yup.mixed().required("Кількість обов'язкова"),
      colors: Yup.array().min(1, "Необхідно вибрати хоча б один колір"),
      size: Yup.mixed(),
    })
  ),

  feedbacks: Yup.array().of(Yup.string()),

  newCategory: Yup.string(),
});

const AdminForm: React.FC<IAdminFormProps> = ({ advert }) => {
  const [isShowColorPicker, setIsShowColorPicker] = useState<number[]>([]);
  const [isShowAddSize, setIsShowAddSize] = useState<number[]>([]);

  useEffect(() => {
    if (advert) {
      setIsShowColorPicker(advert.variations.map((_, i) => i));
    }
  }, [advert]);

  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories).map(
    (item: ICategory) => item.title
  );

  const handleAddPhotos = (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: FormikProps<IAdvert>
  ) => {
    const {
      values: { imageFiles },
      setFieldValue,
    } = formik;
    const files = Array.from(e.target.files || []) as File[];
    const filesForAdd = files.filter((file) => file.size < FILE_SIZE);
    const fileUrls = filesForAdd.map((file) => URL.createObjectURL(file));

    if (imageFiles.length + fileUrls.length > 8) {
      return;
    }

    setFieldValue("imageFiles", [...imageFiles, ...filesForAdd]);
  };

  const handleRemove = (i: number, formik: FormikProps<IAdvert>) => {
    const {
      values: { imageFiles },
      setFieldValue,
    } = formik;
    setFieldValue("imageFiles", [
      ...imageFiles.filter((_, index) => index !== i),
    ]);
  };

  const handleMainPhoto = (i: number, formik: FormikProps<IAdvert>) => {
    formik.setFieldValue(
      "imageFiles",
      (() => {
        const { imageFiles } = formik.values;
        const mainImage = imageFiles[i];
        return [mainImage, ...imageFiles.filter((_, index) => index !== i)];
      })()
    );
  };

  const handleNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedChars = /[0-9]/;
    if (
      !allowedChars.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  const handleCreateNewCategory = (
    newCategory: string | undefined,
    formik: FormikProps<IAdvert>
  ) => {
    const { setFieldError, setFieldValue } = formik;

    if (newCategory) {
      if (categories.includes(newCategory)) {
        setFieldError("newCategory", "Категорія вже існує!");
        return;
      } else {
        dispatch(createCategory(newCategory));
        setFieldValue("newCategory", "");
      }
    }
    return;
  };

  const handleShowColorPicker = (
    index: number,
    formik: FormikProps<IAdvert>
  ) => {
    setIsShowColorPicker((prev: number[]) => {
      if (prev.includes(index)) {
        formik.values.variations[index].color = "";
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleShowSize = (index: number) => {
    setIsShowAddSize((prev: number[]) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={advert || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: IAdvert) => {
          const mainImg = values.imageFiles[0];
          if (typeof mainImg === "string") {
            values.mainImage = mainImg;
          } else {
            values.mainImage = URL.createObjectURL(mainImg);
          }
          delete values.newCategory;
          console.log("values", values);
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik: FormikProps<IAdvert>) => {
          const {
            values: { imageFiles, variations, feedbacks, newCategory },
            setFieldError,
            errors,
            touched,
          } = formik;

          return (
            <>
              <h1 css={pageTitle}>
                {!advert ? "Створення товару" : "Редагевання товару"}
              </h1>

              <Form css={formContainer}>
                <div css={formDataWrapper}>
                  <div css={[blockWrapper, commonBlock]}>
                    <h2>Категорія</h2>
                    <div css={categoryFields}>
                      {categories.length !== 0 && (
                        <div className="errorContainer">
                          <CustomSelect
                            formik={formik}
                            selectedCategoryId={advert?.categoryId}
                          />
                          <ErrorMessage name="categoryId">
                            {(msg) => <div css={errorStyle}>{msg}</div>}
                          </ErrorMessage>
                        </div>
                      )}

                      <label htmlFor="newCategory" className="errorContainer">
                        <Field
                          name="newCategory"
                          type="text"
                          placeholder="Назва нової категорії"
                          onFocus={() =>
                            setFieldError("newCategory", undefined)
                          }
                          css={[
                            inputFieldStyle,
                            errorBorder(
                              !!(errors.newCategory && touched.newCategory)
                            ),
                          ]}
                        />
                        <ErrorMessage name="newCategory">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          handleCreateNewCategory(newCategory, formik)
                        }
                        css={buttonStyle}
                      >
                        Створити категорію
                      </button>
                    </div>
                  </div>

                  <div css={blockWrapper} className="errorContainer">
                    <div css={titleImagesWrapper}>
                      <h2>Фотографії</h2>
                      {imageFiles.length < 8 && (
                        <>
                          <label htmlFor="imageFiles" css={addImagesBtn}>
                            Додати фотографію
                          </label>
                          <input
                            type="file"
                            name="imageFiles"
                            id="imageFiles"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleAddPhotos(e, formik)}
                          />
                        </>
                      )}
                    </div>
                    <FieldArray name="imageFiles">
                      {() => (
                        <div css={imagesContainer}>
                          {imageFiles.map((image, i) => (
                            <div key={i} css={imageWrapper}>
                              <button
                                type="button"
                                className="main-photo-btn"
                                onClick={() => handleMainPhoto(i, formik)}
                              >
                                {i === 0 ? <CheckedIcon /> : <UncheckedIcon />}
                              </button>
                              <button
                                type="button"
                                className="close-btn"
                                onClick={() => handleRemove(i, formik)}
                              >
                                <CloseIcon />
                              </button>
                              <div css={imageThumb}>
                                <img
                                  src={
                                    typeof image === "string"
                                      ? image
                                      : URL.createObjectURL(image)
                                  }
                                  alt={`preview ${i}`}
                                />
                              </div>
                            </div>
                          ))}
                          <ErrorMessage name={`imageFiles`}>
                            {(msg) => (
                              <div css={errorStyle} className="images-error">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                      )}
                    </FieldArray>
                  </div>

                  <div css={[blockWrapper, commonBlock]}>
                    <h2>Загальне</h2>
                    <div css={categoryFields}>
                      <label htmlFor="title" className="errorContainer">
                        <Field
                          name="title"
                          type="text"
                          id="title"
                          placeholder="Назва товару"
                          onFocus={() => setFieldError("title", undefined)}
                          css={[
                            inputFieldStyle,
                            errorBorder(!!(errors.title && touched.title)),
                          ]}
                        />
                        <ErrorMessage name="title">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </label>

                      <label htmlFor="productCode" className="errorContainer">
                        <Field
                          name="productCode"
                          type="text"
                          id="productCode"
                          placeholder="Код"
                          onFocus={() =>
                            setFieldError("productCode", undefined)
                          }
                          css={[
                            inputFieldStyle,
                            errorBorder(
                              !!(errors.productCode && touched.productCode)
                            ),
                          ]}
                        />
                        <ErrorMessage name="productCode">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </label>

                      <label htmlFor="composition" className="errorContainer">
                        <Field
                          name="composition"
                          as="textarea"
                          id="composition"
                          placeholder="Склад"
                          css={[
                            inputFieldStyle,
                            errorBorder(!!(errors.benefit && touched.benefit)),
                            textAreaStyle,
                          ]}
                        />
                        <ErrorMessage name="composition">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </label>

                      <label htmlFor="benefit" className="errorContainer">
                        <Field
                          name="benefit"
                          as="textarea"
                          id="benefit"
                          placeholder="З чим допоможе?"
                          css={[
                            inputFieldStyle,
                            errorBorder(!!(errors.benefit && touched.benefit)),
                            textAreaStyle,
                          ]}
                        />
                        <ErrorMessage name="benefit">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </label>

                      <label htmlFor="description" className="errorContainer">
                        <Field
                          name="description"
                          as="textarea"
                          id="description"
                          placeholder="Опис товару"
                          onFocus={() =>
                            setFieldError("description", undefined)
                          }
                          css={[
                            inputFieldStyle,
                            errorBorder(
                              !!(errors.description && touched.description)
                            ),
                            textAreaStyle,
                          ]}
                        />
                        <ErrorMessage name="description">
                          {(msg) => (
                            <div css={errorStyle} className="text-area-error">
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </label>
                    </div>
                  </div>

                  <div>
                    <FieldArray name="variations">
                      {({ push, remove }) => (
                        <>
                          {variations.map((_, index) => (
                            <div key={index} css={[blockWrapper, commonBlock]}>
                              <h2>Варіація товару: {index + 1}</h2>
                              <div css={categoryFields}>
                                <label htmlFor={`variations.${index}.price`}>
                                  <Field
                                    name={`variations.${index}.price`}
                                    type="number"
                                    placeholder="Ціна товару"
                                    onFocus={() => {
                                      setFieldError(
                                        `variations.${index}`,
                                        undefined
                                      );
                                    }}
                                    onKeyPress={handleNumericInput}
                                    css={[
                                      inputFieldStyle,
                                      errorBorder(
                                        !!(errors.title && touched.title)
                                      ),
                                    ]}
                                  />
                                </label>

                                <label htmlFor={`variations.${index}.discount`}>
                                  <Field
                                    name={`variations.${index}.discount`}
                                    type="number"
                                    placeholder="Знижка"
                                    onFocus={() => {
                                      setFieldError(
                                        `variations.${index}`,
                                        undefined
                                      );
                                    }}
                                    onKeyPress={handleNumericInput}
                                    css={[
                                      inputFieldStyle,
                                      errorBorder(
                                        !!(errors.title && touched.title)
                                      ),
                                    ]}
                                  />
                                </label>

                                <label htmlFor={`variations.${index}.count`}>
                                  <Field
                                    name={`variations.${index}.count`}
                                    type="number"
                                    placeholder="Кількість"
                                    onFocus={() => {
                                      setFieldError(
                                        `variations.${index}`,
                                        undefined
                                      );
                                    }}
                                    onKeyPress={handleNumericInput}
                                    css={[
                                      inputFieldStyle,
                                      errorBorder(
                                        !!(errors.title && touched.title)
                                      ),
                                    ]}
                                  />
                                </label>

                                {(isShowColorPicker.includes(index) ||
                                  variations[index].color) && (
                                  <div className="errorContainer">
                                    <ColorPicker
                                      formik={formik}
                                      variation={advert?.variations[index]}
                                      index={index}
                                      onClose={handleShowColorPicker}
                                    />
                                    <ErrorMessage name="colors">
                                      {(msg) => (
                                        <div css={errorStyle}>{msg}</div>
                                      )}
                                    </ErrorMessage>
                                  </div>
                                )}
                                {!isShowColorPicker.includes(index) && (
                                  <button
                                    type="button"
                                    css={buttonStyle}
                                    onClick={() =>
                                      handleShowColorPicker(index, formik)
                                    }
                                  >
                                    <p>Додати колір</p> <FiPlus />
                                  </button>
                                )}

                                {isShowAddSize.includes(index) && (
                                  <label htmlFor={`variations.${index}.size`}>
                                    <Field
                                      name={`variations.${index}.size`}
                                      type="number"
                                      placeholder="Об'єм"
                                      onFocus={() => {
                                        setFieldError(
                                          `variations.${index}`,
                                          undefined
                                        );
                                      }}
                                      onKeyPress={handleNumericInput}
                                      css={[
                                        inputFieldStyle,
                                        errorBorder(
                                          !!(errors.title && touched.title)
                                        ),
                                      ]}
                                    />
                                  </label>
                                )}
                                <button
                                  type="button"
                                  css={buttonStyle}
                                  onClick={() => handleShowSize(index)}
                                >
                                  <p>Додати обʼєм</p> <FiPlus />
                                </button>

                                <ErrorMessage name={`variations.${index}`}>
                                  {() => (
                                    <div css={errorStyle}>
                                      Усі поля мають бути заповнені
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                              <div>
                                {variations.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    <FaRegTrashAlt css={trashCan} />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() =>
                              push({
                                size: "",
                                price: "",
                                count: "",
                                color: "",
                                discount: "",
                              })
                            }
                            css={[buttonStyle, { marginTop: "14px" }]}
                          >
                            <p>Додати варіацію товару</p>
                            <FiPlus />
                          </button>
                        </>
                      )}
                    </FieldArray>
                  </div>

                  <div css={[blockWrapper, commonBlock]}>
                    <h2>Відгуки</h2>
                    <FieldArray name="feedbacks">
                      {({ push, remove }) => (
                        <>
                          {feedbacks.map((_, i) => (
                            <label key={i} htmlFor={`feedbacks.${i}`}>
                              <Field
                                as="textarea"
                                name={`feedbacks.${i}`}
                                id={`feedbacks.${i}`}
                                placeholder="Відгук"
                              />
                              {feedbacks.length > 1 && (
                                <button type="button" onClick={() => remove(i)}>
                                  Видалити відгук
                                </button>
                              )}
                              <ErrorMessage name={`feedbacks.${i}`}>
                                {(msg) => <div css={errorStyle}>{msg}</div>}
                              </ErrorMessage>
                            </label>
                          ))}
                          <button type="button" onClick={() => push("")}>
                            Додати відгук
                          </button>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>

                <div css={submitWrapper}>
                  <button type="submit">Опублікувати оголошення</button>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default AdminForm;
