import { ADD_REQUEST } from "./types";

const initialState = JSON.parse(localStorage.getItem('requests')) || [];

export const requestReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REQUEST :    
      localStorage.setItem('requests',[JSON.stringify([...state, payload])]);
      return [...state, payload];
    default:
      return state;
  }  
}