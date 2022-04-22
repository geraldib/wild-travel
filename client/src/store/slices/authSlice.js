import { createSlice } from '@reduxjs/toolkit';
import {
  setLogin,
  setRegister,
  setRegisterPending,
  setRegisterFulfilled,
  setRegisterRejected,
  setLoginPending,
  setLoginFulfilled,
  setLoginRejected,
} from '../actions/authActions';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    // register
    [setRegister.pending]: setRegisterPending,
    [setRegister.fulfilled]: setRegisterFulfilled,
    [setRegister.rejected]: setRegisterRejected,

    // login
    [setLogin.pending]: setLoginPending,
    [setLogin.fulfilled]: setLoginFulfilled,
    [setLogin.rejected]: setLoginRejected,
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
