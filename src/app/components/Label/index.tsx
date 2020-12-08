/**
 *
 * Label
 *
 */
import styled, {css} from 'styled-components/macro';

interface TitleProps {
  readonly fixMe?: boolean;
};


export const Label = styled.label<TitleProps>`  
color:green;      
font-size: small;
outline: 0;
${props => props.fixMe && css`
color: red;
font-style:italic;
`}
`;