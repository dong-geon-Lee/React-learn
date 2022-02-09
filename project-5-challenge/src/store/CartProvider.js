import React, { useReducer } from "react";
import CartContext from "./cart-context";

// 1. cart-context 불러온다.
// 2. defaultState 값을 정의한다.
// 3. useReducer를 사용한다.
// 4. reducer 함수를 만든다.
// 5. context 객체를 정의한다.
// 6. Provider를 정의한다.

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const currentCartItem = state.items[existingCartItem];

    let updatedCartItems;

    if (currentCartItem) {
      const updatedCartItem = {
        ...currentCartItem,
        amount: currentCartItem.amount + action.item.amount,
      };

      updatedCartItems = [...state.items];

      updatedCartItems[existingCartItem] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }

    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return { items: updatedCartItems, totalAmount: newTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.id
    );

    const currentCartItem = state.items[existingCartItem];

    let updatedItems;

    if (currentCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...currentCartItem,
        amount: currentCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    }

    const newTotalAmount = state.totalAmount - currentCartItem.price;

    return { totalAmount: newTotalAmount, items: updatedItems };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
