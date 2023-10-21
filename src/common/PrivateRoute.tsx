import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  redirectTo: string;
  element: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectTo,
  element,
}) => {
  const isLogged: string | null = localStorage.getItem("isLogged");
  return isLogged === 'true' ? (
    <div>{element}</div>
  ) : (
    <Navigate to={redirectTo} />
  );
};
