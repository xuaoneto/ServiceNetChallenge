import React, { useState, useEffect } from "react";
import SideMenu from "../SideMenu";
import { getClients, authToken, deleteClient } from "../Requests";
import { useHistory } from "react-router-dom";

const ClientsPage = () => {
  const history = useHistory();
  const [clients, setClients] = useState([]);

  async function touchDeleteClient(id) {
    const deleted = await deleteClient(id);
    setClients([]);
    return deleted;
  }
  useEffect(() => {
    async function allClients() {
      const logged = await authToken();
      if (logged.data[0] != undefined) {
        const resp = await getClients();
        setTimeout(function () {
          setClients(resp.data);
        }, 500);
      } else {
        history.push("/login");
      }
    }
    allClients();
  }, [clients]);

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

        {clients[0] === undefined ? (
          <p className="login-error-delay">
            Login não identificado ou Sem dados
          </p>
        ) : (
          clients.map((item, index) => {
            return (
              <div key={index} id={index} className="table-item-container">
                <div className="position">
                  <p className="position-number">{item.id}</p>
                </div>
                <div className="player-container">
                  <button
                    className="button delete"
                    onClick={() => {
                      touchDeleteClient(item.id);
                    }}
                  >
                    <p>X</p>
                  </button>
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
                    <p className="blue">CEP: {item.CEP}</p>
                  </div>
                  <div className="xp">
                    <p className="blue">País: {item.Pais}</p>
                  </div>
                  <div className="map"></div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default ClientsPage;
