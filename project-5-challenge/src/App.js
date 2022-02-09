import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };

  const hideCartHandler = () => {
    setIsShowCart(false);
  };

  return (
    <>
      {isShowCart && <Cart onCloseCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </>
  );
};

export default App;
