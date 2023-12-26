import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, deleteContactThunk, addContactThunk } from '../../redux//operations.js';

export const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  },
  reducers: {
   
    updateContactState: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },

    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    })
    .addCase(deleteContactThunk.fulfilled, (state, {payload}) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload.id
      );
      state.contacts.isLoading = false;
    })
    .addCase(addContactThunk.fulfilled, (state, {payload}) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    })
    .addCase(fetchContactsThunk.pending, (state, {payload}) => {
      state.contacts.isLoading = true;
    })
    .addCase(fetchContactsThunk.rejected, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    })
  }
});

export const { loadingToggler, errorToggler, fetchingContacts, deleteContact, updateContactState, changeFilter, addContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
