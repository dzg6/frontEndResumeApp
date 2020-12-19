/**
 *
 * Home Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

//Authenicate User container
import { Login } from '../AuthenicateUser/Login';
import { Logout } from '../AuthenicateUser/Logout';
import {selectUsername, selectEmail, selectAuthenicated } from '../AuthenicateUser/selectors';
import { reducer, sliceKey, actions } from '../AuthenicateUser/slice';

export function HomePage() {

  useInjectReducer({ key: sliceKey, reducer: reducer });

  const username:string = useSelector(selectUsername);
  const email:string = useSelector(selectEmail);
  const isAuthenicated:boolean = useSelector(selectAuthenicated);


  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="Homepage" content="The Homepage" />
      </Helmet>
      <Div>
  { isAuthenicated  ? <Logout user={username} email={email}  /> : <Login /> }
      </Div>
    </>
  );
};



const Div = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-top:20px;

`;
