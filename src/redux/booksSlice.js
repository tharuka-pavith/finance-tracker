import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'books', //slice name.
    initialState: { // add initial state
        books: [],
        currentBook: ""
    },
    reducers: { 
        //reducer responds to the action, takes the current state, 
        //and creates new state based on the action payload
        storeBooks: (state, action) => {
            // { key: element._id, name: element.name, id: element._id }
            state.books = action.payload.books;
            //push this to the state object. At this point, 
            //redux will take this new state and update the store
            //state.push(data);
        },
        storeCurrentBook: (state, action) => {
            state.currentBook = action.payload.currentBook;
        }
    },
});

// Action creators are generated for each case reducer function
/**
 *the loginSlice has created a bunch of actions for us based on our reducer names, 
 and we just use destructuring to get the storeLogin action and export 
 */
export const { storeBooks, storeCurrentBook } = booksSlice.actions

//And we export the reducer so we can add it to our store
export default booksSlice.reducer