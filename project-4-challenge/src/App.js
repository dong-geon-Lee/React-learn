import React, { useState } from "react";
import Home from "./components/Home/Home";
import GlobalStyles from "./components/UI/Global/Global";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logHandler = () => {};

  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Home></Home>
    </div>
  );
};

export default App;
