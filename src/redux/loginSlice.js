import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login', //slice name.
    initialState: { // add initial state
        name: "",
        email: "",
        password: "",
        _id: "",
        __v: 0
    },
    reducers: { 
        //reducer responds to the action, takes the current state, 
        //and creates new state based on the action payload
        storeLogin: (state, action) => {
            state.name = action.payload.name;
            state._id = action.payload._id;
            state.email = action.payload.email;
            //push this to the state object. At this point, 
            //redux will take this new state and update the store
            //state.push(data);
        },
    },
});

// Action creators are generated for each case reducer function
/**
 *the loginSlice has created a bunch of actions for us based on our reducer names, 
 and we just use destructuring to get the storeLogin action and export 
 */
export const { storeLogin } = loginSlice.actions

//And we export the reducer so we can add it to our store
export default loginSlice.reducer