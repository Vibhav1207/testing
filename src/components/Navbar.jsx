import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-blue);
  border-radius: 50px;
  margin: 1rem 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px var(--neon-blue);
  animation: neonPulse 2s infinite;

  @keyframes neonPulse {
    0% { box-shadow: 0 0 20px var(--neon-blue); }
    50% { box-shadow: 0 0 30px var(--neon-blue); }
    100% { box-shadow: 0 0 20px var(--neon-blue); }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.5rem;

  img {
    height: 40px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--text-primary);
  }

  &.active {
    color: var(--text-primary);
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--neon-blue);
      box-shadow: 0 0 10px var(--neon-blue);
    }
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const AuthButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 1px solid var(--neon-blue);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--neon-blue);
    box-shadow: 0 0 15px var(--neon-blue);
  }
`;

const ProfileSection = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--neon-blue);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px var(--neon-blue);
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--neon-blue);
  border-radius: 10px;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: 0 0 20px var(--neon-blue);
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

const Navbar = ({ isLoggedIn, setShowAuth }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <NavContainer>
      <Logo>
        <img src="/logo.svg" alt="EternaVaultX" />
        EternaVaultX
      </Logo>

      <NavLinks>
        <NavLink href="#" className="active">Home</NavLink>
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">My Files</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Pricing</NavLink>
      </NavLinks>

      {isLoggedIn ? (
        <ProfileSection>
          <Avatar
            onClick={() => setShowDropdown(!showDropdown)}
          >
            JD
          </Avatar>
          {showDropdown && (
            <Dropdown
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DropdownItem href="#">Settings</DropdownItem>
              <DropdownItem href="#" onClick={handleLogout}>Logout</DropdownItem>
            </Dropdown>
          )}
        </ProfileSection>
      ) : (
        <AuthSection>
          <AuthButton onClick={() => setShowAuth(true)}>Login</AuthButton>
          <AuthButton onClick={() => setShowAuth(true)}>Signup</AuthButton>
        </AuthSection>
      )}
    </NavContainer>
  );
};

export default Navbar;