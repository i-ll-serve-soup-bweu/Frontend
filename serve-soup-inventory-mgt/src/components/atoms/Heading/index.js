import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
  color: ${props => props.color};
  margin: 0;

  ${props => props.primary && css`
    font-size: 2.5em;
  `}

  ${props => props.secondary && css`
    font-size: 1.5em;
  `}

  ${props => props.tertiary && css`
    font-size: 1em;
  `}
`
export default StyledHeading;
