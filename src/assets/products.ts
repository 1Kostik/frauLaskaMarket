import { customAlphabet } from "nanoid";
import nightCream from "@assets/images/poductsImg/cream-skin-1.jpg"

const customId = customAlphabet("0123456789", 6);

export const categories = [
  {
    id: customId(),
    title: "Догляд за тілом",
    count:0,
  },
  {
    id: customId(),
    title: "Харчові добавки",
    count: 0,
   
  },
  {
    id: customId(),
    title: "Ароматизовані свічки",
    count: 0,
  
  },
];
export const products: any = [
  {
    id: customId(),
    categoryId: categories[0].id,
    title: "Нічний крем",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[0].id,
    title: "Мило",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[0].id,
    title: "Шампунь",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[0].id,
    title: "Кондиціонер",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[0].id,
    title: "Гель для тіла",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[1].id,
    title: "Вітамін д3",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[1].id,
    title: "Екстракт женьшеня",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[1].id,
    title: "Вітамін В",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[1].id,
    title: "Вітаміни А",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[1].id,
    title: "Вітаміни C",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "170ml", price: 350 },
      { size: "340ml", price: 700 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[2].id,
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
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
  {
    id: customId(),
    categoryId: categories[2].id,
    title: "Аромат троянд",
    imageUrls: [nightCream],
    description:
      "CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера. Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
    colors: ["white"],
    discount: 10,
    stockCount: 100,
    volumes: [
      { size: "50ml", price: 250 },
      { size: "100ml", price: 450 },
    ],
    ranking: 10,
    benefit: "увлажнение сухой кожи",
    composition:
      "AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN",
  },
];

function countItems(categoryId:string) {
  return products.filter((product:any) => product.categoryId === categoryId).length;
};
categories.forEach(category => {
  category.count = countItems(category.id);
});

/*
{
id:customId(),
categoryId:categories[0].id,
title:"Нічний крем",
imageUrls:[],
description:"CeraVe® Увлажняющий крем – эта насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера.
Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени",
colors:["white"],
discount:10,
stockCount:100,
 volumes: [
    { size: "170ml", price: 350 },
    { size: "340ml", price: 700 },    
  ],
ranking:10,
benefit:"увлажнение сухой кожи",- увлажнение сухой кожи ( к примеру)(З чим допоможе?)
composition:"AQUA / WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, DIMETHICONE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM, ETHYLHEXYLGLYCERIN", состав -ингридиенты
}
*/
// const cotegoryes={
//  1:{title:"Догляд за обличям",
//   products:[{}]
//  }
//   Догляд за обличям
// }
   // <SubItemContainer
                    //   key={`${item.id}`}
                    //   isOpen={openCategories[category.id]}
                    // >
                    //   <Wrapper>
                    //     <Label htmlFor={`checkBox${item.id}`}>
                    //       {checkedItems[item.categoryId] &&
                    //       checkedItems[item.categoryId].includes(item.id) ? (
                    //         <CheckBoxActive />
                    //       ) : (
                    //         <CheckBox css={svgCheckBox} />
                    //       )}
                    //     </Label>
                    //     <Input
                    //       type="checkbox"
                    //       id={`checkBox${item.id}`}
                    //       checked={
                    //         checkedItems[item.categoryId] &&
                    //         checkedItems[item.categoryId].includes(item.id)
                    //       }
                    //       onChange={() =>
                    //         handleCheckboxChange("product", {
                    //           id: item.id,
                    //           categoryId: item.categoryId,
                    //         })
                    //       }
                    //     />
                    //     <P1>{item.title}</P1>
                    //   </Wrapper>

                    //   <Wrapper>
                    //     <P2>{item.stockCount}</P2>
                    //   </Wrapper>
                    // </SubItemContainer>