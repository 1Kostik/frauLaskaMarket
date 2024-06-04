import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

import HealthyPage from "@pages/HealthyPage/HealthyPage";
import MainPage from "@pages/MainPage/MainPage";
import AromaSchool from "@pages/AromaSchool/SchoolPage";
import StorePage from "@pages/StorePage/StorePage";
import CartPage from "@pages/BasketPage/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="consultations" element={<HealthyPage />} />
          <Route path="aroma-school" element={<AromaSchool />} />
          <Route path="store" element={<StorePage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
