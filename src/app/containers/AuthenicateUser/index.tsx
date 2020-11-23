/**
 *
 * Authenicate User
 * This index is used for debugging
 * Login and Logout hold majority of the code
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

//Authenicate User State
import { selectUsername, selectAuthenicated, selectStatus } from './selectors';
import { reducer, sliceKey} from './slice';


export function AuthenicateUser() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const username = useSelector(selectUsername);
  const status = useSelector(selectStatus);
  const isAuthenicated = useSelector(selectAuthenicated);


  return (
    <>
      <Div>
              Username: {username} <br />
              Status: {status.msg} <br />
              Authenicated: {isAuthenicated.toString()}
      </Div>
    </>
  );
}

const Div = styled.div``;
