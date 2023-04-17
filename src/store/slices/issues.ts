import { createSlice } from '@reduxjs/toolkit';
import { fetchIssues } from '../../api';
import { Status } from '../../utils/enums';

const initialState = {
  todo: [],
  inProgress: [],
  done: [],
  status: Status.LOADING,
  error: ''
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIssues.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        // Filter issues by status
        state.todo = action.payload.filter(issue => issue.state === 'open');
        state.inProgress = action.payload.filter(issue => issue.state === 'in progress'); //TODO заменить
        state.done = action.payload.filter(issue => issue.state === 'closed');

        state.status = Status.SUCCESS;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.error.message;
      });
  }
});

export default issuesSlice.reducer;
