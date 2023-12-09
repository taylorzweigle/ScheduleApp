//Taylor Zweigle, 2023
import { combineReducers } from "redux";

import selectedDateReducer from "./selectedDate";
import themeReducer from "./theme";

const reducers = combineReducers({
  selectedDate: selectedDateReducer,
  theme: themeReducer,
});

export default reducers;
