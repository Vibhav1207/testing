import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const LoginBox = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 100, 255, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 0 30px rgba(0, 100, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 100, 255, 0.8), transparent);
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #0066ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 100, 255, 0.3);
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
  border: 1px solid rgba(0, 100, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 100, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 100, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem;
  background: rgba(0, 100, 255, 0.8);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: rgba(0, 100, 255, 1);
    box-shadow: 0 0 20px rgba(0, 100, 255, 0.5);
  }
`;

const Link = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 1rem;

  &:hover {
    color: #0066ff;
    text-shadow: 0 0 10px rgba(0, 100, 255, 0.5);
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
  text-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = login(username, password);
    if (!result.success) {
      setError(result.error || 'Invalid credentials');
    } else {
      navigate('/');
    }
  };

  return (
    <PageContainer>
      <LoginBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Welcome Back</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </Button>
        </Form>
        <Link as="a" onClick={() => {}} whileHover={{ x: 5 }}>Forgot Password?</Link>
        <Link as="a" onClick={() => navigate('/signup')} whileHover={{ x: 5 }}>Don't have an account? Sign up</Link>
      </LoginBox>
    </PageContainer>
  );
};

export default Login;