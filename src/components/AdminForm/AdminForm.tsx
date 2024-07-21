import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  Formik,
  Form,
  ErrorMessage,
  FieldArray,
  FormikProps,
  Field,
  FormikErrors,
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
  submitWrapper,
  blockWrapper,
  categoryFields,
  commonBlock,
  inputFieldStyle,
  buttonStyle,
  titleImagesWrapper,
  textAreaStyle,
  trashCan,
  reviewWrapper,
  reviewsContainer,
  variationsContainer,
  variationWrapper,
  inputLabel,
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
import { IAdvert, IFeedback, IVariation } from "Interfaces/IAdvert";
import { createAdvert } from "@redux/ads/operations";
import { SerializedStyles } from "@emotion/react";

const FILE_SIZE = 1024 * 1024 * 2;

interface IAdminFormProps {
  advert?: IAdvert;
}

const initialValues: IAdvert = {
  category_id: "",
  imageUrls: [],
  mainImage: "",

  title: "",
  productCode: "",
  composition: "",
  benefit: "",
  description: "",

  variations: [{ size: "", price: "", count: "", color: "", discount: "" }],

  feedbacks: [{ name: "", profession: "", review: "" }],

  popularity: "",
  ranking: "",

  newCategory: "",
};

const validationSchema = Yup.object({
  category_id: Yup.mixed().required("Оберіть категорію"),
  imageUrls: Yup.array().min(1, "Необхідно вибрати принаймні одне зображення"),
  mainImage: Yup.string(),
  title: Yup.string().required("Назва обов'язкова"),
  productCode: Yup.string().required("Код обов'язковий"),
  composition: Yup.string(),
  description: Yup.string().required("Опис обов'язковий"),

  variations: Yup.array().of(
    Yup.object().shape({
      price: Yup.mixed().required("Ціна обов'язкова"),
      discount: Yup.mixed(),
      count: Yup.mixed().required("Кількість обов'язкова"),
      colors: Yup.string(),
      size: Yup.mixed(),
    })
  ),

  feedbacks: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
      profession: Yup.string(),
      review: Yup.string(),
    })
  ),

  newCategory: Yup.string(),
});

const AdminForm: React.FC<IAdminFormProps> = ({ advert }) => {
  const [isShowColorPicker, setIsShowColorPicker] = useState<number[]>([]);
  const [isShowAddSize, setIsShowAddSize] = useState<number[]>([]);

  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories).map(
    (item: ICategory) => item.title
  );

  const [feedbacksArr, setFeedbacksArr] = useState<number[]>([]);
  const feedbackRefArr = useRef<(HTMLAreaElement | null)[]>([]);
  useEffect(() => {
    feedbackRefArr.current = feedbacksArr.map(
      (i) => feedbackRefArr.current[i] || null
    );
  }, [feedbacksArr]);
  useEffect(() => {
    feedbackRefArr.current.forEach((item) =>
      item?.addEventListener(
        "input",
        () => (item.style.height = `${item.scrollHeight}px`)
      )
    );
    return () => {
      feedbackRefArr.current.forEach((item) =>
        item?.removeEventListener(
          "input",
          () => (item.style.height = `${item.scrollHeight}px`)
        )
      );
    };
  }, [feedbacksArr]);
  useEffect(() => {
    const textAreaElemets = document.querySelectorAll("textarea");
    textAreaElemets.forEach((textArea) =>
      textArea.addEventListener(
        "input",
        () => (textArea.style.height = `${textArea.scrollHeight}px`)
      )
    );
    return () => {
      textAreaElemets.forEach((textArea) =>
        textArea.removeEventListener(
          "input",
          () => (textArea.style.height = `${textArea.scrollHeight}px`)
        )
      );
    };
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (advert) {
      setIsShowColorPicker(advert.variations.map((_, i) => i));
    }
  }, [advert]);

  const handleAddPhotos = (
    e: React.ChangeEvent<HTMLInputElement>,
    formik: FormikProps<IAdvert>
  ) => {
    const {
      values: { imageUrls },
      setFieldValue,
    } = formik;
    const files = Array.from(e.target.files || []) as File[];
    const filesForAdd = files.filter((file) => file.size < FILE_SIZE);
    const fileUrls = filesForAdd.map((file) => URL.createObjectURL(file));
    if (imageUrls.length + fileUrls.length > 8) {
      return;
    }

    setFieldValue("imageUrls", [...imageUrls, ...filesForAdd]);
  };

  const handleRemove = (i: number, formik: FormikProps<IAdvert>) => {
    const {
      values: { imageUrls },
      setFieldValue,
    } = formik;
    setFieldValue("imageUrls", [
      ...imageUrls.filter((_, index) => index !== i),
    ]);
  };

  const handleMainPhoto = (i: number, formik: FormikProps<IAdvert>) => {
    formik.setFieldValue(
      "imageUrls",
      (() => {
        const { imageUrls } = formik.values;
        const mainImage = imageUrls[i];
        return [mainImage, ...imageUrls.filter((_, index) => index !== i)];
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

  const handleInputFieldStyles = (
    errors: string | undefined,
    touched: boolean | undefined,
    textareaStyle?: SerializedStyles
  ) => {
    return [inputFieldStyle, errorBorder(!!(errors && touched)), textareaStyle];
  };

  const handleOnSubmit = (values: IAdvert) => {
    const mainImg = values.imageUrls[0];
    if (typeof mainImg === "string") {
      values.mainImage = mainImg;
    } else {
      values.mainImage = mainImg.name;
    }
    delete values.newCategory;
    values.popularity = 1;
    values.ranking = 1;

    const formData = new FormData();

    values.imageUrls.forEach((file) => {
      if (file instanceof File) {
        formData.append(`imageUrls`, file);
      }
    });

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const value = values[key as keyof IAdvert];
        if (typeof value === "string" || typeof value === "number") {
          formData.append(key, value.toString());
        } else if (Array.isArray(value)) {
          value.forEach((valuesObj, index) => {
            if (
              typeof valuesObj === "object" &&
              valuesObj !== null &&
              !(valuesObj instanceof File)
            ) {
              for (const objKey in valuesObj) {
                if (Object.prototype.hasOwnProperty.call(valuesObj, objKey)) {
                  const objValue =
                    valuesObj[objKey as keyof (IVariation | IFeedback)];
                  if (
                    typeof objValue === "string" ||
                    typeof objValue === "number"
                  ) {
                    if (key === "imageUrls") return;
                    formData.append(`${key}[${index}][${objKey}]`, objValue);
                  }
                }
              }
            }
          });
        }
      }
    }
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    // console.log("values", values);
    dispatch(createAdvert(formData));
  };

  return (
    <>
      <Formik
        initialValues={advert || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleOnSubmit(values);
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik: FormikProps<IAdvert>) => {
          const {
            values: {
              imageUrls,
              variations,
              feedbacks,
              newCategory,
              title,
              productCode,
              benefit,
              composition,
              description,
            },
            setFieldError,
            errors,
            touched,
          } = formik;

          return (
            <>
              <h1 css={pageTitle}>
                {!advert ? "Створення товару" : "Редагевання товару"}
              </h1>

              <Form>
                <div css={formDataWrapper}>
                  <div css={[blockWrapper, commonBlock]}>
                    <h2>Категорія</h2>
                    <div css={categoryFields}>
                      {categories.length !== 0 && (
                        <div className="errorContainer">
                          <CustomSelect
                            formik={formik}
                            selectedCategoryId={advert?.category_id}
                          />
                          <ErrorMessage name="category_id">
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
                          css={handleInputFieldStyles(
                            errors.newCategory,
                            touched.newCategory
                          )}
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
                      {imageUrls.length < 8 && (
                        <>
                          <label htmlFor="imageUrls" css={addImagesBtn}>
                            Додати фотографію
                          </label>
                          <input
                            type="file"
                            name="imageUrls"
                            id="imageUrls"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleAddPhotos(e, formik)}
                          />
                        </>
                      )}
                    </div>
                    <FieldArray name="imageUrls">
                      {() => (
                        <div css={imagesContainer}>
                          {imageUrls.map((image, i) => (
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
                          <ErrorMessage name={`imageUrls`}>
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
                          css={handleInputFieldStyles(
                            errors.title,
                            touched.title
                          )}
                        />
                        <p css={inputLabel(!!title)}>Назва товару</p>
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
                          css={handleInputFieldStyles(
                            errors.productCode,
                            touched.productCode
                          )}
                        />
                        <p css={inputLabel(!!productCode)}>Код</p>
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
                          css={handleInputFieldStyles(
                            errors.composition,
                            touched.composition,
                            textAreaStyle
                          )}
                        />
                        <p css={inputLabel(!!composition)}>Склад</p>
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
                          css={handleInputFieldStyles(
                            errors.benefit,
                            touched.benefit,
                            textAreaStyle
                          )}
                        />
                        <p css={inputLabel(!!benefit)}>З чим допоможе?</p>
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
                          css={handleInputFieldStyles(
                            errors.description,
                            touched.description,
                            textAreaStyle
                          )}
                        />
                        <p css={inputLabel(!!description)}>Опис товару</p>
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
                        <div css={variationsContainer}>
                          {variations.map((_, index) => (
                            <div key={index} css={[blockWrapper, commonBlock]}>
                              <h2>Варіація товару: {index + 1}</h2>
                              <div css={variationWrapper}>
                                <div css={categoryFields}>
                                  <label
                                    htmlFor={`variations${index}.price`}
                                    className="errorContainer"
                                  >
                                    <Field
                                      name={`variations.${index}.price`}
                                      type="text"
                                      placeholder="Ціна товару"
                                      id={`variations${index}.price`}
                                      onFocus={() => {
                                        setFieldError(
                                          `variations.${index}.price`,
                                          undefined
                                        );
                                      }}
                                      onKeyPress={handleNumericInput}
                                      css={handleInputFieldStyles(
                                        (
                                          errors.variations?.[
                                            index
                                          ] as FormikErrors<IVariation>
                                        )?.price,
                                        touched.variations?.[index]?.price
                                      )}
                                    />
                                    <p
                                      css={inputLabel(
                                        !!formik.values.variations[index].price
                                      )}
                                    >
                                      Ціна товару
                                    </p>
                                    <ErrorMessage
                                      name={`variations.${index}.price`}
                                    >
                                      {(msg) => (
                                        <div css={errorStyle}>{msg}</div>
                                      )}
                                    </ErrorMessage>
                                  </label>

                                  <label
                                    htmlFor={`variations${index}.discount`}
                                    className="errorContainer"
                                  >
                                    <Field
                                      name={`variations.${index}.discount`}
                                      type="text"
                                      placeholder="Знижка"
                                      id={`variations${index}.discount`}
                                      onKeyPress={handleNumericInput}
                                      css={[inputFieldStyle]}
                                    />
                                    <p
                                      css={inputLabel(
                                        !!formik.values.variations[index]
                                          .discount
                                      )}
                                    >
                                      Знижка
                                    </p>
                                  </label>

                                  <label
                                    htmlFor={`variations${index}.count`}
                                    className="errorContainer"
                                  >
                                    <Field
                                      name={`variations.${index}.count`}
                                      type="text"
                                      placeholder="Кількість"
                                      id={`variations${index}.count`}
                                      onFocus={() => {
                                        setFieldError(
                                          `variations.${index}.count`,
                                          undefined
                                        );
                                      }}
                                      onKeyPress={handleNumericInput}
                                      css={handleInputFieldStyles(
                                        errors.variations?.[index] &&
                                          (
                                            errors.variations[
                                              index
                                            ] as FormikErrors<IVariation>
                                          ).count,
                                        touched.variations?.[index]?.count
                                      )}
                                    />
                                    <p
                                      css={inputLabel(
                                        !!formik.values.variations[index].count
                                      )}
                                    >
                                      Кількість
                                    </p>
                                    <ErrorMessage
                                      name={`variations.${index}.count`}
                                    >
                                      {(msg) => (
                                        <div css={errorStyle}>{msg}</div>
                                      )}
                                    </ErrorMessage>
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
                                    <label
                                      htmlFor={`variations${index}.size`}
                                      className="errorContainer"
                                    >
                                      <Field
                                        name={`variations.${index}.size`}
                                        type="text"
                                        placeholder="Об'єм"
                                        id={`variations${index}.size`}
                                        onKeyPress={handleNumericInput}
                                        css={[inputFieldStyle]}
                                      />
                                      <p
                                        css={inputLabel(
                                          !!formik.values.variations[index].size
                                        )}
                                      >
                                        Об'єм
                                      </p>
                                    </label>
                                  )}
                                  <button
                                    type="button"
                                    css={buttonStyle}
                                    onClick={() => handleShowSize(index)}
                                  >
                                    <p>Додати обʼєм</p> <FiPlus />
                                  </button>
                                </div>

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
                            css={buttonStyle}
                          >
                            <p>Додати варіацію товару</p>
                            <FiPlus />
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>

                  <div css={[blockWrapper, commonBlock]}>
                    <h2>Відгуки</h2>
                    <FieldArray name="feedbacks">
                      {({ push, remove }) => (
                        <div css={reviewsContainer}>
                          {feedbacks.map((_, i) => (
                            <div key={i} css={reviewWrapper}>
                              <div css={categoryFields}>
                                <label
                                  htmlFor={`feedbacks${i}.name`}
                                  className="errorContainer"
                                >
                                  <Field
                                    type="text"
                                    name={`feedbacks.${i}.name`}
                                    id={`feedbacks${i}.name`}
                                    placeholder="Імʼя людини"
                                    css={[inputFieldStyle]}
                                  />
                                  <p
                                    css={inputLabel(
                                      !!formik.values.feedbacks[i].name
                                    )}
                                  >
                                    Імʼя людини
                                  </p>
                                </label>
                                <label
                                  htmlFor={`feedbacks${i}.profession`}
                                  className="errorContainer"
                                >
                                  <Field
                                    type="text"
                                    name={`feedbacks.${i}.profession`}
                                    id={`feedbacks${i}.proffesion`}
                                    placeholder="Хто ця людина"
                                    css={[inputFieldStyle]}
                                  />
                                  <p
                                    css={inputLabel(
                                      !!formik.values.feedbacks[i].profession
                                    )}
                                  >
                                    Хто ця людина
                                  </p>
                                </label>
                                <label
                                  htmlFor={`feedbacks${i}.review`}
                                  className="errorContainer"
                                >
                                  <Field
                                    as="textarea"
                                    name={`feedbacks.${i}.review`}
                                    id={`feedbacks${i}.review`}
                                    placeholder="Текст відгуку"
                                    innerRef={(el: HTMLAreaElement) =>
                                      (feedbackRefArr.current[i] = el)
                                    }
                                    css={[
                                      inputFieldStyle,
                                      textAreaStyle,
                                      { width: "100%" },
                                    ]}
                                  />
                                  <p
                                    css={inputLabel(
                                      !!formik.values.feedbacks[i].review
                                    )}
                                  >
                                    Текст відгуку
                                  </p>
                                </label>
                                <ErrorMessage name={`feedbacks.${i}`}>
                                  {(msg) => <div css={errorStyle}>{msg}</div>}
                                </ErrorMessage>
                              </div>

                              {feedbacks.length > 1 && (
                                <button type="button" onClick={() => remove(i)}>
                                  <FaRegTrashAlt css={trashCan} />
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setFeedbacksArr((prev) => [
                                ...prev,
                                feedbacks.length,
                              ]);
                              push({ name: "", profession: "", review: "" });
                            }}
                            css={buttonStyle}
                          >
                            Додати відгук
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  <div css={submitWrapper}>
                    <button type="submit">Опублікувати оголошення</button>
                  </div>
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
