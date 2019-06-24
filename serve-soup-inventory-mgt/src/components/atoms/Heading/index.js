import styled from 'styled-components';

const GenericHeader = styled.h1`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: bold;
`
export default GenericHeader;