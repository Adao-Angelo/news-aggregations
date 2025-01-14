import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import type { GitHubUserType } from "../types";

interface AuthContextType {
  user: GitHubUserType | null;
  login: () => void;
  logout: () => void;
}

const apiUrl = "https://github-auth-server-ctzu.onrender.com";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<GitHubUserType | null>(null);

  const login = () => {
    window.location.href = `${apiUrl}/api/auth/github`;
  };

  const logout = () => {
    setUser(null);
    axios.get(`${apiUrl}/api/auth/logout`, { withCredentials: true });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/auth/user`, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
