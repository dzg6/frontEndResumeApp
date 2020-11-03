import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the User container
export const initialState: ContainerState = {
  username: 'empty',
  password: 'empty',
  status: {msg: 'empty'},
  isAuthenicated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<any>) {
      console.log('autheicated user');
      state.status = action.payload.status;
       state.username = action.payload.username;
      state.isAuthenicated = action.payload.isAuthenicated;
    },
    submitLogin(state, action: PayloadAction<any>) {},
    logout(state, action: PayloadAction<string>) {
      state.username = "";
      state.isAuthenicated = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
