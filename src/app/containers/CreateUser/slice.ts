 /**
 *
 * Create User Slice
 *
 */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CreateUser container
export const initialState: ContainerState = {
  username:"",
  email:"",
  password:"",
};

const createUserSlice = createSlice({
  name: 'createUser',
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = createUserSlice;
