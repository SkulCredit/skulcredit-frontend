import React, { createContext, useContext, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { role: 'parent' | 'school' | 'admin', name: string, email: string }

  const login = async (email, password, expectedRole) => {
    try {
      const { user, accessToken } = await authService.login({ email, password });
      
      if (expectedRole && user.role !== expectedRole) {
         throw new Error(`Unauthorized. Please login through the ${user.role} portal.`);
      }

      localStorage.setItem('token', accessToken);
      setUser({ ...user, name: user.firstName ? `${user.firstName} ${user.lastName}` : user.schoolName || user.email });
      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Invalid credentials');
    }
  };

  const register = async (userData, role) => {
    try {
      const { user, accessToken } = await authService.register(userData, role);
      localStorage.setItem('token', accessToken);
      setUser({ ...user, name: user.firstName ? `${user.firstName} ${user.lastName}` : user.schoolName || user.email });
      return user;
    } catch (error) {
      // Return detailed Zod errors if available, otherwise just the message
      const errorMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.message || 'Registration failed';
      throw new Error(errorMsg);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
