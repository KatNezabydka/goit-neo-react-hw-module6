import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactPersistedReducer = persistReducer(persistConfig, contactReducer);