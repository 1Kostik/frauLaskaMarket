/** @jsxImportSource @emotion/react */
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
