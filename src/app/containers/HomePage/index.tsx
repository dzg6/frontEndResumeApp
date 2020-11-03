import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Login } from '../AuthenicateUser/Login';
import { Logout } from '../AuthenicateUser/Logout';
import {selectUsername, selectAuthenicated } from '../AuthenicateUser/selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from '../AuthenicateUser/slice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';


export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const username:string = useSelector(selectUsername);
  const isAuthenicated:boolean = useSelector(selectAuthenicated);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Div>
Username: {username} <br />
isAuthenicated: {isAuthenicated.toString()}
  { isAuthenicated 
  ? <Logout /> 
  : <Login /> }
      </Div>

    </>
  );
};
const Div = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-top:20px;
    text-align:center;

`;
