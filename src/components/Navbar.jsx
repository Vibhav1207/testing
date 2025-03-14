import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaCog } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1400px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  border: 1px solid rgba(0, 100, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 100, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(45deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
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
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
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
  background: linear-gradient(45deg, #333333, #666666);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled(motion.div)`
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <NavContainer>
      <Logo>EternaVaultX</Logo>
      <NavLinks>
        <NavLink href="#" whileHover={{ scale: 1.05 }}>Features</NavLink>
        <NavLink href="#" whileHover={{ scale: 1.05 }}>Pricing</NavLink>
        <NavLink href="#" whileHover={{ scale: 1.05 }}>Contact</NavLink>
        {!isAuthenticated ? (
          <>
            <NavLink href="/login" whileHover={{ scale: 1.05 }}>Login</NavLink>
            <NavLink href="/signup" whileHover={{ scale: 1.05 }}>Sign Up</NavLink>
          </>
        ) : (
          <ProfileSection>
            <Avatar onClick={() => setShowProfileMenu(!showProfileMenu)}>
              {user?.username?.[0]?.toUpperCase() || <FaUser />}
            </Avatar>
            {showProfileMenu && (
              <ProfileMenu
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <MenuItem href="/profile">
                  <FaUser /> Profile
                </MenuItem>
                <MenuItem href="/settings">
                  <FaCog /> Settings
                </MenuItem>
                <MenuItem href="#" onClick={logout}>
                  <FaSignOutAlt /> Logout
                </MenuItem>
              </ProfileMenu>
            )}
          </ProfileSection>
        )}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;