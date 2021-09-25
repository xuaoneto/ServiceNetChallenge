import React, { useEffect, useState } from "react";
import update from "../../images/update.svg";
import create from "../../images/create.svg";
import del from "../../images/delete.svg";
import logo from "../../images/logo.svg";
import InputMask from "react-input-mask";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  viaCEP,
  getClients,
  createClient,
  searchClients,
  updateClient,
} from "../Requests";

const SideMenu = () => {
  const [stateDelete, setStateDelete] = useState(false);
  const [stateCreate, setStateCreate] = useState(false);
  const [checkCep, setCheckCep] = useState(false);
  const [stateUpdate, setStateUpdate] = useState(false);

  useEffect(() => {
    if (checkCep) {
      async function endereco() {
        const resp = await viaCEP(document.getElementById("CEP").value);
        document.getElementById("Estado").value = resp.data.uf;
        document.getElementById("Pais").value = "Brasil";
        document.getElementById("Endereco").value = resp.data.logradouro;
        document.getElementById("Cidade").value = resp.data.localidade;
      }
      endereco();
    }
  }, [checkCep]);

  useEffect(() => {
    const deleteClient = () => {
      const buttons = document.getElementsByClassName("delete");
      if (stateDelete) {
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].style.display = "block";
        }
      } else {
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].style.display = "none";
        }
      }
    };
    deleteClient();
  }, [stateDelete]);
  function getRandomString(tamanho) {
    var string = "";
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < tamanho; i++) {
      string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return string;
  }
  async function SubmitChange(values) {
    values.id = document.getElementById("id-client").value;
    values.campo = document.getElementById("campo").value;
    values.alteracao = document.getElementById("alteracao").value;

    let changedobject = JSON.parse(
      `{"${values.campo}": "${values.alteracao}" }`
    );
    console.log(changedobject);
    const resp = await updateClient(values.id, changedobject);
    console.log(resp);
  }

  async function SubmitClient(values) {
    console.log(values);
    const resp = await getClients();
    values.id = getRandomString(4);
    values.Nome = document.getElementById("Nome").value;
    values.Telefone = document.getElementById("Telefone").value;
    values.Endereco = document.getElementById("Endereco").value;
    values.Numero = document.getElementById("Numero").value;
    values.Cidade = document.getElementById("Cidade").value;
    values.Estado = document.getElementById("Estado").value;
    values.Pais = document.getElementById("Pais").value;
    values.CEP = document.getElementById("CEP").value;

    console.log(values, "chegou1");
    const createC = await createClient(values);

    console.log(values, "chegou2");
    console.log(createC);
  }

  useEffect(() => {
    if (stateCreate) {
      document.getElementsByClassName("menu-split")[0].className =
        "menu-split active";
    } else {
      document.getElementsByClassName("menu-split")[0].className = "menu-split";
    }
    if (stateUpdate) {
      document.getElementsByClassName("menu-split update")[0].className =
        "menu-split update active";
    } else {
      document.getElementsByClassName("menu-split update")[0].className =
        "menu-split update";
    }
  }, [stateCreate, stateUpdate]);

  return (
    <div className="menu-container">
      {/* LOGO */}
      <div className="logo" href="#">
        <img src={logo} width="70px" height="auto" />
      </div>
      {/* Itens Menu */}
      <div className="menu">
        <div className="menu-item" id="create-client">
          <div className="menu-split">
            <Formik initialValues={{}} onSubmit={SubmitClient}>
              <Form className="auths-container">
                <div className="auths">
                  <p>Nome:</p>
                  <Field type="text" name="Nome" id="Nome" />
                </div>
                <div className="auths">
                  <p>CEP:</p>
                  <InputMask
                    mask="99999-999"
                    type="text"
                    name="CEP"
                    id="CEP"
                    onChange={() => {
                      const re = /^[0-9]{5}-[0-9]{3}$/;
                      setCheckCep(
                        re.test(document.getElementById("CEP").value)
                      );
                    }}
                  />
                </div>
                <div className="auths">
                  <p>Número:</p>
                  <Field type="text" name="Numero" id="Numero" />
                </div>
                <div className="auths">
                  <p>Cidade:</p>
                  <Field type="text" name="Cidade" id="Cidade" />
                </div>
                <div className="auths">
                  <p>Estado:</p>
                  <Field type="text" name="Estado" id="Estado" />
                </div>
                <div className="auths">
                  <p>País:</p>
                  <Field type="text" name="Pais" id="Pais" />
                </div>
                <div className="auths">
                  <p>Telefone:</p>
                  <InputMask
                    mask="(99)99999-9999"
                    type="text"
                    name="Telefone"
                    id="Telefone"
                  />
                </div>
                <div className="auths">
                  <p>Endereço:</p>
                  <Field type="text" name="Endereco" id="Endereco" />
                </div>
                <button type="submit" className="button create">
                  <p>Criar</p>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="styled-bar"></div>
          <img
            src={create}
            width="30px"
            height="auto"
            onClick={() => {
              setStateCreate(!stateCreate);
            }}
          />
        </div>

        <div className="menu-item" id="update-client">
          <div className="menu-split update">
            <Formik initialValues={{}} onSubmit={SubmitChange}>
              <Form className="auths-container">
                <div className="auths" id="id-container">
                  <p>id:</p>
                  <InputMask mask="****" type="text" name="id" id="id-client" />
                </div>
                <div className="auths" id="field-name-changes">
                  <p>
                    Nome do campo de alteração:{" "}
                    <nobr>Colocar sem acento e igual nome na tabela</nobr>
                  </p>
                  <Field type="text" name="campo" id="campo" />
                </div>
                <div className="auths" id="field-changes">
                  <p>Alteração:</p>
                  <Field type="text" name="alteracao" id="alteracao" />
                </div>
                <button type="submit" className="button create">
                  <p>Editar</p>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="styled-bar"></div>
          <img
            src={update}
            width="25px"
            height="auto"
            onClick={() => {
              setStateUpdate(!stateUpdate);
            }}
          />
        </div>

        <div
          className="menu-item"
          id="leaderboard"
          onClick={() => {
            setStateDelete(!stateDelete);
          }}
        >
          <div className="styled-bar"></div>
          <img src={del} width="23px" height="auto" />
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
