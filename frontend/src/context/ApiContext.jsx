import React, { createContext, useContext } from "react";
import ApiService from "../services/ApiService";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  ApiService.init(); // Initialize API globally

  return (
    <ApiContext.Provider value={ApiService}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
