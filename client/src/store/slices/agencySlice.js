import { createSlice } from '@reduxjs/toolkit';
import {
  doAgencies,
  agenciesPending,
  agenciesFulfilled,
  agenciesRejected,
} from '../actions/agencyActions';

const initialState = {
  agencies: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const agencySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // agencies
    [doAgencies.pending]: agenciesPending,
    [doAgencies.fulfilled]: agenciesFulfilled,
    [doAgencies.rejected]: agenciesRejected,
  },
});

export default agencySlice.reducer;
