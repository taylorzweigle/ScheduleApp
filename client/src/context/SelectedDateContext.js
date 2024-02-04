//Taylor Zweigle, 2024
import React, { createContext, useReducer } from "react";

import * as Actions from "../actions";

export const SelectedDateContext = createContext();

export const selectedDateReducer = (state, action) => {
  switch (action.type) {
    case Actions.GET_SELECTED_DATE:
      return state;
    case Actions.SET_SELECTED_DATE:
      return {
        month: action.payload.month,
        date: action.payload.date,
        year: action.payload.year,
        weekday: action.payload.weekday,
      };
    default:
      return state;
  }
};

export const SelectedDateContextProvider = ({ children }) => {
  const [selectedDate, selectedDateDispatch] = useReducer(selectedDateReducer, {
    month: new Date().getMonth(),
    date: new Date().getDate(),
    year: new Date().getFullYear(),
    weekday: new Date().getDay(),
  });

  return <SelectedDateContext.Provider value={{ selectedDate, selectedDateDispatch }}>{children}</SelectedDateContext.Provider>;
};
