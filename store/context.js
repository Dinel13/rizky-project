import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const login = (token) => {
    setToken(token);
    window.localStorage.setItem("grert4rt", token);
  };

  const logout = () => {
    setToken(null);
    Cookies.remove("grert4rt");
    window.localStorage.removeItem("grert4rt");
  };

  const value = { token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
