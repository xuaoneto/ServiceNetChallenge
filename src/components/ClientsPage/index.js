import React, { useState } from "react";
import SideMenu from "../SideMenu";

const ClientsPage = () => {
  const [maps, setClientDel] = useState(false);
  let clients = [
    {
      Nome: "Marcos",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "João",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "Amarildo",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "Cristina",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "Maria",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "Maria",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
    {
      Nome: "Maria",
      Telefone: "83999999999",
      Endereco: "Rua mar azul",
      Numero: "476",
      Cidade: "Cabedelo",
      Estado: "Paraíba",
      Pais: "Brasil",
      CEP: "88888888",
    },
  ];
  return (
    <div class="general-container">
      <SideMenu />
      <div class="page-container">
        <h1 class="page-title">Clientes</h1>
        <div class="table-header">
          <div class="left-side">
            <p class="header-names">Usuário</p>
          </div>
          <div class="right-side">
            <p class="header-chall">CEP</p>
            <p class="header-ex">País</p>
          </div>
        </div>
        {/* <!-- Colocar map neste bloco --> */}
        {clients.map((item, index) => {
          return (
            <div key={index} id={index} class="table-item-container">
              <div class="position">
                <p class="position-number">{index + 1}</p>
              </div>
              <div class="player-container">
                <div class="avatar"></div>
                <div class="player-name-level">
                  <div class="player-name">{item.Nome}</div>
                  <div class="player-level">
                    <p>
                      Telefone:
                      <br />
                      {item.Telefone}
                    </p>
                    <p>
                      Endereço: {item.Endereco}
                      <br />
                      Número: {item.Numero}
                    </p>
                    <p>
                      Cidade:
                      <br />
                      {item.Cidade}
                    </p>
                    <p>
                      Estado:
                      <br />
                      {item.Estado}
                    </p>
                  </div>
                </div>
                <div class="challs-completes">
                  <p
                    class="blue"
                    onClick={() => {
                      setClientDel(!maps);
                    }}
                  >
                    CEP: {item.CEP}
                  </p>
                </div>
                <div class="xp">
                  <p class="blue">País: {item.Pais}</p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <!-- Final do bloco do map --> */}
      </div>
    </div>
  );
};
export default ClientsPage;
