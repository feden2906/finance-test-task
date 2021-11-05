import { combineReducers } from "redux";

import { moviesReducer } from "./movies";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
  movies: moviesReducer,
  theme: themeReducer
})
