import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FiHome, FiFolder, FiBarChart2, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';

const DashboardContainer = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  margin: 1rem 2rem;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    margin: 1rem;
    flex-direction: column;
    height: auto;
  }
`;

const Sidebar = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-blue);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: ${props => props.collapsed ? '80px' : '250px'};
  box-shadow: 0 0 20px var(--neon-blue);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: ${props => props.collapsed ? '-80px' : '0'};
    height: 100vh;
    z-index: 100;
  }
`;

const SidebarLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.8rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
    min-width: 24px;
  }

  &.active {
    color: var(--text-primary);
    background: rgba(var(--neon-blue-rgb), 0.1);
    box-shadow: 0 0 10px var(--neon-blue);
  }

  &:hover {
    color: var(--text-primary);
    transform: translateX(5px);
  }

  span {
    display: ${props => props.collapsed ? 'none' : 'block'};
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-blue);
  border-radius: 20px;
  box-shadow: 0 0 20px var(--neon-blue);
  overflow-y: auto;
`;

const WelcomeMessage = styled(motion.h1)`
  color: var(--text-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px var(--neon-blue);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--neon-blue);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0 15px rgba(var(--neon-blue-rgb), 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px var(--neon-blue);
  }

  h3 {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-primary);
    font-size: 2rem;
    font-weight: 600;
    text-shadow: 0 0 5px var(--neon-blue);
  }
`;

const UploadSection = styled.div`
  margin-bottom: 3rem;
`;

const UploadButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--neon-blue);
  border-radius: 30px;
  color: var(--text-primary);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(var(--neon-blue-rgb), 0.3);

  &:hover {
    background: var(--neon-blue);
    box-shadow: 0 0 25px var(--neon-blue);
  }
`;

const ActivityTable = styled.div`
  border: 1px solid var(--neon-blue);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(var(--neon-blue-rgb), 0.3);

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(var(--neon-blue-rgb), 0.2);
    }

    th {
      background: rgba(var(--neon-blue-rgb), 0.1);
      color: var(--text-primary);
      font-weight: 600;
    }

    td {
      color: var(--text-secondary);
    }

    tr:hover td {
      color: var(--text-primary);
      background: rgba(var(--neon-blue-rgb), 0.05);
    }
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  position: fixed;
  top: 90px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--neon-blue);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 101;
  color: var(--text-primary);
  box-shadow: 0 0 15px var(--neon-blue);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Dashboard = ({ username }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const dummyStats = [
    { title: 'Total Files', value: '128' },
    { title: 'Storage Used', value: '2.4 GB' },
    { title: 'Recent Activity', value: '24' },
    { title: 'Shared Files', value: '15' }
  ];

  const dummyActivity = [
    { action: 'File Upload', file: 'project_report.pdf', time: '2 hours ago' },
    { action: 'File Share', file: 'meeting_notes.doc', time: '5 hours ago' },
    { action: 'File Delete', file: 'old_backup.zip', time: '1 day ago' },
  ];

  return (
    <DashboardContainer>
      <Sidebar collapsed={sidebarCollapsed}>
        <SidebarLink href="#" className="active" collapsed={sidebarCollapsed}>
          <FiHome />
          <span>Dashboard</span>
        </SidebarLink>
        <SidebarLink href="#" collapsed={sidebarCollapsed}>
          <FiFolder />
          <span>My Files</span>
        </SidebarLink>
        <SidebarLink href="#" collapsed={sidebarCollapsed}>
          <FiBarChart2 />
          <span>Analytics</span>
        </SidebarLink>
        <SidebarLink href="#" collapsed={sidebarCollapsed}>
          <FiSettings />
          <span>Settings</span>
        </SidebarLink>
        <SidebarLink href="#" collapsed={sidebarCollapsed}>
          <FiLogOut />
          <span>Logout</span>
        </SidebarLink>
      </Sidebar>

      <MenuButton
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMenu size={24} />
      </MenuButton>

      <MainContent>
        <WelcomeMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, {username}!
        </WelcomeMessage>

        <StatsGrid>
          {dummyStats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </StatCard>
          ))}
        </StatsGrid>

        <UploadSection>
          <UploadButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upload New File
          </UploadButton>
        </UploadSection>

        <ActivityTable>
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>File</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {dummyActivity.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.action}</td>
                  <td>{activity.file}</td>
                  <td>{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ActivityTable>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;