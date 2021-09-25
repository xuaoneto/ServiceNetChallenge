import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { createNewUser, authEmail, getUsersLength } from "../Requests";

const CreateAccPage = () => {
  const history = useHistory();
  const [emailerror, setEmailError] = useState(false);

  async function handleSubmit(values) {
    const check = await authEmail(values);

    if (check.data[0] === undefined) {
      const id = await getUsersLength();
      console.log(id, "kaskdak");
      values.id = (id.data.length + 1).toString();
      console.log(values);
      const resp = await createNewUser(values);
      console.log(resp);
      history.push("/login");
    } else {
      setEmailError(true);
    }
  }
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
              {emailerror && <p className="login-error">Email já cadastrado</p>}
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
