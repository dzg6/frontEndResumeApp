/**
 * 
 * HomePage Slice
 * 
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  username:"",
  isAuthenicated:false,
};

const loginSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    submitLogin(state, action: PayloadAction<any>) {},
    changeUsername(state, action: PayloadAction<string>) {
          state.username = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
