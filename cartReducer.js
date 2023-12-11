const { createStore } = require("redux");

//constant type cart item
const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM";
//define cart state
const initialCartState = {
  cart: ["suger"],
  numberOfProducts: 1,
};
//cart action
const getCartAction = () => {
  return {
    type: GET_CART_ITEM,
  };
};
const addCartAction = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};
//cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      state;
  }
};
//cart store
const store = createStore(cartReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch cart store
store.dispatch(getCartAction());
store.dispatch(addCartAction("pen"));
