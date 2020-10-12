import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  username: 'f',
  password: 'd',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    submitLogin(state, action: PayloadAction<any>) {},
    changeUsername(state, action: PayloadAction<string>) {
          state.username = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
          state.password = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
