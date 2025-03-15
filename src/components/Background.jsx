import React from 'react';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #000000, #0a0a2a);
  overflow: hidden;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    transform: rotate(45deg);
    animation: gridMove 150s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vh;
    background: radial-gradient(
      circle,
      rgba(0, 100, 255, 0.15) 0%,
      rgba(0, 100, 255, 0.1) 25%,
      transparent 70%
    );
    filter: blur(60px);
  }

  @keyframes gridMove {
    0% {
      transform: rotate(45deg) translateY(0);
    }
    100% {
      transform: rotate(45deg) translateY(-100px);
    }
  }
`;

const Background = () => {
  return <BackgroundContainer />;
};

export default Background;