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
  margin: 20px auto;
`;

const ExternalTemplate = ({ children }) => (
  <Wrapper>
    <AppNav />
    <Main>
      {children}
    </Main>
  </Wrapper>
);

export default ExternalTemplate;
