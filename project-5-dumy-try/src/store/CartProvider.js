import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// id: "m1",
// name: "Sushi",
// description: "Finest fish and veggies",
// price: 22.99,

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // 1. 기존에 가지고 있는 수량을 파악하기
    // 2. 기존item에 새로운 newItem을 더해야된다.
    // 3. price 와 amount 의 합을 반영해야된다.
    // 4. totalAmount 로 연결되어서 최종합을 구해야된다

    // 사용자가 선택한 품목의 index를 알아야 값의 기준을 잡을 수 있다.
    // id가 m1 m2 m3 m4 중에 일치하는 1개를 찾는다.
    const findCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 계산 할 품목의 시작점을 잡았다.
    const existingCartItem = state.items[findCartItemIndex];

    // item 상태가 변할 떄 반영해줄 변수선언
    let updatedItems;

    // inputRef로 얻은 amount number type 값이 action.item.amount 형태로 들어갔다.
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // 상태를 변경하기 전에 기존상태를 복사한다.
      updatedItems = [...state.items];

      updatedItems[findCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // totalAmount의 초기값은 0이다. price는 처음부터 품폭별로 각각 상수값을 가진다.
    // amount가 전체값을 변화시키는 변수이다. 즉 추가식이 진행 될 수록 state.totalAmount는 그 상태를
    // 매번 반영하여 newTotalAmount로 값을 대입한다.
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: newTotalAmount };
  }

  if (action.type === "REMOVE") {
    // 클릭한 Item의 id를 찾는다
    const findCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // items의 target 좌표를 저장한다.
    const existingItem = state.items[findCartItemIndex];

    let updatedItems;

    // amount === 1? 이거는 cartItem에서 amount:1 로 직접 설정 해준 맥락과 일치하는데?
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      // 초기 상태값 복사
      updatedItems = [...state.items];

      // 이벤트가 일어난 target(items index 위치)에 업데이트된 데이터를 변수 updatedItems에 할당한다.
      updatedItems[findCartItemIndex] = updatedItem;
    }

    // target을 totalAmount에서 뺴준다.
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
