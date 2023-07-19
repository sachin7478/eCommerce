const cart = [];
// pure function , 2 paramerts, 1 state, action
const handleCart = (state = cart, action) => {
  const product = action.payload;
  let cartProducts = [];
  switch (action.type) {
    case "ADDITEM":
      //debugger
      //CHECK if product already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //increase the quantity
        cartProducts = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
        localStorage.setItem(cart,JSON.stringify(cartProducts))
        return cartProducts;
      } else {
        const product = action.payload;
        cartProducts = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem(cart,JSON.stringify(cartProducts))
        return cartProducts;
      }
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        cartProducts = state.filter((x) => x.id !== exist1.id);
      } else {
        cartProducts = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      localStorage.setItem(cart,JSON.stringify(cartProducts))
      return cartProducts;
    default:
      localStorage.setItem(cart,JSON.stringify(state))
      return state;
  }
};

export default handleCart;
