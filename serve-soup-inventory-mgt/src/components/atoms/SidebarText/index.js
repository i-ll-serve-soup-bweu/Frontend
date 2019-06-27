import React from 'react'
import styled, { css } from 'styled-components';

const StyledH5 = styled.h5`
  font-size: 16px;
  font-weight: 300;
  margin: 0;

  ${props => props.selected && css`
    font-weight: bold;
  `}
`;

const SideBarText = ({ text, selected }) => (
  <StyledH5 selected={selected}>{text}</StyledH5>
);

export default SideBarText;
