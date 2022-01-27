import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// 1. basic 구조
// 2. props 구조
// 3. context 구조
// 4. css

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <MainHeader></MainHeader>
      {!authCtx.isLoggedIn && <Login></Login>}
      {authCtx.isLoggedIn && <Home></Home>}
    </div>
  );
};

export default App;
