/**
 *
 * CreateUser
 *
 */
//App Imports
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled, {css} from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useHistory } from "react-router-dom";

//Container Imports
import { selectCreateUser } from './selectors';
import { createUserSaga } from './saga';
import { reducer, sliceKey, actions } from './slice';

//Component Imports
import {  Input } from "app/components/Input";
import {  Button } from "app/components/Button";
import {  Form } from "app/components/Form";


export function CreateUser() {

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: createUserSaga });

  /*
  ### React Hooks v 16.8
      https://reactjs.org/docs/hooks-intro.html
  */
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('Enter Valid Password');


  /*
  ### Form Submit Function
      dispatches an action and updates the history
  */
  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmitForm = (e) => {
    console.log(username)
    e.preventDefault();
    e.target.reset();

    dispatch(actions.createUser(JSON.stringify({ username, password, email })));

  //  let link = "/user/" + username;
  //  history.push(link);
  };


/*
### Regex Validation Functions
    Username
    Email
*/
  const validateUsername = (input) => {
    let regex = /[\s\0\W]/;
    let result:boolean;

    regex.test(input) === false && input ? result = true : result = false;
    return result;
  };
  const validateEmail = (input) => {
    let regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    let result:boolean;

   regex.test(input) && input ? result = true : result = false;
   return result;
  };
  

  /*
  ### VALIDATE PASSWORDs
  ### React useEffect v 16.8
      https://reactjs.org/docs/hooks-effect.html
  */
    useEffect(() => {
    let regex = /[\s\0]/;

    if(password == ""){
      setPasswordMessage('Enter Valid Password')
    }else if (regex.test(password)) {
      setPasswordMessage('Password cannot contain spaces');
    }else if (confirmPassword == ""){
      setPasswordMessage('Please Confirm Password')
    }else if (confirmPassword != password){
      setPasswordMessage('Passwords does not match!');
    }else if (confirmPassword === password){
      setPasswordMessage('Valid Password 👍')
    }
    });


  return (
    <>
      <Helmet>
        <title>Create User</title>
        <meta name="description" content="Description of CreateUser" />
      </Helmet>
      <Div>
      <Title>Create New User</Title>
        <Form onSubmit={onSubmitForm}>
          
          {/*  Validate username */}
          {validateUsername(username) ? <Label>Valid Username 👍 </Label> : <Label fixMe>Enter a valid Username </Label> } <br />
          <Input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}></Input><br />

          {/* Validate Email */}
          {validateEmail(email) ? <Label>Valid Email 👍 </Label> : <Label fixMe>Enter a valid Email </Label> }
          <br />
          <Input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}></Input> <br />
         
         {/* Validate Password & confirmPassword */}
         {password === confirmPassword && password && confirmPassword ? <Label> {passwordMessage} </Label> : <Label fixMe> {passwordMessage} </Label> } <br />
          <Input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}></Input>  <br />
          <Input 
          type="password" 
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}></Input> <br />

          {/* Validate Submit */}
          {password  === confirmPassword && password && validateUsername(username) && validateEmail(email) ?<Button type="submit">Sign Up</Button>: <Button type="submit"  disabled>Sign Up</Button> }
        </Form> 
      </Div>
    </>
  );
}



const Title = styled.h1``;

const Div = styled.div`
max-width: 300px;  
margin: auto auto;`;

const Label = styled.label`  
color:green;      
font-size: small;
outline: 0;
${props => props.fixMe && css`
color: red;
font-style:italic;
`}
`;
