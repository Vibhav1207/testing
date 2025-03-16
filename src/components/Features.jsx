import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  position: relative;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(0, 100, 255, 0.1), transparent);
    transform: translateY(100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 100, 255, 0.6);
    box-shadow: 0 0 20px rgba(0, 100, 255, 0.3);

    &::before {
      transform: translateY(0);
    }
  }

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff, #00f, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 100, 255, 0.5);
`;

const features = [
  {
    title: 'Military-Grade Encryption',
    description: 'Your files are protected with the highest level of security protocols available.'
  },
  {
    title: 'Lightning-Fast Transfer',
    description: 'Experience blazing-fast upload and download speeds with our optimized infrastructure.'
  },
  {
    title: 'Smart Collaboration',
    description: 'Share and collaborate on files with team members in real-time with granular permissions.'
  },
  {
    title: 'Automated Backup',
    description: 'Never lose important data with our automated backup and version control system.'
  }
];

const Features = () => {
  return (
    <FeaturesSection>
      <SectionTitle>Powerful Features</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;