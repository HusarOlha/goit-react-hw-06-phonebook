import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from 'redux/initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE.filter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});
export const contactFilter = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
