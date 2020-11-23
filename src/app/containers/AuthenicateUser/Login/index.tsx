/**
 *
 * Login Form
 *
 */
//App Imports
import React, { useState }  from 'react';
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';
import {  useHistory } from "react-router-dom";

//Container Imports
import { reducer, sliceKey, actions } from '../slice';
import { loginSaga } from './saga';

//Component Imports
import {  Link } from "app/components/Link";
import {  Input } from "app/components/Input";
import {  Button } from "app/components/Button";
import {  Form } from "app/components/Form";

export function Login () {

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });


  /*### React Hooks v 16.8
      https://reactjs.org/docs/hooks-intro.html
  */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



    /*### Form Submit Function
      https://react-redux.js.org/7.1/api/hooks#usedispatch
      https://reactrouter.com/web/api/history
  */
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    e.target.reset();

    dispatch(actions.submitLogin({username:username, password:password}));

    let link = "/user/" + username;
    history.push(link);
  };


  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="Login Form" content="Login User Form" />
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
const Div = styled.div`
  max-width: 300px;
  margin:auto auto;
`;

