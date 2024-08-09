import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy, Suspense } from "react";
import ClearLocalStorageOnNavigate from "./components/ClearLocalStorageOnNavigate"
const MainPage = lazy(() => import("@pages/MainPage/MainPage"));
const HealthyPage = lazy(() => import("@pages/HealthyPage/HealthyPage"));
const AromaSchool = lazy(() => import("@pages/SchoolPage/SchoolPage"));
const StorePage = lazy(() => import("@pages/StorePage/StorePage"));
const ProductDetails = lazy(
  () => import("@pages/ProductDetails/ProductDetails")
);
const CartPage = lazy(() => import("@pages/CartPage/CartPage"));
const CreateAdvertPage = lazy(
  () => import("@pages/CreateAdvertPage/CreateAdvertPage")
);
const EditAdvertPage = lazy(
  () => import("@pages/EditAdvertPage/EditAdvertPage")
);
const LoginPage = lazy(() => import("@pages/LoginPage/LoginPage"));
const OrderedPage = lazy(() => import("@pages/OrderedPage/OrderedPage"));
const OrdersPage = lazy(()=>import("@pages/OrdersPage/OrdersPage"))
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ClearLocalStorageOnNavigate/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="consultations" element={<HealthyPage />} />
          <Route path="aroma-school" element={<AromaSchool />} />
          <Route path="store" element={<StorePage />} />
          <Route path="store/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="ordered" element={<OrderedPage />} />
          <Route path="admin/create-advert" element={<CreateAdvertPage />} />
          <Route
            path="admin/edit-advert/:productId"
            element={<EditAdvertPage />}
          />
           <Route path="admin/orders" element={<OrdersPage/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/admin/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
