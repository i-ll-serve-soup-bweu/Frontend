import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #6cb043;
  color: #6cb043;
  margin: 5px 0;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;

  ${props => props.primary && css`
    font-size: 0.8em;
    font-weight: bold;
    padding: 1em 7em;
  `}

  ${props => props.secondary && css`
    background: #8DBD53;
    color: white;
    font-size: 0.8em;
    padding: 1em 7em;
  `}

  ${props => props.tertiary && css`
    font-size: 0.8em;
    padding: 0.45em 1em;
  `}

  ${props => props.withoutBorder && css`
    background: none;
    color: black;
    font-size: 0.8em;
    border: none;
    padding: 0;
    margin: 0;
  `}

  ${props => props.save && css`
    background: #8DBD53;
    color: white;
    font-size: 1.1em;
    padding: 0.5em 2em;
    width: 12em;
  `}

  ${props => props.discard && css`
    color: #8DBD53;
    font-size: 1.1em;
    padding: 0.8em 2em;
    font-size: 0.8em;
    width: 12em;
  `}
`;

export default StyledButton;
