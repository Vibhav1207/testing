import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AuthContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: transparent;
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

const AuthBox = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--neon-blue), transparent, var(--neon-blue));
    border-radius: 22px;
    z-index: -1;
    animation: borderGlow 3s ease-in-out infinite;
  }

  @keyframes borderGlow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-shadow: 0 0 10px var(--neon-blue);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(var(--neon-blue-rgb), 0.3);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--neon-blue);
    box-shadow: 0 0 15px rgba(var(--neon-blue-rgb), 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--neon-blue);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(var(--neon-blue-rgb), 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-secondary);

  a {
    color: var(--neon-blue);
    text-decoration: none;
    font-weight: 500;
    margin-left: 0.5rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--neon-blue);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const ErrorMessage = styled(motion.div)`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Test login logic
      if (formData.username === 'testuser' && formData.password === 'password123') {
        // Simulate successful login
        window.location.href = '/';
      } else {
        setError('Invalid username or password');
      }
    } else {
      // Signup validation
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // Simulate successful signup
      setIsLogin(true);
      setFormData({
        ...formData,
        fullName: '',
        email: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <AuthContainer>
      <AuthBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <InputGroup>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </>
          )}
          <InputGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          {!isLogin && (
            <InputGroup>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </InputGroup>
          )}
          {error && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </ErrorMessage>
          )}
          <SubmitButton type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </SubmitButton>
        </Form>
        <LinkText>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </a>
        </LinkText>
      </AuthBox>
    </AuthContainer>
  );
};

export default Auth;