import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartForm from "./components/CartForm";
import CartMain from "./components/CartMain";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CartMain></CartMain>}></Route>
        <Route path="/form" element={<CartForm></CartForm>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
