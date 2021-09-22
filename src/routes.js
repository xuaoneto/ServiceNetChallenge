import LoginPage from "./components/LoginPage";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginPage} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
