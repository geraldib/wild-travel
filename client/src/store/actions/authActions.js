import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

//Register user
export const setRegister = createAsyncThunk(
  'auth/register',
  (payload, thunkAPI) => authService.register(payload, thunkAPI)
);

//Login user
export const setLogin = createAsyncThunk('auth/login', (payload, thunkAPI) =>
  authService.login(payload, thunkAPI)
);

// Register
export const setRegisterPending = (state) => {
  state.isLoading = true;
};

export const setRegisterFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload;
  state.isLoggedIn = true;
};

export const setRegisterRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.user = null;
  state.isLoggedIn = false;
};

// Login
export const setLoginPending = (state) => {
  state.isLoading = true;
};

export const setLoginFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload;
  state.isLoggedIn = true;
};

export const setLoginRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.user = null;
  state.isLoggedIn = false;
};
