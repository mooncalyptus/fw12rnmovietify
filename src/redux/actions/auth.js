import {createAsyncThunk} from '@reduxjs/tool';
import http from '../../helpers/http';

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async ({email, password, cb}) => {
        try {
            const {data} = await http().post('/auth/login', {email, password});
            cb();
            return data.results;
        } catch (error) {
            return error.response.data.message;
        }
    },
);
