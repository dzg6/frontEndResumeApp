/**
 *
 * CreateUser
 *
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled, {css} from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCreateUser } from './selectors';
import { createUserSaga } from './saga';
import { useHistory } from "react-router-dom";

interface Props {}

export function CreateUser(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: createUserSaga });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  let history = useHistory();
  let [isBlocking, setIsBlocking] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createUser = useSelector(selectCreateUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    e.target.reset();
    //console.log(JSON.stringify({ username, password, confirmPassword, email }));
    
      dispatch(actions.createUser(JSON.stringify({ username, password, email })));
      let linkDump = "/user/" + username;
      history.push(linkDump);
  };



  return (
    <>
      <Helmet>
        <title>CreateUser</title>
        <meta name="description" content="Description of CreateUser" />
      </Helmet>
      <Div>
        <Form onSubmit={submitForm}>
          {username?<Label>Username:  </Label>:<Label fixMe>Username:  </Label>}
          <Input 
          type="text" 
          value={username}
          onChange={e => setUsername(e.target.value)}></Input><br />

          {email?<Label>Email:  </Label>:<Label fixMe>*Email:  </Label>}
          <Input 
          type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}></Input><br />

          {password?<Label>Password:  </Label>:<Label fixMe>*Password:  </Label>}
          <Input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}></Input><br />

          {confirmPassword?<Label>Confirm Password:  </Label>:<Label fixMe>*Confirm Password:  </Label>} 
          <Input 
          type="password" 
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}></Input><br />
          {password === confirmPassword ? "" : <P>"Passwords does not match!"<br /></P> }
          {password  === confirmPassword && password != '' && username && email ?<Button type="submit">Sign Up</Button>: <Button type="submit"  disabled>Sign Up</Button>}
        </Form> 
      </Div>
    </>
  );
}
const P = styled.p`
color:red;
font:small;
display:inline;`;
const Div = styled.div`  margin-top:20px;
text-align:center;`;
const Form = styled.form``;
const Label = styled.label`        
font-size: 16px;
outline: 0;
margin:10px 0 0 0 ;

${props => props.fixMe && css`
color: red;
`}
`;
const Input = styled.input`        font-size: 16px;
outline: 0;
margin:10px 0 0 0 ;`;
const Button = styled.button``;
