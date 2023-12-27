import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts/contactsSlice.js'

export const store = configureStore({
    reducer: contactsReducer,
    devTools: process.env.NODE_ENV !== 'production',
})
