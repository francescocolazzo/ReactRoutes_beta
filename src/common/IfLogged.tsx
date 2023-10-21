import React from "react";

interface IfLoggedProps {
  children: any;
}

export const IfLogged: React.FC<IfLoggedProps> = ({children}) => {
  const isLogged: string | null = localStorage.getItem("isLogged");
  return isLogged === "true" ? <>{children}</> : null;
};
