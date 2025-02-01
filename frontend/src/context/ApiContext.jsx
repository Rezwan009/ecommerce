import React, { createContext, useContext, useState } from "react";
import ApiService from "../services/ApiService";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // Initialize API globally
  ApiService.init();
  // State for user info and login/logout methods
  const adminInfo = localStorage.getItem("adminInfo");
  const [user, setUser] = useState(adminInfo);

  const login = (data) => {
    setUser(data);
    localStorage.setItem("adminInfo", JSON.stringify(data));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminInfo");
  };

  return (
    <ApiContext.Provider value={{ user, login, logout, ApiService }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
