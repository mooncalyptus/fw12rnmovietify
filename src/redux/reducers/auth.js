import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.token = payload.token;
        },
        register: (state, {payload}) => {
            state.token = payload.token;
        },
        logout: (state, action) => {
            state.token = null;
        },
    },
    extraReducers: build => {},
});

// export const {login: loginAction, logout: logoutAction} = auth.actions;
export const {logout, login, register} = auth.actions;

export default auth.reducer;
