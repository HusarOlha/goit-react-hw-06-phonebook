import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from 'redux/initialState';
const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
    addContacts: (state, action) => {
      return [action.payload, ...state];
    },
    deleteContacts: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { setContacts, addContacts, deleteContacts } =
  contactSlice.actions;
