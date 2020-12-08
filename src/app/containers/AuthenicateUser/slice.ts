/**
 *
 * Authenicate User Slice
 * 
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the User container
export const initialState: ContainerState = {
  username: 'empty',
  password: 'empty',
  email: 'empty',
  status: {msg: 'empty'},
  isAuthenicated: false,
};

const userSlice = createSlice({
  name: 'authenicateUser',
  initialState,
  reducers: {

    userLoggedIn(state, action: PayloadAction<any>) {
      state.status = action.payload.status;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isAuthenicated = action.payload.isAuthenicated;
    },

    submitLogin(username, password) {
      //Does not modify the state
    },

    logout(state) {
      state.username = "";
      state.isAuthenicated = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
