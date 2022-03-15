import React from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <>
      <MainHeader></MainHeader>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
