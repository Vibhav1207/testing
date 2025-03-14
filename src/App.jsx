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
  background-image: 
    linear-gradient(0deg, transparent 24%, rgba(32, 41, 65, 0.3) 25%, rgba(32, 41, 65, 0.3) 26%, transparent 27%, transparent 74%, rgba(32, 41, 65, 0.3) 75%, rgba(32, 41, 65, 0.3) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(32, 41, 65, 0.3) 25%, rgba(32, 41, 65, 0.3) 26%, transparent 27%, transparent 74%, rgba(32, 41, 65, 0.3) 75%, rgba(32, 41, 65, 0.3) 76%, transparent 77%, transparent);
  background-size: 50px 50px;
  color: white;
  position: relative;
  overflow-x: hidden;
  padding: 0 1rem;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }
`;



function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Features />
      <Subscription />
    </AppContainer>
  );
}

export default App;