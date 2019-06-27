import styled from 'styled-components';

const StyledTableHeader = styled.th`
  text-align: left;
  padding: 15px 0;
  font-weight: 100;
  font-size: 0.9rem;
  color: #909090;

  @media (max-width: 760px) {
    width: 20px;
  }
`;

export default StyledTableHeader;
