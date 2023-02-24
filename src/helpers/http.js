import axios from 'axios';

const http = token => {
    const headers = {};
    if (token) {
        headers.Authorization = 'Bearer ' + token;
    }

    // console.log('masuk');
    const instance = axios.create({
        // baseURL: 'http://192.168.100.195:5555',
        baseURL: 'https://fw12-backend-three.vercel.app',
        headers,
    });
    return instance;
};

export default http;
