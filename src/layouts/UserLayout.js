//Create User Layout

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserLayout = ({ children }) => {
  if (localStorage.getItem("token")) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
};

export default UserLayout;
