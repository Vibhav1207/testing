import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import Auth from './components/Auth';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 100, 255, 0.1), transparent);
    pointer-events: none;
  }
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(0, 100, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 100, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 100, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 100, 255, 0.3);
  }

  &.active {
    background: rgba(0, 100, 255, 0.3);
    box-shadow: 0 0 15px rgba(0, 100, 255, 0.4);
  }
`;

const HeroSection = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  position: relative;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #fff, #00f, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(0, 100, 255, 0.5);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.8);
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <AppContainer>
      <GridBackground />
      <Navbar isLoggedIn={isLoggedIn} setShowAuth={setShowAuth}>
        <Logo>EternaVaultX</Logo>
        <NavLinks>
          <NavLink href="#" className="active">Home</NavLink>
          <NavLink href="#">Dashboard</NavLink>
          <NavLink href="#">My Files</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Pricing</NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink href="#">Login</NavLink>
              <NavLink href="#">Signup</NavLink>
            </>
          ) : (
            <NavLink href="#" style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://via.placeholder.com/40" alt="Profile" style={{ borderRadius: '50%' }} />
            </NavLink>
          )}
        </NavLinks>
      </Navbar>

      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>EternaVaultX</h1>
        <p>
          Welcome to the future of secure storage. Experience lightning-fast uploads,
          military-grade encryption, and seamless file sharing in our cutting-edge platform.
        </p>
      </HeroSection>
      <Features />
      <Subscription />
      <Footer />
      <AnimatePresence>
        {showAuth && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAuth(false)}
          >
            <div onClick={e => e.stopPropagation()}>
              <Auth setShowAuth={setShowAuth} setIsLoggedIn={setIsLoggedIn} />
            </div>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;