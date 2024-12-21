import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
  },
});
export const selectNameFilter = state => state.filters.name;

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

