/**
 *
 * Login
 *
 */

import React, { useState }  from 'react';
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from '../slice';
import { loginSaga } from './saga';
import {  useHistory } from "react-router-dom";

import {  Link } from "../../../components/Link";

export function Login () {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const onLogin = (e) => {
    e.preventDefault();
    e.target.reset();
     dispatch(actions.submitLogin({username:username, password:password}));
     let linkDump = "/user/" + username;
     history.push(linkDump);


  };


  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Div>
      <Title>Login</Title>
      <Form onSubmit={onLogin}>
      <Input 
          type="username" 
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}></Input><br />
       <Input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}></Input><br />
      <Button
      type="submit"> Submit </Button>
      </Form>
      <Link to="/createuser">Sign Up </Link>
      </Div>
    </>
  );
};

const Title = styled.h1``;
const Input = styled.input`
    font-size: 16px;
    outline: 0;
    margin:0 0 10px 0 ;
    `;
const Div = styled.div`
  margin-top:20px;
  text-align:center;
`;
const Form = styled.form``;
const Button = styled.button``;
