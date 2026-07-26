import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { role: 'parent' | 'school' | 'admin', name: string, email: string }

  const login = (email, password, expectedRole) => {
    // Mock login logic with test credentials
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (expectedRole === 'admin' && email === 'admin@skulcredit.com' && password === 'admin123') {
          const u = { role: 'admin', name: 'System Admin', email };
          setUser(u);
          resolve(u);
        } else if (expectedRole === 'school' && email === 'school@test.com' && password === 'school123') {
          const u = { role: 'school', name: 'Foster Prime Schools', email };
          setUser(u);
          resolve(u);
        } else if (expectedRole === 'parent' && email === 'parent@test.com' && password === 'parent123') {
          const u = { role: 'parent', name: 'John Doe', email };
          setUser(u);
          resolve(u);
        } else {
          reject(new Error('Invalid test credentials'));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
