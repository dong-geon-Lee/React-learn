import React from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  const showIsCart = useSelector((state) => state.ui.cartIsShow);

  return (
    <div>
      <Layout>
        {showIsCart && <Cart></Cart>}
        <Products></Products>
      </Layout>
    </div>
  );
};

export default App;
