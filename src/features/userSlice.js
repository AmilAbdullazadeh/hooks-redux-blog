import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isSigned: false,
        userData: null,
        searchInput: "app",
        blogData: null
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSigned = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        },
    }
})

export const {setSignedIn, setUserData, setSearchInput, setBlogData} = userSlice.actions

export const selectSignedIn = (state) => state.user.isSigned;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer
