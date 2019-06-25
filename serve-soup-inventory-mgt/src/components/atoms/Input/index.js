import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  border: 0.5px solid black;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  margin: 5px 0;

  &[type=checkbox], &[type=radio] {
    color: red;
    display: inline-block;
    border-radius: 0;
    width: auto;
    height: auto;
    cursor: pointer;
    height: 1.2em;
    width: 1.2em;
    border: 1px solid black;

    :disabled {
      background-color: darkgrey;
    }
  }

  ${props => props.register && css`
    height: 30px;
    width: 17em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.small && css`
    height: 1.8em;
    width: 1.7em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.medium && css`
    height: 1.8em;
    width: 5em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.large && css`
    height: 1.8em;
    width: 10em;

    :hover {
      border: 0.5px solid grey;
    }
  `}
`
export default StyledInput;
