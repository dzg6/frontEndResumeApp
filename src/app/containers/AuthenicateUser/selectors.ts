/**
 *
 * Authenicate User Selector
 * 
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.authenicateUser || initialState;

export const selectUser = createSelector(
  [selectDomain],
  userState => userState,
);
export const selectUsername = createSelector(
  [selectDomain],
  userState => userState.username,
);
export const selectEmail = createSelector(
  [selectDomain],
  userState => userState.email,
);
export const selectStatus = createSelector(
  [selectDomain],
  userState => userState.status,
);

export const selectAuthenicated = createSelector(
  [selectDomain],
  userState => userState.isAuthenicated,
);