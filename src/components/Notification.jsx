import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  color: white;
  z-index: 1100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 100, 255, 0.2);

  &.success {
    border-color: rgba(0, 255, 100, 0.3);
    box-shadow: 0 0 20px rgba(0, 255, 100, 0.2);
  }

  &.error {
    border-color: rgba(255, 0, 0, 0.3);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
  }
`;

const Notification = ({ message, type = 'success', onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {message && (
        <NotificationContainer
          className={type}
          initial={{ opacity: 0, y: -50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -50, x: 50 }}
        >
          {message}
        </NotificationContainer>
      )}
    </AnimatePresence>
  );
};

export default Notification;