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