import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBolt, FaCloud, FaLock } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  position: relative;
  z-index: 3;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 100, 255, 0.3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 100, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 100, 255, 0.8);
    box-shadow: 0 0 30px rgba(0, 100, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #0066ff;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(0, 100, 255, 0.5));
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Military-Grade Security",
      description: "Your data is protected with the latest encryption technology and security protocols."
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      description: "Experience blazing-fast upload and download speeds with our optimized infrastructure."
    },
    {
      icon: <FaCloud />,
      title: "Unlimited Storage",
      description: "Store all your files without worrying about space limitations or additional costs."
    },
    {
      icon: <FaLock />,
      title: "Private Sharing",
      description: "Share files securely with customizable access controls and expiration dates."
    }
  ];

  return (
    <FeaturesContainer>
      <Title>Why Choose EternaVaultX?</Title>
      <Grid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}  
      </Grid>
    </FeaturesContainer>
  );
};

export default Features;