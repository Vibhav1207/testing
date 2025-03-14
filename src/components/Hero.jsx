import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 3;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  text-align: center;
  margin: 0;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 100, 255, 0.5);
  filter: drop-shadow(0 0 20px rgba(0, 100, 255, 0.3));

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 4rem);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
  margin: 2rem 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 100, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const ScrollingText = styled(motion.div)`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  padding: 1rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, black, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, black, transparent);
  }
`;

const ScrollingContent = styled(motion.div)`
  display: inline-block;
  white-space: nowrap;
  padding: 0 50px;
`;

const Hero = () => {
  const scrollingVariants = {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        EternaVaultX
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to the future of secure cloud storage. Experience lightning-fast
        uploads, military-grade encryption, and seamless file sharing - all with
        a stunning futuristic interface.
      </Description>
      <ScrollingText>
        <ScrollingContent
          variants={scrollingVariants}
          animate="animate"
        >
          🚀 Unlimited Storage • Quantum Encryption • AI-Powered Search • Real-time Collaboration • Automatic Backup • Cross-Platform Sync • 24/7 Support • 99.99% Uptime
        </ScrollingContent>
      </ScrollingText>
    </HeroContainer>
  );
};

export default Hero;