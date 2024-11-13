import robotoRegular from "@assets/fonts/Roboto-Regular.ttf";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { IOrder } from "Interfaces/IOrder";
import imgLogo from "@assets/images/pdfImages/fl_0.jpg";

Font.register({
  family: "Roboto",
  src: robotoRegular,
});

const styles = StyleSheet.create({
  page: {
    padding: "20 20 20 20",
    backgroundColor: "#FFFF",
    fontFamily: "Roboto",
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  tableCol: {
    width: "16.66%",
    borderStyle: "solid",
    borderRightWidth: 1,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  header: {
    backgroundColor: "#FFFF",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
interface MyDocumentProps {
  data?: IOrder | null;
}

const MyDocument: React.FC<MyDocumentProps> = ({ data }) => {
  const {
    order_items,
    delivery_city,
    delivery_destination,
    delivery_type,
    id,
    last_name,
    name,
    order_date,
    payment_status,
    payment_method,
    phone,
    recipient_last_name,
    recipient_name,
    recipient_phone,
    total_amount,
  } = data!;
  const type_payment =
  payment_method === "paymentByRequisites"
    ? "Переказ на банківський рахунок"
    : payment_method;
  const ordercColors = (color: string) => {
    switch (color) {
      case "#FF0000":
        return "червоний";
      case "#FFA500":
        return "оранжевий";
      case "#FFFF00":
        return "жовтий";
      case "#008000":
        return "зелений";
      case "#00FFFF":
        return "блакитний";
      case "#0000FF":
        return "синій";
      case "#8B00FF":
        return "фіолетовий";
      case "#FFC0CB":
        return "рожевий";
      case "#50C878":
        return "смарагдовий";
      case "#808000":
        return "оливковий";
      case "#FFD700":
        return "золотий";
      case "#C0C0C0":
        return "срібний";
      case "#FFFF":
        return "білий";
      case "#000000":
        return "чорний";
      case "#808080":
        return "сірий";
    }
  };
  const unitType =
    data &&
    data.order_items[0].size &&
    data.order_items[0].size.toString().replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");

  const visibleUnitType = unitType === "шт" ? "" : "шт";
  const title = unitType === "шт" ? "Комп-\nлект" : "Один. вимір.";
  const date = new Date(order_date);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={{ marginBottom: 10, fontSize: 10 }}>
          Дата замовлення: {date.toLocaleDateString()}
        </Text>
        <View style={{ marginBottom: 10, flexDirection: "row" }}>
          <Image style={styles.image} src={imgLogo} /><Text>{" "}</Text>
          <Text style={{ fontSize: 12 }}>
            Продавець: ФОП Лотоцька Лана Сергіївна, р/р
            UA063052990000026009000403601, АТ КБ "ПРИВАТБАНК" , код за ЄДРПОУ
            3196409941, ІПН 3196409941
          </Text>
        </View>
        <Text style={{ marginBottom: 10, fontSize: 16, textAlign: "center" }}>
          Товарний чек №{id}
        </Text>
        <View style={[styles.table, { borderBottomWidth: 1 }]}>
          <View style={[styles.tableRow, styles.header]}>
            <View style={[styles.tableCol, { width: "6%" }]}>
              <Text style={styles.tableCell}>№</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>Найменування товару</Text>
            </View>
            <View style={[styles.tableCol, { width: "10%" }]}>
              <Text style={styles.tableCell}>{title}</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  width: "10%",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>К-сть</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  width: "15%",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>Колір</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  width: "15%",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>Ціна</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  width: "12%",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>Знижка</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  borderRightWidth: 0,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.tableCell}>Сума</Text>
            </View>
          </View>

          {order_items.map((item, i) => (
            <View style={[styles.tableRow, { borderWidth: 0 }]} key={item.id}>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "6%",
                    borderBottomWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={styles.tableCell}>{i + 1}</Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  { width: "50%", borderBottomWidth: 1 },
                ]}
              >
                <Text style={styles.tableCell}>{item.title}</Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>{item.size}</Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>
                  {item.count}
                  {visibleUnitType}
                </Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "15%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>
                  {item.color ? ordercColors(item.color) : "-"}
                </Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "15%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>{item.full_price}</Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "12%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>
                  {item.discount ? item.discount : 0}%
                </Text>
              </View>
              <View
                style={[
                  styles.tableCol,
                  {
                    width: "16.7%",
                    borderRightWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={styles.tableCell}>{item.total_cost}грн</Text>
              </View>
            </View>
          ))}

          <View
            style={[
              styles.tableRow,
              {
                borderWidth: 0,
                justifyContent: "flex-end",
                width: "30%",
                marginLeft: "70%",
              },
            ]}
          >
            <View
              style={[
                styles.tableCol,
                {
                  width: "30.3%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeftWidth: 1,
                },
              ]}
            >
              <Text style={styles.tableCell}>Разом</Text>
            </View>
            <View
              style={[
                styles.tableCol,
                {
                  borderRightWidth: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "41.3%",
                },
              ]}
            >
              <Text style={styles.tableCell}>{total_amount}грн</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 200,
            justifyContent: "flex-end",
            width: "80%",
            marginTop: 20,
            fontSize: 15,
            marginBottom: 20,
          }}
        >
          <Text>Дата</Text>
          <Text>Підпис</Text>
        </View>

        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          ПІБ: {last_name} {name}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>Телефон: {phone}</Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          Оплата: {type_payment}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          Статус оплати: {payment_status}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          Доставка: {delivery_type}
        </Text>
        {delivery_type !== "Самовивіз" && (
          <>
            (
            <Text style={{ fontSize: 12, marginBottom: 20 }}>
              Місто: {delivery_city}
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 20 }}>
              Відділення/поштомат №: {delivery_destination}
            </Text>
            )
          </>
        )}
        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          Отримувач: {recipient_last_name ? recipient_last_name : last_name}{" "}
          {recipient_name ? recipient_name : name}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 20 }}>
          Телефон отримувача: {recipient_phone ? recipient_phone : phone}
        </Text>
      </Page>
    </Document>
  );
};

export default MyDocument;
