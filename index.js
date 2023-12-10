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

//create reducer for counter

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, //sob gula state ke niye aslam just count tak update korchi
        count: state.count + 1,
      };
    //
    case DECREMENT:
      return {
        ...state, //sob gula state ke niye aslam just count tak update korchi
        count: state.count - 1,
      };
    default:
      state;
  }
};

//reducer is a pure function which is take input and definitely return output based on type

//reducer logic built in action type

//step:
// 1. define state
//2. dispatch action
//3. reducer
//4.update store
