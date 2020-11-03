import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.users || initialState;

export const selectUsers = createSelector(
  [selectDomain],
  usersState => usersState,
);
