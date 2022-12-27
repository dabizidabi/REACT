import { configureStore } from "@reduxjs/toolkit";
import comics from "../reducers/comics";
import heroes from "../reducers/heroes";
import singleComic from "../reducers/singleComic";
import singleHero from "../reducers/singleHero";

const store = configureStore({
  reducer: { comics, heroes, singleComic, singleHero },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
