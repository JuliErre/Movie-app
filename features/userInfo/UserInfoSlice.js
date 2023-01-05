import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice =  createSlice({
    name:"userInfo",
    initialState:{
        userInfo:{},
        accesToken:"",
        uid:"",
    },
    reducers:{
        setUserInfo:(state, action) => {
            state.userInfo = action.payload;
        },
        setAccesToken:(state, action) => {
            state.accesToken = action.payload;
        },
        setUid:(state, action) => {
            state.uid = action.payload;
        },
        deleteUserInfo:(state, action) => {
            state.userInfo = {};
            state.accesToken = "";
            state.uid = "";
        }

    }
    

})

export const {setUserInfo, setAccesToken, setUid,deleteUserInfo} = UserInfoSlice.actions;
export default UserInfoSlice.reducer