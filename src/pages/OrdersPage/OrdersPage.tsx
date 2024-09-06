import { containerStyles } from "@styles/variables";
import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteOrder, getOrders } from "@services/servicesApi";
import { IOrder } from "Interfaces/IOrder";
import {
  tableStyles,
  tbodyStyles,
  theadStyles,
  thHeadsStyles,
  trHeadsStyles,
} from "./OrdersPage.styled";
import OrderItem from "@components/OrderItem/OrderItem";
import { nanoid } from "nanoid";
import SortingItems from "@components/SortingItems/SortingItems";
import SearchStore from "@components/SearchStore/SearchStore";
import { useSearchParams } from "react-router-dom";
import Pagination from "@components/Pagination/Pagination";


export function formatDate(dateString: Date | string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const OrdersPage = () => {
  const [data, setData] = useState<IOrder[]>([]);
  const [typeOfSort, setTypeOfSort] = useState<string | null>(null);
  const [searchItem, setSearchItem] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [totalPage, setTotalPage] = useState<number>(34);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { sortOrder = "ASC", sortField = "id", page } = params;

  const [currentPage, setCurrentPage] = useState(Number(page || 1));

  const fetchOrders = async () => {

    const data = await getOrders();
    setData(data);
  };

  const countItemPages = 12;
  const lastPage = totalPage && Math.ceil(totalPage / countItemPages);

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | string[]>) => {
      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        Object.keys(newParams).forEach((key) => updatedParams.delete(key));
        Object.entries(newParams).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((val) => updatedParams.append(key, val));
          } else if (value !== "") {
            updatedParams.set(key, value);
          }
        });
        return updatedParams;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    fetchOrders();
  }, []);
  const handleDeleteOrder = async (id: number) => {
    await deleteOrder(id);
    fetchOrders();
  };

  useEffect(() => {
    switch (typeOfSort) {
      // case "Номер: від меншого до більшого":
      //   updateSearchParams({ sortOrder: "ASC", sortField: "id" });
      //   break;
      // case "Номер: від більшого до меншого":
      //   updateSearchParams({ sortOrder: "DESC", sortField: "id" });
      //   break;
      case "Дата: від новіших до старіших":
        updateSearchParams({ sortOrder: "ASC", sortField: "order_date" });
        break;
      case "Дата: від старіших до новіших":
        updateSearchParams({ sortOrder: "DESC", sortField: "order_date" });
        break;
        // case "Сума: від меншої до більшої":
        // updateSearchParams({ sortOrder: "DESC", sortField: "total_amount" });
        // break;
        // case "Сума: від більшої до меншої":
        // updateSearchParams({ sortOrder: "DESC", sortField: "total_amount" });
        // break;
        case "Статус: в очікуванні спочатку":
          updateSearchParams({ sortOrder: "DESC", sortField: "status" });
          break;
          case "Статус: виконані спочатку":
            updateSearchParams({ sortOrder: "DESC", sortField: "status" });
            break;
      default:
        break;
    }
  }, [typeOfSort]);

  useEffect(() => {
    // const categoryIds = filteredItemsId.map((item) => item.categoryId);
    // const productIds = filteredItemsId.flatMap((item) =>
    //   item.productId.split(",")
    // );

    const newSearchParams = {
      ...params,
      sortOrder: sortOrder,
      sortField: sortField,
      // categoryId: categoryIds,
      // productId: productIds,
      page: currentPage.toString(),
      limit: countItemPages.toString(),
      search: searchItem.trim(),
    };

    const nonEmptyParams = Object.entries(newSearchParams).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          const filteredValue = value.filter((v) => v !== "");

          // if (filteredValue.length > 0) {
          acc[key] = filteredValue;
          // }
        } else if (value !== undefined && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string | string[]>
    );

    updateSearchParams(nonEmptyParams);

    const searchParamsString = new URLSearchParams();

    Object.entries(nonEmptyParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (val !== "") {
            searchParamsString.append(key, val);
          }
        });
      } else if (value !== "") {
        searchParamsString.append(key, value);
      }
    });

    // async function fetchProducts() {
    //   try {
    //     const result = await getProductsAndSorted(
    //       searchParamsString.toString()
    //     );

    //     setTotalPage(Number(result.total_products));
    //     setProducts(result.productData);
    //   } catch (error) {
    //     console.error("Failed to fetch products:", error);
    //   }
    // }
    // fetchProducts();
  }, [  
    currentPage,
    searchItem,
    sortOrder,
    sortField  
  ]);
  const options = [
    // "Номер: від меншого до більшого",
    // "Номер: від більшого до меншого",
    "Дата: від новіших до старіших",
    "Дата: від старіших до новіших",
    // "Сума: від меншої до більшої",
    // "Сума: від більшої до меншої",
    "Статус: в очікуванні спочатку",
    "Статус: виконані спочатку",
  ];
  const paginate = (page: number) => setCurrentPage(page);
  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === lastPage) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "25px" }}>Всі замовлення</h1>
          <div
            style={{
              width: "550px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SearchStore           
              setSearchItem={setSearchItem}             
            />
            <div style={{ width: "285px" }}>
              <SortingItems<string>
                options={options}
                width={"285px"}            
                setSelectedOption={setTypeOfSort}
                selectedOption={typeOfSort}
              />
            </div>
          </div>
        </div>

        <table css={tableStyles}>
          <thead css={theadStyles}>
            <tr css={trHeadsStyles}>
              <th css={thHeadsStyles}>Номер</th>
              <th css={thHeadsStyles}>Дата</th>
              <th css={thHeadsStyles}>Ім'я</th>
              <th css={thHeadsStyles}>Телефон</th>
              <th css={thHeadsStyles}>Сумма</th>
              <th css={thHeadsStyles}>Тип оплати</th>
              <th css={thHeadsStyles}>Оплата</th>
              <th css={thHeadsStyles}>Статус</th>
              <th css={thHeadsStyles}>Видалити</th>
              <th css={thHeadsStyles}>Детальніше</th>
            </tr>
          </thead>
          <tbody css={tbodyStyles}>
            {data &&
              data.map((item) => (
                <OrderItem
                  item={item}
                  key={nanoid()}
                  onDelete={handleDeleteOrder}
                />
              ))}
          </tbody>
        </table>
      </div>
      {data && data.length > 0 && (
          <Pagination
            totalPage={totalPage}
            countItemPages={countItemPages}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        )}
    </section>
  );
};

export default OrdersPage;
