import { useEffect, useState } from "react";
import { getCurrentUser, loginUser, registerUser } from "../api/AuthApi";
import { AuthContext } from "./AuthContextObject";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchUser = async () => {
    try {
      if (!token) {
        setLoading(false);
        return;
      }

      const data = await getCurrentUser();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (formData) => {
    const data = await loginUser(formData);
    localStorage.setItem("token", data.token);
    setUser(data.user ?? data);
    return data;
  };

  const register = async (formData) => {
    const data = await registerUser(formData);
    localStorage.setItem("token", data.token);
    setUser(data.user ?? data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};