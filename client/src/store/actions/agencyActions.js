import { createAsyncThunk } from '@reduxjs/toolkit';
import agencyService from '../services/agencyService';

// Agencies
export const doAgencies = createAsyncThunk('agency/doAgencies', (payload, thunkAPI) => {
  return agencyService.getAgencies(payload, thunkAPI);
});

// Agencies
export const agenciesPending = (state) => {
  state.isLoading = true;
};

export const agenciesFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.agencies = action.payload;
};

export const agenciesRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.agencies = null;
};
