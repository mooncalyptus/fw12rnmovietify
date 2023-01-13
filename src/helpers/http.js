import axios from 'axios';

const http = token => {
    const headers = {};
    if (token) {
        headers.Authorization = 'Bearer ' + token;
    }

    const instance = axios.create({
        baseURL: 'https://fw12-backend-three.vercel.app',
        headers,
    });
    return instance;
};

export default http;
