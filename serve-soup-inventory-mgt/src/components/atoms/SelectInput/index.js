import styled, { css } from 'styled-components';

const SelectInput = styled.select`
  border: 0.5px solid grey;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  margin: 5px 0;
  height: 2.5em;
  background-color: #F1F1F1;
  font-size: 1em;

  ${props => props.medium && css`
    width: 8em;
  `}

  ${props => props.large && css`
    width: 15em;
  `}
`;

export default SelectInput;
