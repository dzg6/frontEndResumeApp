import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Users container
export const initialState: ContainerState = {

};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  }
});

export const { actions, reducer, name: sliceKey } = usersSlice;
