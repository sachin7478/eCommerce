import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { addCart } from "../redux/action/index";

import "./Cart.css";

function Cart() {
  const cartProducts = useSelector((state) => {
    return state.rootReducers.handleCart;
  });

  return (
    <>
      <div>Cart</div>
      <div className="container">
        <div className="row">
          {cartProducts &&
            cartProducts.map((item, index) => {
              return <CartItems item={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

const CartItems = (props) => {
  // write function to remove item
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(delCart(props.item));
  };

  const addProduct = () => {
    dispatch(addCart(props.item));
  };

  const { title, image, price } = props.item;
  //const cartQuantity=useSelector((state)=>state.rootReducers.);

  return (
    <>
      <div className="col-12 p-2">
        <div className="cartProduct container d-flex">
          <div className="card col-3 text-red bg-navyBlue">
            <div className="card-body">
              {/* <img src={image}/> */}
              <div className="cartProduct1" height="250px">
                <img
                  src={image}
                  className="card-img-top"
                  alt=""
                  height="200px"
                />
              </div>
            </div>
            <div className="card-footer">
              <div className="text-center">
                <button
                  onClick={removeProduct}
                  className="btn btn-outline-secondary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="p-2 h5">
              <p>{title}</p>
            </div>
            <div className="p-2 h5">
              <p>
                <span className="label label-success mr-2">$</span>
                {price}
              </p>
            </div>

            <button type="button"
             onClick={addProduct}
             className="btn btn-outline-secondary">INCREMENT (+)</button>

            <button type="button"
             onClick={removeProduct}
             className="btn btn-outline-secondary">DECREMENT (-)</button>

            <p>"Quantity :"{}</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Cart;
