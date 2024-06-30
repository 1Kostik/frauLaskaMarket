import { customAlphabet } from "nanoid";
import nightCream from "@assets/images/poductsImg/cream-skin-1.jpg"
import nightCream2 from "@assets/images/poductsImg/cream-skin-2.webp"
import nightCream3 from "@assets/images/poductsImg/cream-skin-3.webp"
import nightCream4 from "@assets/images/poductsImg/cream-skin-4.webp"
import nightCream5 from "@assets/images/poductsImg/cream-skin-5.webp"
import { Product } from "Interfaces/Product";
const customId = customAlphabet("0123456789", 6);

export const categories = [
  {
    id: 1,
    title: "Догляд за тілом",
    count:0,
  },
  {
    id: 2,
    title: "Харчові добавки",
    count: 0,
   
  },
  {
    id:3,
    title: "Ароматизовані свічки",
    count: 0,
  
  },
];
export const products: any = [
  {
    id: 4,
    categoryId: 1,
    title: "Нічний крем",
    imageUrls: [nightCream,nightCream2,nightCream3,nightCream4,nightCream5],    
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white","blue","yellow"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 30,
    benefit: "увлажнение сухой кожи",
    popularity:450,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 5,
    categoryId: 1,
    title: "Мило",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 250 },
      { size: "340ml", price: 700 },
    ],
    ranking: 20,
    benefit: "увлажнение сухой кожи",
    popularity:400,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 6,
    categoryId: 1,
    title: "Шампунь",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 450 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    popularity:100,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 7,
    categoryId: 1,
    title: "Кондиціонер",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 550 },
      { size: "340ml", price: 700 },
    ],
    ranking: 1,
    benefit: "увлажнение сухой кожи",
    popularity:200,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 8,
    categoryId: 1,
    title: "Гель для тіла",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 150 },
      { size: "340ml", price: 700 },
    ],
    ranking: 60,
    benefit: "увлажнение сухой кожи",
    popularity:300,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 9,
    categoryId: 2,
    title: "Вітамін д3",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 3,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 50 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    popularity:500,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 10,
    categoryId: 2,
    title: "Екстракт женьшеня",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 650 },
      { size: "340ml", price: 700 },
    ],
    ranking: 90,
    benefit: "увлажнение сухой кожи",
    popularity:40,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 11,
    categoryId: 2,
    title: "Вітамін В",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 150 },
      { size: "340ml", price: 700 },
    ],
    ranking: 30,
    benefit: "увлажнение сухой кожи",
    popularity:200,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 12,
    categoryId: 2,
    title: "Вітаміни А",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 850 },
      { size: "340ml", price: 700 },
    ],
    ranking: 40,
    benefit: "увлажнение сухой кожи",
    popularity:20,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 13,
    categoryId: 2,
    title: "Вітаміни C",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 550 },
      { size: "340ml", price: 700 },
    ],
    ranking: 50,
    benefit: "увлажнение сухой кожи",
    popularity:50,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 14,
    categoryId: 3,
    title: "Аромат лимона",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "50ml", price: 250 },
      { size: "100ml", price:450 },
    ],
    ranking: 20,
    benefit: "увлажнение сухой кожи",
    popularity:150,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: 15,
    categoryId: 3,
    title: "Аромат троянд",
    imageUrls: [nightCream],
    mainImage:"",
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "50ml", price: 350 },
      { size: "100ml", price: 450 },
    ],
    ranking: 5,
    benefit: "увлажнение сухой кожи",
    popularity:100,
    productCode:customId(),
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  // {
  //   id: 13,
  //   categoryId: 3,
  //   title: "Аромат троянд",
  //   imageUrls: [nightCream],
  //   description:
  //     "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
  //   colors: ["white"],
  //   discount: 10,
  //   stockCount: 100,
  //   volumes: [
  //     { size: "50ml", price: 350 },
  //     { size: "100ml", price: 450 },
  //   ],
  //   ranking: 5,
  //   benefit: "увлажнение сухой кожи",
  //   popularity:100,
  //   productCode:customId(),
  //   composition:
  //     "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  // },
];

function countItems(categoryId:number) {
  return products.filter((product:any) => product.categoryId === categoryId).length;
};
categories.forEach(category => {
  category.count = countItems(category.id);
});