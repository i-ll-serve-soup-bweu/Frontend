import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  border: 0.5px solid black;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  margin: 5px 0;
  height: 2.5em;
  font-size: 1em;

  ${props => props.heading && css`
    border: 0;
    display: inline-block;
    border-bottom: 0.2px solid grey;
    font-size: 1.7rem;
    font-weight: bold;
    outline: none;
    border-radius: 0;
    width: 200px;
    color: black;
    padding: 0;
    height: 1.2em;
  `}

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
    width: 17em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.small && css`
    width: 3em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.medium && css`
    width:8em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.large && css`
    width: 10em;

    :hover {
      border: 0.5px solid grey;
    }
  `}

  ${props => props.disabled && css`
    background: #e9e9e9;
    cursor: not-allowed;
  `}
`
export default StyledInput;
