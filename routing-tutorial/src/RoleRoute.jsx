import React from "react";
import { Navigate } from "react-router-dom";

const RoleRoute = ({ children, role, requiredRole }) => {
  if (!role) {
    return <Navigate to="/login" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleRoute;
