export const extractUnitTypeTitle = (unit: string): string => {
  switch (unit) {
    case "мл":
      return "Об'єм";
    case "гр":
      return "Вага";
    case "шт":
      return "Комплект";
    default:
      return "";
  }
};
