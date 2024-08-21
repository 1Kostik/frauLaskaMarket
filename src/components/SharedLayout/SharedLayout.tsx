/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RingLoader from "react-spinners/RingLoader";

import "react-toastify/dist/ReactToastify.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import GoToTop from "@components/GoToTop/GoToTop";
import Overlay from "@components/Overlay";

const SharedLayout = () => {
  return (
    <>
      <ToastContainer autoClose={1500} position="top-center" theme="dark" />
      <Overlay type="loader">
        <RingLoader color="#cabcbc" size={120} />
      </Overlay>
      <Header />
      <main>
        <GoToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
