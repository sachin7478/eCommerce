import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";

function Cart() {
  const cartProducts = useSelector((state)=>{
    return state.rootReducers.handleCart;
  })

  return (
  <>
   <div>Cart</div>;

  <ul>
  {cartProducts &&
  cartProducts.map((item, index) => {
    return <li>{item.name}</li>
  })
}
  </ul>

  </>
  )
}

export default Cart;

