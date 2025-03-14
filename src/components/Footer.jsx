import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const FooterContainer = styled.footer`
  position: relative;
  padding: 4rem 2rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(0, 100, 255, 0.3);
  margin-top: 4rem;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 100, 255, 0.5),
      transparent
    );
    filter: blur(1px);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #fff, #0066ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterLink = styled(motion.a)`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0066ff;
    text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #0066ff;
      transform: translateY(-2px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Company</h3>
          <FooterLink href="#" whileHover={{ x: 5 }}>About Us</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Careers</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Press</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Blog</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <FooterLink href="#" whileHover={{ x: 5 }}>Terms & Conditions</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Privacy Policy</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Cookie Policy</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>GDPR</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <FooterLink href="#" whileHover={{ x: 5 }}>Help Center</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Contact Us</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Status</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Security</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <FooterLink href="#" whileHover={{ x: 5 }}>Community</FooterLink>
          <FooterLink href="#" whileHover={{ x: 5 }}>Newsletter</FooterLink>
          <SocialLinks>
            <motion.a href="#" whileHover={{ y: -2 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -2 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -2 }}>
              <FaDiscord />
            </motion.a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} EternaVaultX. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;