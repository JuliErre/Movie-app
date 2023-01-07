import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: {},
        accesToken: "",
        uid: "",
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setAccesToken: (state, action) => {
            state.accesToken = action.payload;
        },
        setUid: (state, action) => {
            state.uid = action.payload;
        },
        setProfileImage: (state, action) => {
            state.userInfo.photoURL = action.payload;
        },
        deleteUserInfo: (state, action) => {
            state.userInfo = {};
            state.accesToken = "";
            state.uid = "";
        },
    },
});

export const {
    setUserInfo,
    setAccesToken,
    setUid,
    setProfileImage,
    deleteUserInfo,
} = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
