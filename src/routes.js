import LoginPage from "./components/LoginPage";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CreateAccPage from "./components/CreatePage";
import ClientsPage from "./components/ClientsPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ClientsPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={CreateAccPage} path="/create" />
    </BrowserRouter>
  );
};

export default Routes;
