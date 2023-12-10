// defining constant type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//state
//step 1: define state
const initialCounterState = {
  count: 0,
};

const initialUsersState = {
  users: [
    {
      name: "Talat mahmud",
    },
  ],
};
//action ---> INCREMENT | DECREMENT
//action main have a object .Object have two working thing
//Number 1 is Type
//Number 2 is Payload(payload means kono data passing)
//action gula ke kono ekta function er moddhe create korte hove
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const addUserAction = () => {
  return {
    type: ADD_USER,
    payload: { name: "Amir hamja" },
  };
};
// 1. define state
//2. dispatch action
//3. reducer
//4.update store
