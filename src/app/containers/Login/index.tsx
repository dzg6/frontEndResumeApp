/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectLogin, selectUsername, selectPassword } from './selectors';
import { loginSaga } from './saga';

export function Login () {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();


  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeUsername(evt.currentTarget.value));

  }

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changePassword(evt.currentTarget.value));
}
  const onLogin = () => {
     dispatch(actions.submitLogin());
  };


  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Div>
      <Title>Login</Title>
      <InputUsername
        type="text"
        placeholder="Username"
        name="username"
        onChange={onChangeUsername}
      />
      <br />
      <InputPassword
        type="password"
        placeholder="password"
        name="password"
        onChange={onChangePassword}
      />
      <br />
      <Button
      type="button"
      onClick={onLogin}> Submit </Button>
      </Div>
    </>
  );
};

const Title = styled.h1`

`;
const InputPassword = styled.input`
    font-size: 16px;
    outline: 0;
    margin:0 0 10px 0 ;
    `;
const InputUsername = styled.input`
        font-size: 16px;
        outline: 0;
        margin:10px 0 0 0 ;
        `;
const Div = styled.div`
  margin-top:20px;
  text-align: -webkit-center;
`;

const Button = styled.button``;
