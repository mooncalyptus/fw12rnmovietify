import axios from 'axios';

const http = token => {
    const headers = {};
    if (token) {
        headers.Authorization = 'Bearer ' + token;
    }

    const instance = axios.create({
        baseURL: 'http://192.168.100.177:5555/',
        headers,
    });
    return instance;
};

export default http;
