import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  margin-top: 7rem;
`;

export default ({ text }) => (
  <LoaderContainer>
    <Loader
      type="TailSpin"
      color="#8CBD53"
      height="70"
      width="70"
    />
    <p style={{ color: '#8CBD53' }}>{text ? `${text}` : 'loading...'}</p>
  </LoaderContainer>
);
