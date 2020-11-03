/**
 *
 * Logout
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { reducer, sliceKey, actions } from '../slice';
import styled from 'styled-components/macro';
import {useHistory } from "react-router-dom";
import { useInjectReducer } from 'utils/redux-injectors';

interface Props {}

export function Logout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const dispatch = useDispatch();
  let history = useHistory();

  const onLogin = () => {
    dispatch(actions.logout());
    history.push("/");
  };
  

  return (
    <>
      <Div>
      <Button
      type="button"
      onClick={onLogin}> Logout </Button>
      </Div>
    </>
  );
}

const Div = styled.div``;
const Button = styled.button``;
