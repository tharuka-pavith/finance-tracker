/**
 * The configure store function does all the hard work for us. 
 * It creates the store which holds our state, combines our reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  });

export const persistor = persistStore(store);


// export default configureStore({
//     //store holds all our reducers and manages them for us.
// 	reducer: {
//         login: loginReducer
//     },
// });