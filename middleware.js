const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//constant type product item
const ADD_ITEM = "ADD_ITEM";
const GET_ITEM = "GET_ITEM";

//define product state
const initialProductState = {
  product: ["Notebook", "book"],
  numberOfProducts: 2,
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

//root store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch product store
store.dispatch(getProductAction());
store.dispatch(addProductAction("Mobile"));
