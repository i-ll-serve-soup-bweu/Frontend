import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0.5px solid #6cb043;
  color: #6cb043;
  margin: 5px 0;
  padding: 0.25em 1em;

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
`
export default StyledButton;
