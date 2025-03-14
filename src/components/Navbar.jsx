import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaCog } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(32, 32, 35, 0.95), rgba(22, 22, 25, 0.95));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(128, 128, 255, 0.2);
  border-radius: 30px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  box-shadow: 0 0 30px rgba(128, 128, 255, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, transparent 0%, rgba(128, 128, 255, 0.1) 50%, transparent 100%),
      linear-gradient(rgba(32, 32, 35, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32, 32, 35, 0.5) 1px, transparent 1px);
    background-size: 200% 100%, 20px 20px, 20px 20px;
    mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
    animation: shine 8s linear infinite;
    pointer-events: none;
  }

  @keyframes shine {
    to {
      background-position: -200% 0, 0 0, 0 0;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(45deg, #e0e0ff, #8080ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(128, 128, 255, 0.7);
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 100%;
    background: radial-gradient(circle, rgba(128, 128, 255, 0.2) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  
  &.active {
    background: rgba(0, 100, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 100, 255, 0.3);
  }

  &:hover {
    color: #0066ff;
    text-shadow: 0 0 5px rgba(0, 100, 255, 0.5);
  }
`;

const ProfileSection = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #0066ff, #00ffff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const AuthButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 100, 255, 0.2);
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 100, 255, 0.2);
    border-color: rgba(0, 100, 255, 0.4);
    box-shadow: 0 0 15px rgba(0, 100, 255, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 10px;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: 0 0 20px rgba(0, 100, 255, 0.2);
`;

const DropdownItem = styled(motion.div)`
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  
  &:hover {
    background: rgba(0, 100, 255, 0.2);
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavContainer>
      <Logo>EternaVaultX</Logo>
      <NavLinks>
        <NavLink href="#" className="active">Home</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">About</NavLink>
      </NavLinks>
      <ButtonGroup>
        <AuthButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </AuthButton>
        <AuthButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'rgba(0, 100, 255, 0.2)',
            borderColor: 'rgba(0, 100, 255, 0.4)'
          }}
        >
          Sign Up
        </AuthButton>
      </ButtonGroup>
      {isLoggedIn && (
        <ProfileSection
          onHoverStart={() => setShowDropdown(true)}
          onHoverEnd={() => setShowDropdown(false)}
        >
          <Avatar>
            <FaUser />
          </Avatar>
          {showDropdown && (
            <Dropdown
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DropdownItem>
                <FaCog />
                Settings
              </DropdownItem>
            </Dropdown>
          )}
        </ProfileSection>
      )}
    </NavContainer>
  );
};

export default Navbar;