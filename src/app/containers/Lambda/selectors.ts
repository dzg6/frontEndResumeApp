import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.lambda || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  lambdaState => lambdaState.username,
);

export const selectIDs = createSelector(
  [selectDomain],
  lambdaState => lambdaState.IDs,
);
