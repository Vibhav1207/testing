import React from 'react';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000;
  overflow: hidden;
  z-index: -1;
`;

const Background = () => {
  return <BackgroundContainer />;
};

export default Background;