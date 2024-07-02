import AdminForm from '@components/AdminForm';
import { IAdvert } from 'Interfaces/IAdvert';

const advert: IAdvert = {
  categoryId: 3,
  imageFiles: [
    "https://res.cloudinary.com/dfmactvue/image/upload/v1696879945/mazda3_se1o3h.jpg",
  ],
  mainImage: "blob:http://localhost:3000/ca9a618c-71d1-43f2-838f-fe738ced78c9",
  title: "Car",
  description: "bmw ",
  volumes: [
    {
      size: 11,
      price: 22,
      productCount: 5,
    },
    {
      size: 22,
      price: 33,
      productCount: 4,
    },
  ],
  discount: 10,
  stockCount: 9,
  composition: "wheels",
  colors: ["#D9B8FF", "#E09C4F"],
  feedbacks: ["qwerty", "asdf"],
};

const EditAdvertPage = () => {
  return (
    <>
      <AdminForm advert={advert}/>
    </>
  );
}

export default EditAdvertPage