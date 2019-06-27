import React from 'react';
import styled from 'styled-components';

import { AppNav } from '../../organisms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Main = styled.div`
  margin: 0 5rem;
  display: flex;
  justify-content: column;
`;

// const ContentArea = styled.div`
//   width: 700px;
// `;

const DashboardTemplate = ({ children }) => (
  <Wrapper>
    <AppNav loggedIn />
    <Main>
      {children}
    </Main>
  </Wrapper>
);

export default DashboardTemplate;
