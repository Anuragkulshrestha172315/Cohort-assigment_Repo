import {createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) || []);
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("loginUser")) || null);

  console.log('registerUser', registerUser);
  console.log('login', login);
  
  return (
    <Auth.Provider
      value={{ registerUser, setRegisterUser, login, setLogin }}
    >
      {children}
    </Auth.Provider>
  );
};
