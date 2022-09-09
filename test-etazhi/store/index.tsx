import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist'

import {rootReducer} from "./reducers/index";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const  persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistore = persistStore(store)
    return {store,persistore }
}
