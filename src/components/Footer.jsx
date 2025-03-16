import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 20, 0.9);
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 80, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 80, 0, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.3;
    pointer-events: none;
    animation: gridFloat 20s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff4d00, transparent);
    box-shadow: 0 0 15px rgba(255, 80, 0, 0.7);
  }

  @keyframes gridFloat {
    0% { background-position: 0 0; }
    100% { background-position: 30px 30px; }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.8rem 0;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 80, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 80, 0, 0.3);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #ff4d00, transparent, #ff8533);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(255, 80, 0, 0.2);
      border-color: rgba(255, 80, 0, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(255, 80, 0, 0.3);

      &::before {
        opacity: 1;
        animation: borderGlow 2s ease-in-out infinite;
      }
    }

    @keyframes borderGlow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">API Documentation</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Follow us on social media</p>
          <SocialIcons>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} EternaVaultX. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;