const { createStore, combineReducers } = require("redux");

//constant type product item
const ADD_ITEM = "ADD_ITEM";
const GET_ITEM = "GET_ITEM";
//constant type cart item
const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM";
//define product state
const initialProductState = {
  product: ["Notebook", "book"],
  numberOfProducts: 2,
};
//define cart state
const initialCartState = {
  cart: ["Burger"],
  numberOfProducts: 1,
};
//product action
const getProductAction = () => {
  return {
    type: GET_ITEM,
  };
};
const addProductAction = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
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
//product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
      };
    case ADD_ITEM:
      return {
        ...state,
        product: [...state.product, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
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
      return state;
  }
};
//combine reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
//root store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//product store
// const productStore = createStore(productReducer);
// productStore.subscribe(() => {
//   console.log(productStore.getState());
// });
//cart store
// const store = createStore(cartReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
//dispatch product store
store.dispatch(getProductAction());
store.dispatch(addProductAction("Mobile"));

//dispatch cart store
store.dispatch(getCartAction());
store.dispatch(addCartAction("Leans"));
