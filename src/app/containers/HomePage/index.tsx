import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Login } from '../Login';
import styled from 'styled-components/macro';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Div>
      <NavBar />
      <Login />
      </Div>
    </>
  );
};
const Div = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;

`;
