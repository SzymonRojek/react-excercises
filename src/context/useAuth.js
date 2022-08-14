import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorageValue } from "../hooks/useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const SECRET_KEY = "amigos"; // should be inside of the .env file in the future
  const [auth, setAuth] = useLocalStorageValue("isLogin", {
    isAuthenticated: false,
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
    });

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        SECRET_KEY,
        auth,
        setAuth,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error("AuthContext must be used within a Provider");
  }
  return context;
};

export default AuthContext;
