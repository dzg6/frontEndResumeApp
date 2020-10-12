/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

interface Props {}

export const NavBar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>NavBar</title>
        <meta name="description" content="Description of NavBar" />
      </Helmet>
      <Div>
      <Link
      href="/">
      Home
      </Link>
      <Link
      href="/lambda">
      Lambda
      </Link>
      </Div>
    </>
  );
});

const Div = styled.div`
background-color:yellow;
  margin-top:20px;
      text-align: -webkit-center;
`;

const Link = styled.a`
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
