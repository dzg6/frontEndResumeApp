/**
 * 
 * HomePage Selectors
 * 
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '../AuthenicateUser/slice';

const selectDomain = (state: RootState) => state.homepage || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  userState => userState.username,
);
export const isAuthenicated = createSelector(
  [selectDomain],
  homepageState => homepageState.isAuthenicated,
);

