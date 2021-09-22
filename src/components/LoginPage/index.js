import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";

const LoginPage = () => {
  const [registration, setRegistration] = useState(false);
  const [auth, setAuth] = useState({});
  const setAuthValues = () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if (registration) {
      let name = document.getElementById("nome").value;
      setAuth({ name, pass, email });
    } else {
      setAuth({ pass, email });
    }
  };
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="loginpage-container">
      <div className="auth-container">
        <img src={logo} width="250px" height="auto" />
        <div className="auths-container">
          {registration && (
            <div className="auths">
              <p>Nome:</p>
              <input placeholder="Nome" type="text" id="nome" />
            </div>
          )}

          <div className="auths">
            <p>Email:</p>
            <input placeholder="Email" type="text" id="email" />
          </div>

          <div className="auths">
            <p>Senha:</p>
            <input placeholder="Senha" type="password" id="pass" />
          </div>

          <div className="bottom-options">
            <div
              className="login button"
              onClick={() => {
                setRegistration(false);
                setAuthValues();
              }}
            >
              <p>Login</p>
            </div>

            <div
              className="create button"
              onClick={() => {
                setRegistration(true);
                setAuthValues();
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
