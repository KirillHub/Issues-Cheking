import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URLS } from '../shared/constans/urls';
import { Issue } from '../types/issues';

export const fetchIssues = createAsyncThunk<Issue[]>('issues/fetchIssues', async () => {
  const response = await axios.get(URLS.tensorFlow);
  return response.data;
});
