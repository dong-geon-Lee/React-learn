import React, { useCallback, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

// 1. 데이터 렌더링하기
// 2. 더미 컴포넌트 만들기
// AvaliableMeals -> MealItem -> MealItemForm -> MealsSummary -> Meals ->
// Header -> CartIcon -> HeaderCartButton -> Input -> Modal -> Context API -> Header -> MealItem -> Cart

// 3. Helper 컴포넌트 만들기
// 4. Context API 적용하기
// 5. 컴포넌트 Styling 하기

//? 왜 id에 amount가 붙었을까? 그냥 props.id만 써도 상관없을텐데? -> id: `amount_${props.id}`,
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = useCallback(() => {
    setCartIsShown(true);
  }, [cartIsShown]);

  const hideCartHanlder = useCallback(() => {
    setCartIsShown(false);
  }, [cartIsShown]);

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHanlder}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </>
  );
};

export default App;
