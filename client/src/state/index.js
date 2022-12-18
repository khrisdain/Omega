import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    mode: "light", //toggle between dark and light
    user: null,
    token: null,
    posts: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { //actions( basically functions applied on global states)
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; 
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            }else{
                console.log("user friends non-existent")
            }
        }
    }
})