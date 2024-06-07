/** @jsxImportSource @emotion/react */
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "@components/GoToTop/GoToTop";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <GoToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
