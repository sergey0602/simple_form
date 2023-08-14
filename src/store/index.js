import { createStore } from "redux";

const ADD_ROW = "ADD_ROW";

export const addRow = (payload) => {
  return {
    type: ADD_ROW,
    payload,
  };
};

const initialState = [];

const addRowReducer = (state = initialState, action) => {};

export const store = createStore(addRowReducer);
