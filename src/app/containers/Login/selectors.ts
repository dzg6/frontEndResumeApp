import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.login || initialState;

export const selectLogin = createSelector(
  [selectDomain],
  loginState => loginState,
);
export const selectUsername = createSelector(
  [selectDomain],
  loginState => loginState.username,
);
export const selectPassword = createSelector(
  [selectDomain],
  loginState => loginState.password,
);
