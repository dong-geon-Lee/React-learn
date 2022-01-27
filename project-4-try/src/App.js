import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

const App = () => {
  const ctx = useContext(AuthContext);

  console.log(ctx);

  return (
    <>
      <MainHeader></MainHeader>
      <main>
        {!ctx.isLoggedIn && <Login></Login>}
        {ctx.isLoggedIn && <Home></Home>}
      </main>
    </>
  );
};

export default App;
