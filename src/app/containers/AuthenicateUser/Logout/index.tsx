/**
 *
 * Logout
 *
 */
//App Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import {useHistory } from "react-router-dom";
import { useInjectReducer } from 'utils/redux-injectors';

//Container Imports
import { reducer, sliceKey, actions } from '../slice';

interface Props {
  user: string;
  email: string;
}

export function Logout({ user, email }: Props) {
  
  useInjectReducer({ key: sliceKey, reducer: reducer });

  /*
  ### Logout Function
      https://react-redux.js.org/7.1/api/hooks#usedispatch
      https://reactrouter.com/web/api/history
  */
  const dispatch = useDispatch();
  let history = useHistory();

  const onLogout = () => {
    dispatch(actions.logout());
    history.push("/");
  };
  

  return (
    <>
      <Div>
        You are logged in as <strong>{user}</strong>< br />
        User Email: <strong>{email}</strong> <br />
      <Button
      type="button"
      onClick={onLogout}> Logout </Button>
      </Div>
    </>
  );
}

const Div = styled.div`
margin: auto auto;
`;
const Button = styled.button``;
