/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import {   BrowserRouter as Router, NavLink } from "react-router-dom";

interface Props {}

export const NavBar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>
        
      <NavLink
      to="/">
      <Text>Home</Text>
      </NavLink>
      </Div>
    </>
  );
});

const Div = styled.div`
background-color:yellow;
  margin-top:20px;
      text-align: center;
`;

const Text = styled.a`
  color: ${p => p.theme.primary};
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

  .icon {
    margin-right: 0.25rem;
  }
`;
