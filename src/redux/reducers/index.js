import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import transactions from './transactions';

const authConfig = {
    key: 'auth',
    storage: AsyncStorage,
};
const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    transactions,
});

export default reducer;
