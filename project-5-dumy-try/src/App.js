import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Headers from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

// 1. 더미 데이터 구축하기
//todo, Meals -> Header -> Cart
// 2. Context 구축하기
//todo, Meals -> Cart
// 3. Styling 구착하기
//todo, Modal -> Meals -> Input -> Cart -> Header

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHanlder}></Cart>}
      <Headers onShowCart={showCartHandler}></Headers>
      <Meals></Meals>
    </>
  );
};

export default App;
