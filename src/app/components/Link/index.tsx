/**
 *
 * Link
 *
 */
import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Link:any = styled(RouterLink)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;