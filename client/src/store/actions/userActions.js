import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

// Users
export const doUsers = createAsyncThunk('user/doUsers', (payload, thunkAPI) => {
  return userService.getUsers(thunkAPI);
});

// Users
export const usersPending = (state) => {
  state.isLoading = true;
};

export const usersFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.users = action.payload;
};

export const usersRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.users = null;
};
