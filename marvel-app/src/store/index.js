import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "../reducers/comicsReducer";
import heroesReducer from "../reducers/heroesReducer";

const store = configureStore({
  reducer: { comicsReducer, heroesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
