import { createContext, useContext, useEffect, useState } from "react";
import { getToken, getUser, removeToken, removeUser, setToken, setUser } from "../utils/token";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setAuthUser] = useState(() => getUser());
  const [token, setAuthToken] = useState(() => getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const login = (userData, authToken) => {
    setAuthUser(userData);
    setAuthToken(authToken);
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    setAuthUser(null);
    setAuthToken(null);
    removeToken();
    removeUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // eslint-disable-line react-refresh/only-export-components