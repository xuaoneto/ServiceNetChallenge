import axios from "axios";
import React from "react";
import { history } from "../../history";
import { useCookies } from "react-cookie";

//Sei que deveriam algumas coisas serem feitas em um back-end, mas o tempo de 3 dias que me foi proposto foi muito curto

const authEmail = (values) => {
  console.log(values);
  const resp = axios.get(`http://localhost:3500/users?email=${values.email}`);
  return resp;
};
const authPass = (values) => {
  const resp = axios.get(
    `http://localhost:3500/users?password=${values.password}`
  );
  return resp;
};

const createNewUser = (newAcc) => {
  const resp = axios.post(`http://localhost:3500/users`, newAcc);
  if (resp) {
    console.log(resp);
    console.log("conta cadastrada com sucesso");
    history.push("/login");
  }
};

//CRUD
const createClient = (newClient) => {
  const resp = axios.post(`http://localhost:3500/clients`, newClient);
  if (resp) {
    console.log(resp);
    console.log("Cliente cadastrado com sucesso");
  }
};
const getClients = () => {
  const resp = axios.get(`http://localhost:3500/clients`);
  console.log(resp);
  return resp;
};
const updateClient = (id, updated) => {
  const resp = axios.patch(`http://localhost:3500/clients/${id}`, updated);
  if (resp) {
    console.log(resp);
    console.log("Cliente atualizado com sucesso");
  }
};
const deleteClient = (id) => {
  const resp = axios.delete(`http://localhost:3500/clients/${id}`);
  if (resp) {
    console.log(resp);
    console.log("Cliente deletado com sucesso");
  }
};
//FIM do CRUD de clientes

export {
  authEmail,
  authPass,
  createClient,
  getClients,
  updateClient,
  deleteClient,
  createNewUser,
};
