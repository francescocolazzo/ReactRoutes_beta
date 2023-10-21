import React, { lazy, Suspense } from "react";
import { Link, Navigate, Route, Routes, useRoutes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { Admin } from "../../pages/admin/Admin";
//import Catalog  from "../../pages/catalog/model/Catalog";
import { PhotoDetails } from "../../pages/catalog/model/PhotoDetails";
import { Home } from "../../pages/home/Home";
import { Login } from "../../pages/login/Login";
import { LostPass } from "../../pages/login/pages/LostPass";
import { Registration } from "../../pages/login/pages/Registration";
import { SignIn } from "../../pages/login/pages/SignIn";

export const MyRoutes: React.FC = () => {
  const LazyCatalog = lazy(() => import("../../pages/catalog/model/Catalog"));

  const Catalog = () => {
    return (
      <Suspense fallback={<div>...Loading</div>}>
        <LazyCatalog />
      </Suspense>
    );
  };
  return useRoutes([
    {
      path: "login",
      element: <Login />,
      children: [
        { index: true, element: <SignIn /> },
        { path: "lostpass", element: <LostPass /> },
        { path: "registration", element: <Registration /> },
      ],
    },
    { path: "home", element: <Home /> },
    {
      path: "admin",
      element: <PrivateRoute redirectTo="/login" element={<Admin />} />,
    },
    { path: "catalog", element: <Catalog /> },
    { path: "catalog/:id", element: <PhotoDetails /> },
    { path: "/", element: <Navigate to="home" /> },
    {
      path: "*",
      element: (
        <div>
          <p>This page does not exist</p>
          <Link to="/"> Go to home</Link>
        </div>
      ),
    },
  ]);

  /** 
   * return (
    <Routes>
      <Route path="login" element={<Login />}>
        <Route index element={<SignIn />} />
        <Route path="lostpass" element={<LostPass />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route
        path="admin"
        element={<PrivateRoute redirectTo="/login" element={<Admin />} />}
      />
      <Route path="catalog" element={<Catalog />} />
      <Route path="catalog/:id" element={<PhotoDetails />} />
      <Route path="/" element={<Navigate to="home" />} />
      <Route
        path="*"
        element={
          <div>
            <p>This page does not exist</p>
            <Link to="/"> Go to home</Link>
          </div>
        }
      />
    </Routes>
  ); */
};
