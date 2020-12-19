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
  status: {code:100, msg: ''},
};

const createUserSlice = createSlice({
  name: 'createUser',
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<any>) {
      state.status.code = 301;
      state.status.msg = "creating user..."
    },

    checkResponse(state, action: PayloadAction<any>) {
      console.log(action.payload.status);
      state.status = action.payload.status;
    },
    userCreated(state) {
      state.status.code = 301;
    },
    reset(state) {
      state.status.code = 100;
      state.status.msg = "";
    },

  },
  
});

export const { actions, reducer, name: sliceKey } = createUserSlice;
