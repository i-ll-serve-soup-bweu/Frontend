import styled, { css } from 'styled-components';

const DisplayText = styled.p`
  font-size: 14px;

  ${props => props.selected && css`
    font-weight: bold;
  `}
`;

export default DisplayText;