import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider =m ({ children }) => {
  const [isAuthenticated, setISAuthenticated] = useState(false);

  const login = async (username, password) => {

  }
}
