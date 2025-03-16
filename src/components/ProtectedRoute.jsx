import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const RestrictedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  overflow: hidden;
`;

const MessageText = styled(motion.h2)`
  color: var(--neon-blue);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--neon-blue);
  animation: glow 2s ease-in-out infinite;

  @keyframes glow {
    0% { text-shadow: 0 0 10px var(--neon-blue); }
    50% { text-shadow: 0 0 20px var(--neon-blue), 0 0 30px var(--neon-blue); }
    100% { text-shadow: 0 0 10px var(--neon-blue); }
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 1rem;
  }
`;

const LoginButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  border: 2px solid var(--neon-blue);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px var(--neon-blue);
  box-shadow: 0 0 15px var(--neon-blue);

  &:hover {
    background: var(--neon-blue);
    box-shadow: 0 0 25px var(--neon-blue);
    transform: scale(1.05);
  }
`;

const ProtectedRoute = ({ isLoggedIn, children, setShowAuth }) => {
  if (!isLoggedIn) {
    return (
      <RestrictedContainer>
        <MessageText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Please log in to use the Dashboard
        </MessageText>
        <LoginButton
          onClick={() => setShowAuth(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </LoginButton>
      </RestrictedContainer>
    );
  }

  return children;
};

export default ProtectedRoute;