import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedAuth = localStorage.getItem('isLoggedIn');
    return savedAuth === 'true';
  });
  const [showAuth, setShowAuth] = useState(false);
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('username', username);
  }, [isLoggedIn, username]);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <Router>
      <AppContainer>
        <GridBackground />
        <Navbar isLoggedIn={isLoggedIn} setShowAuth={setShowAuth} username={username} />

        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard username={username} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <AnimatePresence>
          {showAuth && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuth(false)}
            >
              <div onClick={e => e.stopPropagation()}>
                <Auth setShowAuth={setShowAuth} onLogin={handleLogin} />
              </div>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </AppContainer>
    </Router>
  );
}

export default App;