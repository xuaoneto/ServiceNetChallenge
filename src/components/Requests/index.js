import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";

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
const authToken = () => {
  const cookies = new Cookies();
  const resp = axios.get(
    `http://localhost:3500/users?token=${cookies.get("token")}`
  );
  return resp;
};

const createNewUser = (newAcc) => {
  function getRandomString(tamanho) {
    var string = "";
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < tamanho; i++) {
      string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return string;
  }
  newAcc.token = getRandomString(8);
  const resp = axios.post(`http://localhost:3500/users`, newAcc);
  return resp;
};

const viaCEP = (cep) => {
  const resp = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return resp;
};
const getUsersLength = () => {
  const resp = axios.get(`http://localhost:3500/users`);
  return resp;
};
const searchClients = (id) => {
  const resp = axios.get(`http://localhost:3500/clients/${id}`);
  return resp;
};
//CRUD
const createClient = (newClient) => {
  const resp = axios.post(`http://localhost:3500/clients`, newClient);
  return resp;
};
const getClients = () => {
  const resp = axios.get(`http://localhost:3500/clients`);
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
  return resp;
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
  authToken,
  getUsersLength,
  viaCEP,
  searchClients,
};
