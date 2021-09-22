import React from "react";
import logo from "../../images/logo.svg";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

const CreateAccPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios.post("http://localhost:8080/v1/api/create", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/login");
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    name: yup.string().required(),
  });

  return (
    <div className="loginpage-container">
      <div className="auth-container">
        <img src={logo} width="250px" height="auto" />
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="auths-container">
            <div className="auths">
              <p>Nome:</p>
              <Field
                className="field"
                placeholder="Nome"
                type="text"
                id="nome"
                name="name"
              />
              <ErrorMessage
                component="span"
                name="name"
                className="Login-Error"
              />
            </div>

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
            </div>

            <div className="bottom-options">
              <button
                type="submit"
                className="create button"
                style={{ margin: 0 }}
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
export default CreateAccPage;
