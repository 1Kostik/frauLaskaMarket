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
  volumeStyle,
  pageTitle,
  formContainer,
  submitWrapper,
  blockWrapper,
  categoryFields,
  categoryBlock,
  inputFieldStyle,
  buttonStyle,
  titleImagesWrapper,
} from "./AdminForm.styled";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";
import CustomSelect from "@components/CustomSelect";
import ColorPicker from "@components/ColorPicker";
import { IAdvert } from "Interfaces/IAdvert";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { createCategory } from "@redux/categories/operations";
import { selectCategories } from "@redux/categories/selectors";
import { ICategory } from "Interfaces/ICategory";
import { errorBorder } from "@components/CartForm/CartForm.styled";

const FILE_SIZE = 1024 * 1024 * 2;

interface IAdminFormProps {
  advert?: IAdvert;
}

const initialValues: IAdvert = {
  categoryId: undefined,
  imageFiles: [],
  mainImage: undefined,
  title: "",
  description: "",
  volumes: [{ size: "", price: "", productCount: "" }],
  discount: "",
  stockCount: "",
  composition: "",
  colors: [],
  feedbacks: [""],
  benefit: "",
  productCode: "",
  newCategory: "",
};

const validationSchema = Yup.object({
  categoryId: Yup.number().required("Оберіть категорію"),
  imageFiles: Yup.array()
    .min(1, "Необхідно вибрати хоча б один файл")
    .nullable(),
  title: Yup.string().required("Назва обов'язкова"),
  description: Yup.string().required("Опис обов'язковий"),
  volumes: Yup.array().of(
    Yup.object().shape({
      size: Yup.mixed().required("Об'єм обов'язковий"),
      price: Yup.mixed().required("Ціна обов'язкова"),
      productCount: Yup.mixed().required("Кількість обов'язкова"),
    })
  ),
  discount: Yup.number(),
  composition: Yup.string(),
  colors: Yup.array().min(1, "Необхідно вибрати хоча б один колір").required(),
  feedbacks: Yup.array().of(Yup.string()),
  benefit: Yup.string(),
  newCategory: Yup.string(),
});

const AdminForm: React.FC<IAdminFormProps> = ({ advert }) => {
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

  return (
    <>
      <Formik
        initialValues={advert || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: IAdvert) => {
          const totalProductCount = values.volumes.reduce(
            (acc, vol) => acc + Number(vol.productCount),
            0
          );
          values.stockCount = totalProductCount;
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
            values: { imageFiles, volumes, feedbacks, newCategory },
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
                  <div css={[blockWrapper, categoryBlock]}>
                    <h2>Категорія</h2>
                    <div css={categoryFields}>
                      <div className="errorContainer">
                        <CustomSelect
                          formik={formik}
                          selectedCategoryId={advert?.categoryId}
                        />
                        <ErrorMessage name="categoryId">
                          {(msg) => <div css={errorStyle}>{msg}</div>}
                        </ErrorMessage>
                      </div>

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

                  <div css={blockWrapper}>
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
                                {i === 0 ? <CloseIcon /> : ""}
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
                            {(msg) => <div css={errorStyle}>{msg}</div>}
                          </ErrorMessage>
                        </div>
                      )}
                    </FieldArray>
                  </div>

                  <label htmlFor="title">Назва</label>
                  <Field
                    name="title"
                    type="text"
                    id="title"
                    onFocus={() => setFieldError("title", undefined)}
                  />
                  <ErrorMessage name="title">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>

                  <label htmlFor="description">Опис</label>
                  <Field
                    name="description"
                    type="textarea"
                    id="description"
                    onFocus={() => setFieldError("description", undefined)}
                  />
                  <ErrorMessage name="description">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>

                  <label htmlFor="composition">Склад</label>
                  <Field name="composition" type="textarea" id="composition" />
                  <ErrorMessage name="composition">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>

                  <label htmlFor="benefit">З чим допоможе?</label>
                  <Field name="benefit" type="textarea" id="benefit" />
                  <ErrorMessage name="benefit">
                    {(msg) => <div css={errorStyle}>{msg}</div>}
                  </ErrorMessage>

                  <label htmlFor="discount">Знижка</label>
                  <Field name="discount" type="number" id="discount" />

                  <div className="errorContainer">
                    <ColorPicker
                      formik={formik}
                      colorsForEdit={advert?.colors}
                    />
                    <ErrorMessage name="colors">
                      {(msg) => <div css={errorStyle}>{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <FieldArray name="volumes">
                    {({ push, remove }) => (
                      <>
                        {volumes.map((_, index) => (
                          <div key={index} css={volumeStyle}>
                            <label htmlFor={`volumes.${index}.size`}>
                              Об'єм
                            </label>
                            <Field
                              name={`volumes.${index}.size`}
                              type="number"
                              placeholder="Об'єм"
                              onFocus={() => {
                                setFieldError(`volumes.${index}`, undefined);
                              }}
                              onKeyPress={handleNumericInput}
                            />

                            <label htmlFor={`volumes.${index}.price`}>
                              Ціна
                            </label>
                            <Field
                              name={`volumes.${index}.price`}
                              type="number"
                              placeholder="Ціна"
                              onFocus={() => {
                                setFieldError(`volumes.${index}`, undefined);
                              }}
                              onKeyPress={handleNumericInput}
                            />

                            <label htmlFor={`volumes.${index}.productCount`}>
                              Кількість
                            </label>
                            <Field
                              name={`volumes.${index}.productCount`}
                              type="number"
                              placeholder="Кількість"
                              onFocus={() => {
                                setFieldError(`volumes.${index}`, undefined);
                              }}
                              onKeyPress={handleNumericInput}
                            />

                            {volumes.length > 1 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Видалити поле
                              </button>
                            )}
                            <ErrorMessage name={`volumes.${index}`}>
                              {() => (
                                <div css={errorStyle}>
                                  Усі поля мають бути заповнені
                                </div>
                              )}
                            </ErrorMessage>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() =>
                            push({ size: "", price: "", productCount: "" })
                          }
                        >
                          Додати об'єм
                        </button>
                      </>
                    )}
                  </FieldArray>
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
