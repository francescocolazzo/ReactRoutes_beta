import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div>
      <Outlet/>
      <Link to="./">SignIn</Link>
      <Link to="lostpass">LostPassword</Link>
      <Link to="registration"> Registration</Link>
    </div>
  );
};
