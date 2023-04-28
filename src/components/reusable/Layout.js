import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="layout_main">
      <Header />

      {children}
    </div>
  );
};

export default Layout;
