/** @jsxImportSource @emotion/react */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "componets/Header/Header";
import Footer from "componets/Footer/Footer";

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
