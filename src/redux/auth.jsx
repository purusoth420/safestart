import { createSlice } from "@reduxjs/toolkit";

const bool = localStorage.getItem('isLogin') != null ? localStorage.getItem('isLogin') : false

const initialState = {
    isLogin: bool == "true" ? true : false,
    userName: "",
}

const Auth = createSlice({
    name: 'auth',
    initialState: {
        isLogin: initialState.isLogin,
        userName: initialState.userName
    },
    reducers: {
        handleLogin: (state, action) => {
            const { isLogin, userName } = action.payload;
            state.isLogin = isLogin;
            state.userName = userName;
 
            localStorage.setItem('isLogin', isLogin);
            localStorage.setItem('userName', userName);
        },
    }
})

export const { handleLogin } = Auth.actions

export default Auth.reducer
export const checkLogin = (state) => state.auth.isLogin
