import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchList/WatchListSlice";
import UserInfoReducer from "../features/userInfo/UserInfoSlice";

const store = configureStore({
    reducer: {
  watchList : watchListReducer,
  userInfo: UserInfoReducer,
    },
});

export default store;

