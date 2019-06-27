import styled from 'styled-components';

const StyledTableCell = styled.td`
  text-align: left;
  padding: 15px 0;
  font-size: 1.5em;

  @media (max-width: 760px) {
    padding-left: 0;
    font-size: 1em;
  }
`;

export default StyledTableCell;
