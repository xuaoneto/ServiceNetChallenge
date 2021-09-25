import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { authEmail, authPass } from "../Requests";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const cookies = new Cookies();

  const [loginerror, setError] = useState(false);
  let token = {};
  const createAcc = () => {
    history.push("/create");
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  function Submit(values) {
    async function auths() {
      const checkemail = await authEmail(values);
      const checkpass = await authPass(values);
      console.log(checkemail, checkpass);
      if (
        (checkemail.data[0] != undefined) &
        (checkpass.data[0] != undefined)
      ) {
        if (
          checkemail.data[0].token ===
          checkpass.data.find((pass) => pass.email === checkemail.data[0].email)
            .token
        ) {
          cookies.set("token", checkemail.data[0].token);
          setError(false);
          history.push("/");
        }
      } else {
        setError(true);
      }
    }
    auths();
  }

  return (
    <div className="loginpage-container">
      <div className="auth-container">
        <img src={logo} width="250px" height="auto" />
        <Formik
          initialValues={{}}
          onSubmit={Submit}
          validationSchema={validations}
        >
          <Form className="auths-container">
            <div className="auths">
              <p>Email:</p>
              <Field
                className="field"
                placeholder="Email"
                type="text"
                id="email"
                name="email"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error"
              />
            </div>

            <div className="auths">
              <p>Senha:</p>
              <Field
                className="field"
                placeholder="Senha"
                type="password"
                id="pass"
                name="password"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
              {loginerror && (
                <p className="login-error">Login ou senha incorretos</p>
              )}
            </div>

            <div className="bottom-options">
              <button type="submit" className="login button">
                <p>Login</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  createAcc();
                }}
                className="create button"
              >
                <p>Criar conta</p>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default LoginPage;
