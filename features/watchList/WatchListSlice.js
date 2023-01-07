import { createSlice } from "@reduxjs/toolkit";

const wacthListSlice = createSlice({
    name: "watchList",
    initialState: [],
    reducers: {
        initWatchList: (state, action) => {
            return action.payload;
        },
        addToList: (state, action) => {
            state.push(action.payload);
        },
        deleteFromList: (state, action) => {
            return state.filter((movie) => movie.id !== action.payload);
        },
        removeAllMovies: (state, action) => {
            return [];
        },
    },
});

export const { initWatchList, addToList, deleteFromList, removeAllMovies } =
    wacthListSlice.actions;
export default wacthListSlice.reducer;
