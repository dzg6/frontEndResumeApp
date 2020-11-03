import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.user || initialState;

export const selectUser = createSelector(
  [selectDomain],
  userState => userState,
);
export const selectUsername = createSelector(
  [selectDomain],
  userState => userState.username,
);
export const selectStatus = createSelector(
  [selectDomain],
  userState => userState.status,
);

export const selectAuthenicated = createSelector(
  [selectDomain],
  userState => userState.isAuthenicated,
);