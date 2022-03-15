import React, { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

const App = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <MainHeader></MainHeader>
      {!authContext.isLoggedIn && <Login></Login>}
      {authContext.isLoggedIn && <Home></Home>}
    </div>
  );
};

export default App;
