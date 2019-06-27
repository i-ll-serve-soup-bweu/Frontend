import styled, { css } from 'styled-components';

const SelectInput = styled.select`
  border: 0.5px solid grey;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  margin: 5px 0;

  ${props => props.medium && css`
    height: 2em;
    width: 8em; 
  `}
`;

export default SelectInput;
