import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import { useState } from "react";
import { Input } from "antd";

const LoginPage = () => {
  const [registration, setRegistration] = useState(false);
  let auth = {};
  if ((auth.length = 2)) {
    let login = "login";
  }
  if ((auth.length = 3)) {
    let cadastrar = "cadastrar";
  }

  return (
    <div className="loginpage-container">
      <div className="auth-container">
        <img src={logo} width="250px" height="auto" />
        <div className="auths-container">
          {registration && (
            <div className="auths">
              <p>Nome:</p>
              <input placeholder="Nome" type="text" value={auth.name} />
            </div>
          )}
          <div className="auths">
            <p>Email:</p>
            <input placeholder="Email" type="text" value={auth.email} />
          </div>
          <div className="auths">
            <p>Senha:</p>
            <input placeholder="Senha" type="password" value={auth.password} />
          </div>
          <div className="bottom-options">
            <div
              className="login button"
              onClick={() => {
                setRegistration(false);
              }}
            >
              <p>Login</p>
            </div>

            <div
              className="create button"
              onClick={() => {
                setRegistration(true);
              }}
            >
              <p>Criar conta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
