import AdminForm from "@components/AdminForm";
import { containerStyles } from "@styles/variables";
import { IAdvert } from "Interfaces/IAdvert";

const advert: IAdvert = {
  categoryId: 2,
  imageFiles: [
    "https://res.cloudinary.com/dfmactvue/image/upload/v1696879579/samples/balloons.jpg",
  ],
  mainImage: "blob:http://localhost:3000/ca9a618c-71d1-43f2-838f-fe738ced78c9",

  title: "Car",
  productCode: "string",
  composition: "wheels",
  benefit: "string",
  description: "bmw ",

  variations: [
    { size: "100", price: "111", count: "12", color: "pink", discount: "5" },
    {
      size: "300",
      price: "333",
      count: "33",
      color: "#dada11e0",
      discount: "",
    },
  ],

  feedbacks: ["qwerty", "asdf"],
};

const EditAdvertPage = () => {
  return (
     <section>
      <div css={containerStyles}>
        <AdminForm advert={advert}/>
      </div>
    </section>
  );
};

export default EditAdvertPage;
