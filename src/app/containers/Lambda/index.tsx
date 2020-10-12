/**
 *
 * Lambda
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectUsername, selectIDs } from './selectors';
import { lambdaSaga } from './saga';
import { NavBar } from '../NavBar';


export function Lambda () {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lambdaSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const username = useSelector(selectUsername);
  const IDs = useSelector(selectIDs);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeUsername(evt.currentTarget.value));
    dispatch(actions.loadRepos());
  };
  const onClickID = (evt) => {
    dispatch(actions.getIDs());
  //  dispatch(actions.loadRepos());
  console.log(IDs);
  };
  return (
    <>
      <Helmet>
        <title>Lambda</title>
        <meta name="description" content="Description of Lambda" />
      </Helmet>
      <NavBar />
      <Div>LAMBDA PAGE</Div>
      <Div>Username: {username}</Div>
      <Input
        type="text"
        onChange={onChangeUsername}
      />
      <br />
      <Button
      type="button"
      onClick={onClickID}
      >Get IDs</Button>
      <Div>IDs:
      {IDs.map((item) =>
          <li>{item.id}</li>
      )}

 </Div>

    </>
  );
};

const Div = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
