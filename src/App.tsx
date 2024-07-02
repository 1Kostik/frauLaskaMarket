import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import MainPage from "@pages/MainPage/MainPage";
import HealthyPage from "@pages/HealthyPage/HealthyPage";
import AromaSchool from "@pages/SchoolPage/SchoolPage";
import StorePage from "@pages/StorePage/StorePage";
import CartPage from "@pages/CartPage/CartPage";
import ProductDetails from "@pages/ProductDetails/ProductDetails";
import CreateAdvertPage from "@pages/CreateAdvertPage/CreateAdvertPage";
import EditAdvertPage from "@pages/EditAdvertPage/EditAdvertPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="consultations" element={<HealthyPage />} />
          <Route path="aroma-school" element={<AromaSchool />} />
          <Route path="store" element={<StorePage />} />
          <Route path="store/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="/admin/create-advert" element={<CreateAdvertPage />} />
        <Route path="/admin/edit-advert" element={<EditAdvertPage />} />
      </Routes>
    </>
  );
}

export default App;
