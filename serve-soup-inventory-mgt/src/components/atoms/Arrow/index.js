import styled, { css } from 'styled-components';

const Arrow = styled.i`
  border: solid #757575;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 6px;
  cursor: pointer;

  ${props => props.right && css`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  `}
  ${props => props.left && css`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    padding: 4px;
  `}
`;

export default Arrow;
