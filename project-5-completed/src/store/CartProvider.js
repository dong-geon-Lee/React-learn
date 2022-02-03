import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//  id, name, amount, price
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // 이벤트가 발생한 item 인덱스 찾기
    const findCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 타케팅 된 카트 위치[인덱스]
    const currentCartItem = state.items[findCartItemIndex];

    let updatedItems;

    if (currentCartItem) {
      const updatedItem = {
        ...currentCartItem,
        amount: currentCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[findCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return { items: updatedItems, totalAmount: newTotalAmount };
  }

  if (action.type === "REMOVE") {
    // 삭제 하기 위해서 item index 찾기
    const findCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // 현재 위치 설정하기
    const currentCartItemLocation = state.items[findCartItemIndex];

    let updatedItems;

    if (currentCartItemLocation.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...currentCartItemLocation,
        amount: currentCartItemLocation.amount - 1,
      };

      updatedItems = [...state.items];

      updatedItems[findCartItemIndex] = updatedItem;
    }

    const newTotalAmount = state.totalAmount - currentCartItemLocation.price;

    return { items: updatedItems, totalAmount: newTotalAmount };
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

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
