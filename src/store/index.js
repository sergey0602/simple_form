import { createStore } from "redux";

const ADD_ROW = "ADD_ROW";

export const addRow = (payload) => {
  return {
    type: ADD_ROW,
    payload,
  };
};

const initialState = [];

const addRowReducer = (state = initialState, action) => {
  if (action.type) {
    return action.type === ADD_ROW
      ? [
        ...state,
        {
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          email: action.payload?.email,
          message: action.payload?.message,
        },
      ]
      : state;
  }
};

export const store = createStore(addRowReducer);
