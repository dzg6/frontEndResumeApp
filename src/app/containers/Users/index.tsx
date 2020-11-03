/**
 *
 * Users
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectUsers } from './selectors';
import { usersSaga } from './saga';

interface Props {}

export function Users(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users = useSelector(selectUsers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div></Div>
    </>
  );
}

const Div = styled.div``;
