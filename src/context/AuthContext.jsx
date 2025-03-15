import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Test user credentials
    if (username === 'testuser' && password === 'password123') {
      const testUserData = {
        id: 'test-user-id',
        username: 'testuser',
        email: 'test@example.com',
        fullName: 'Test User'
      };
      setIsAuthenticated(true);
      setUser(testUserData);
      localStorage.setItem('user', JSON.stringify(testUserData));
      return { success: true };
    }

    // In a real app, this would be an API call
    const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = mockUsers.find(u => u.username === username);

    if (user && user.password === password) {
      const userData = {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName
      };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (userData) => {
    const { username, email } = userData;
    const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    if (mockUsers.some(u => u.username === username)) {
      return { success: false, error: 'Username already taken' };
    }
    if (mockUsers.some(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      ...userData
    };
    mockUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(mockUsers));

    return { success: true };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};