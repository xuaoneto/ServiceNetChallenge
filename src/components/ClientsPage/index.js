import React, { useState, useEffect } from "react";
import SideMenu from "../SideMenu";
import { getClients } from "../Requests";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [maps, setClientDel] = useState((id) => {
    let element = document.getElementById(id);
  });
  useEffect(() => {
    async function allClients() {
      const clients = await getClients();
      setClients(clients.data);
    }
    allClients();
  }, [clients.data]);

  return (
    <div className="general-container">
      <SideMenu />
      <div className="page-container">
        <h1 className="page-title">Clientes</h1>
        <div className="table-header">
          <div className="left-side">
            <p className="header-pos">ID</p>
            <p className="header-names">Usuário</p>
          </div>
          <div className="right-side">
            <p className="header-chall">CEP</p>
            <p className="header-ex">País</p>
          </div>
        </div>

        {clients.map((item, index) => {
          return (
            <div key={index} id={index} className="table-item-container">
              <div className="position">
                <p className="position-number">{index + 1}</p>
              </div>
              <div className="player-container">
                <div className="avatar"></div>
                <div className="player-name-level">
                  <div className="player-name">{item.Nome}</div>
                  <div className="player-level">
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
                <div className="challs-completes">
                  <p
                    className="blue"
                    onClick={() => {
                      setClientDel(!maps);
                    }}
                  >
                    CEP: {item.CEP}
                  </p>
                </div>
                <div className="xp">
                  <p className="blue">País: {item.Pais}</p>
                </div>
                <div className="map"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ClientsPage;
