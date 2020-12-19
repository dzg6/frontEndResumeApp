 /**
 *
 * Create User Selector
 *
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.createUser || initialState;

export const selectCreateUser = createSelector(
  [selectDomain],
  createUserState => createUserState,
);
export const selectStatus = createSelector(
  [selectDomain],
  createUserState => createUserState.status,
);
