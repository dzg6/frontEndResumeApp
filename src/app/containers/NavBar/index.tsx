/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components/macro';
import {   BrowserRouter as Router, NavLink } from "react-router-dom";


export const NavBar = () => {


  return (
    <>
      <Div>
      <StyledLink
      to="/"
      activeClassName="selected">
      Home
      </StyledLink>
      </Div>
    </>
  );
};

const Div = styled.div`
  margin-top:20px;
  text-align: center;
`;
const StyledLink = styled(NavLink)`
cursor: pointer;
text-decoration: none;
display: flex-inline;
padding: 0.25rem 1rem;
font-size: 0.875rem;
font-weight: 500;
align-items: center;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.4;
}
`;