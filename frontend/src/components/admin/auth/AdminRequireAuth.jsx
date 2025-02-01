import React, { useContext } from "react";
import { useApi } from "../../../context/ApiContext.jsx";
import { Navigate } from "react-router-dom";

export const AdminRequireAuth = ({ children }) => {
  const { user } = useApi();
  if (!user) {
    return <Navigate to={`/admin/login`} />;
  }
  return children;
};
