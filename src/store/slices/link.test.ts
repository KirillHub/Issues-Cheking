import { BaseState } from './../../types/redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: BaseState = {
  error: '',
  loading: true
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    anyTest: state => {
      state.loading = true;
    }
  }
});

export const { anyTest } = testSlice.actions;

export default testSlice.reducer;
