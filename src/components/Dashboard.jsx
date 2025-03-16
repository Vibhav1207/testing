import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHome, FaFileAlt, FaCog, FaSignOutAlt, FaUpload, FaBars, FaUser, FaLock, FaFilePdf, FaFileImage, FaFileExcel } from 'react-icons/fa';

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
  transition: all 0.3s ease;
  box-shadow: 5px 0 15px rgba(var(--neon-blue-rgb), 0.2);
  z-index: 2;

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 250px;
    transform: translateX(${props => props.isMobileMenuOpen ? '0' : '-100%'});
  }
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

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 3rem;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
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
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(var(--neon-blue-rgb), 0.3);
  border-radius: 8px;
  padding: 0.5rem;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--neon-blue-rgb), 0.1);
    color: var(--neon-blue);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--neon-blue);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const FileTypeIcon = styled.div`
  font-size: 1.5rem;
  color: var(--neon-blue);
`;

const UnlockTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--neon-blue);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
  }
`;

const Dashboard = ({ username, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [unlockDate, setUnlockDate] = useState('');
  const [storageUsed] = useState(5.2);
  const [storageLimit] = useState(10);
  const [currentPlan] = useState('Premium');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement file upload logic here
    console.log('Uploading file:', selectedFile);
    console.log('Unlock date:', unlockDate);
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf />;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <FaFileImage />;
      case 'xlsx':
        return <FaFileExcel />;
      default:
        return <FaFileAlt />;
    }
  };

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
        isMobileMenuOpen={isMobileMenuOpen}
        initial={false}
        animate={{
          width: isCollapsed && !isMobileMenuOpen ? '80px' : '250px'
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