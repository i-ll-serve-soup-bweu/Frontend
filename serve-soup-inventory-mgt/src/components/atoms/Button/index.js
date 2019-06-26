import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0.5px solid #6cb043;
  color: #6cb043;
  margin: 5px 0;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;

  ${props => props.primary && css`
    font-size: 0.8em;
    padding: 0.45em 7em;
  `}

  ${props => props.secondary && css`
    background: #8DBD53;
    color: white;
    font-size: 0.8em;
    padding: 0.4em 3.5em;
  `}

  ${props => props.tertiary && css`
    font-size: 0.8em;
    padding: 0.45em 1em;
  `}

  ${props => props.withoutBorder && css`
    background: none;
    color: black;
    font-size: 0.6em;
    border: none;
    padding: 0;
    margin: 0;
  `}
`;

export default StyledButton;
