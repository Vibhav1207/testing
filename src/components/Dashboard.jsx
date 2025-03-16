import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHome, FaFileAlt, FaCog, FaSignOutAlt, FaUpload, FaBars } from 'react-icons/fa';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 100, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 100, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.5;
    pointer-events: none;
    animation: gridFloat 20s linear infinite;
  }

  @keyframes gridFloat {
    0% { background-position: 0 0; }
    100% { background-position: 30px 30px; }
  }
`;

const Sidebar = styled(motion.div)`
  width: ${props => props.isCollapsed ? '80px' : '250px'};
  background: rgba(0, 0, 0, 0.8);
  border-right: 1px solid rgba(var(--neon-blue-rgb), 0.3);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 5px 0 15px rgba(var(--neon-blue-rgb), 0.2);
  z-index: 2;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(var(--neon-blue-rgb), 0.1);
    color: var(--neon-blue);
  }

  svg {
    font-size: 1.5rem;
    min-width: 1.5rem;
  }

  span {
    margin-left: 1rem;
    opacity: ${props => props.isCollapsed ? 0 : 1};
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const WelcomeText = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--neon-blue);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(var(--neon-blue-rgb), 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(var(--neon-blue-rgb), 0.3);
  }

  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
    color: var(--neon-blue);
    text-shadow: 0 0 10px var(--neon-blue);
  }
`;

const UploadSection = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(var(--neon-blue-rgb), 0.3);
  margin-bottom: 2rem;
`;

const UploadButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid var(--neon-blue);
  border-radius: 30px;
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--neon-blue);
    box-shadow: 0 0 20px rgba(var(--neon-blue-rgb), 0.5);
  }
`;

const ActivityTable = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(var(--neon-blue-rgb), 0.3);

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      color: var(--text-primary);
      border-bottom: 1px solid rgba(var(--neon-blue-rgb), 0.3);
    }

    th {
      color: var(--neon-blue);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Dashboard = ({ username, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <DashboardContainer>
      <MenuButton onClick={toggleMobileMenu}>
        <FaBars />
      </MenuButton>

      <Sidebar
        isCollapsed={isCollapsed}
        initial={false}
        animate={{
          width: isMobileMenuOpen ? '250px' : (isCollapsed ? '80px' : '250px'),
          x: isMobileMenuOpen ? 0 : (window.innerWidth <= 768 ? '-100%' : 0)
        }}
      >
        <NavItem isCollapsed={isCollapsed} isActive={true}>
          <FaHome />
          <span>Dashboard</span>
        </NavItem>
        <NavItem isCollapsed={isCollapsed}>
          <FaFileAlt />
          <span>My Files</span>
        </NavItem>
        <NavItem isCollapsed={isCollapsed}>
          <FaUser />
          <span>Profile</span>
        </NavItem>
        <NavItem isCollapsed={isCollapsed}>
          <FaCog />
          <span>Settings</span>
        </NavItem>
        <NavItem isCollapsed={isCollapsed} onClick={onLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </NavItem>
      </Sidebar>

      <MainContent>
        <WelcomeText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, {username}!
        </WelcomeText>

        <StatsGrid>
          <StatCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>Storage Overview</h3>
            <p>{storageUsed.toFixed(1)} GB / {storageLimit} GB</p>
            <ProgressBar progress={(storageUsed / storageLimit) * 100} />
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>Current Plan</h3>
            <p>{currentPlan}</p>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>Recent Activity</h3>
            <p>12 Files</p>
          </StatCard>
        </StatsGrid>

        <UploadSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            File Upload & Encryption
          </h2>
          <FileInput
            type="file"
            id="file-upload"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <UploadButton
            as="label"
            htmlFor="file-upload"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            marginBottom
          >
            <FaUpload /> Choose File
          </UploadButton>
          {selectedFile && (
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Selected: {selectedFile.name}
            </p>
          )}
          <DateInput
            type="datetime-local"
            value={unlockDate}
            onChange={(e) => setUnlockDate(e.target.value)}
            placeholder="Select Unlock Date"
          />
          <UploadButton
            onClick={handleUpload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '1rem' }}
            disabled={!selectedFile || !unlockDate}
          >
            <FaLock /> Upload & Encrypt
          </UploadButton>
        </UploadSection>

        <ActivityTable
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Recent Activity
          </h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>File Name</th>
                <th>Date Uploaded</th>
                <th>Unlock Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FileTypeIcon>{getFileIcon('pdf')}</FileTypeIcon>
                </td>
                <td>document.pdf</td>
                <td>2023-10-15</td>
                <td>
                  <UnlockTime>
                    <FaLock /> 2 days remaining
                  </UnlockTime>
                </td>
              </tr>
              <tr>
                <td>
                  <FileTypeIcon>{getFileIcon('jpg')}</FileTypeIcon>
                </td>
                <td>image.jpg</td>
                <td>2023-10-14</td>
                <td>
                  <UnlockTime>
                    <FaLock /> 5 days remaining
                  </UnlockTime>
                </td>
              </tr>
              <tr>
                <td>
                  <FileTypeIcon>{getFileIcon('xlsx')}</FileTypeIcon>
                </td>
                <td>data.xlsx</td>
                <td>2023-10-13</td>
                <td>
                  <UnlockTime>
                    <FaLock /> 1 week remaining
                  </UnlockTime>
                </td>
              </tr>
            </tbody>
          </table>
        </ActivityTable>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;