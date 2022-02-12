import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendFetchData } from "./store/cart-actions";

const App = () => {
  const showIsCart = useSelector((state) => state.ui.cartIsShow);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  console.log(notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendFetchData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {showIsCart && <Cart></Cart>}
        <Products></Products>
      </Layout>
    </>
  );
};

export default App;
