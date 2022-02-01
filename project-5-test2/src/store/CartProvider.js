import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // cartCtx.addItem({
  //   id: props.id,
  //   name: props.name,
  //   amount: amount,
  //   price: props.price,
  // });
  if (action.type === "ADD") {
    // 새로 추가된 action item이 기존 state item에서 존재하는 index를 반환한다. <0부터 시작해서>
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 이미 존재하는 item의 cart 목록 저장. {id, name, amount, price}
    const existingCartItem = state.items[existingCartItemIndex];

    //  업데이트 변수 선언
    let updatedItems;

    // 이미 Cart 목록이 존재한다면
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      // 내가 클릭한 상품의 인덱스 위치를 찾은 후,
      // 그 클릭한 품목의 id가 업데이트 된 품목의 id와 일치해야된다.
      // 그래야 올바른 품목에 amount 증가에 따른 price가 올라가게 된다.
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // 항상 마지막 합계액을 표시한다.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
