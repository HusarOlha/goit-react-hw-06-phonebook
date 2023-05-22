import { contactReducer } from './ContactSlicer/contactSlice';
import { contactFilter } from './contactFilter/contactFilter';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: contactFilter,
  },
});

export default store;
