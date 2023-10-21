import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IfLogged } from "./IfLogged";

export const NavBar: React.FC = () => {
  function setActive({ isActive }: { isActive: boolean }) {
    return isActive ? "nav-link active" : "nav-link";
  }
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <Link to="login" className="navbar-brand">
            RR6 Demo
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="home" className={setActive} aria-current="page">
                Home
              </NavLink>
              <NavLink to="catalog" className={setActive} aria-current="page">
                Catalog
              </NavLink>
              <IfLogged>
                <NavLink to="admin" className={setActive} aria-current="page">
                  Admin
                </NavLink>
              </IfLogged>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
