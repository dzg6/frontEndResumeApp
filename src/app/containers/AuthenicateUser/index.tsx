/**
 *
 * User
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectUser } from './selectors';
import { userSaga } from './saga';

interface Props {}

export function User(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useSelector(selectUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>User</title>
        <meta name="description" content="Description of User" />
      </Helmet>
      <Div></Div>
    </>
  );
}

const Div = styled.div``;
