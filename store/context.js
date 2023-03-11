import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [needLogin, setNeedLogin] = useState(false);

  const login = (token) => {
    setToken(token);
    setNeedLogin(false);
    window.localStorage.setItem("grert4rt", token);
  };

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("grert4rt");
  };

  const value = { token, login, logout, needLogin, setNeedLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
