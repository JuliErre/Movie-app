import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchList/WatchListSlice";

const store = configureStore({
    reducer: {
  watchList : watchListReducer,
    },
});

export default store;

