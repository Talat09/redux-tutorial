//product Reducer

const { createStore } = require("redux");

// constant product type
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//define state
const initialProductState = {
  products: [{ name: "Suger", quantity: 2 }],
  numberOfProducts: 1,
};
//action
const addProductsAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
const getProductsAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
//create reducer for add Product Reducer
const addProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      state;
  }
};
//create for get product reducer
const getProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    default:
      state;
  }
};
//create store for add product
const addProductStore = createStore(addProductReducer);
addProductStore.subscribe(() => {
  console.log(addProductStore.getState());
});
//create store for get product
const getProductStore = createStore(getProductReducer);
getProductStore.subscribe(() => {
  console.log(getProductStore.getState());
});
// dispatch get product
getProductStore.dispatch(getProductsAction());
//dispatch add product
addProductStore.dispatch(addProductsAction({ name: "Salt", quantity: 3 }));
// dispatch get product
getProductStore.dispatch(getProductsAction());
