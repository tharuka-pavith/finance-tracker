/**
 * The configure store function does all the hard work for us. 
 * It creates the store which holds our state, combines our reducers
 */

import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';

export default configureStore({
    //store holds all our reducers and manages them for us.
	reducer: {
        login: loginReducer
    },
});