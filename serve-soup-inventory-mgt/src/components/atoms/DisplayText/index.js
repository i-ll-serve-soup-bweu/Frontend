import styled, { css } from 'styled-components';

const StyledDisplayText = styled.p`
  font-size: 14px;

  ${props => props.selected && css`
    font-weight: bold;
  `}

  ${props => props.primary && css`
    font-size: 1.2em;
  `}
`;

export default StyledDisplayText;
