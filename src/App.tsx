import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./common/NavBar";
import { MyRoutes } from "./common/Routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MyRoutes />
      <hr />
    </BrowserRouter>
  );
}

export default App;
