import { createSlice } from "@reduxjs/toolkit";

const wacthListSlice = createSlice({
    name:"watchList",
    initialState:[],
    reducers:{
        addToList:(state, action) => {
            state.push(action.payload);
        },
        deleteFromList:(state, action) => {
            return state.filter((movie) => movie.id !== action.payload);
        }

        
    }
})

export const {addToList, deleteFromList} = wacthListSlice.actions;
export default wacthListSlice.reducer
 