import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaCog } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 30px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0, 100, 255, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
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

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavContainer>
      <Logo>EternaVaultX</Logo>
      <NavLinks>
        <NavLink href="#" className="active">Home</NavLink>
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">My Files</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Pricing</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink href="#">Login</NavLink>
            <NavLink href="#">Signup</NavLink>
          </>
        )}
      </NavLinks>
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