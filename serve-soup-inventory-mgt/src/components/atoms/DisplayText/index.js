import styled, { css } from 'styled-components';

const StyledDisplayText = styled.p`
  font-size: 14px;

  ${props => props.selected && css`
    font-weight: bold;
  `}
`;

export default StyledDisplayText;