import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

const App = () => {
  const cart = useSelector((state) => state.cart.isShowCart);

  return (
    <Layout>
      {cart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
