import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload;
            if (email === 'admin@mail.com' && password === 'Login1234@') {
                state.token = 'gotToken';
            }
        },
        logout: () => {
            return initialState;
        },
    },
});

export const {login: loginAction, logout: logoutAction} = auth.actions;

export default auth.reducer;
