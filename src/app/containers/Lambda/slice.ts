import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Lambda container
export const initialState: ContainerState = {
    username: 'Default Mark',
    IDs:[{id:0}]
  };

const lambdaSlice = createSlice({
  name: 'lambda',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
          state.username = action.payload;
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      state.repositories = [];
    },
    getIDs(state, /*action: PayloadAction<[]>*/) {
        //  state.IDs = action.payload;
    },
    reposLoaded(state, action: PayloadAction<[]>) {
      const repos = action.payload;
      state.IDs = repos;
    },
  },
});

export const { actions, reducer, name: sliceKey } = lambdaSlice;
