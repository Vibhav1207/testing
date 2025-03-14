import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Subscription from './components/Subscription';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: white;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at center, rgba(0, 100, 255, 0.2) 0%, transparent 70%),
      linear-gradient(transparent 0%, rgba(0, 100, 255, 0.15) 50%, transparent 100%),
      linear-gradient(90deg, transparent 0%, rgba(0, 100, 255, 0.15) 50%, transparent 100%),
      linear-gradient(rgba(0, 100, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 100, 255, 0.1) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 100% 100%, 20px 20px, 20px 20px;
    pointer-events: none;
    z-index: 1;
  }
`;

const NeonGlow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 30vw;
  pointer-events: none;
  z-index: 2;

  &.left {
    left: 0;
    background: radial-gradient(
      circle at left,
      rgba(0, 100, 255, 0.15),
      transparent 70%
    );
  }

  &.right {
    right: 0;
    background: radial-gradient(
      circle at right,
      rgba(0, 100, 255, 0.15),
      transparent 70%
    );
  }
`;

function App() {
  return (
    <AppContainer>
      <NeonGlow className="left" />
      <NeonGlow className="right" />
      <Navbar />
      <Hero />
      <Features />
      <Subscription />
    </AppContainer>
  );
}

export default App;