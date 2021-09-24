import React from "react";
import update from "../../images/update.svg";
import create from "../../images/create.svg";
import del from "../../images/delete.svg";
import logo from "../../images/logo.svg";

const SideMenu = () => {
  return (
    <div className="menu-container">
      {/* LOGO */}
      <div className="logo" href="#">
        <img src={logo} width="70px" height="auto" />
      </div>
      {/* Itens Menu */}
      <div className="menu">
        <div className="menu-item" id="home" onClick={() => {}}>
          <div className="active"></div>
          <img src={create} width="30px" height="auto" />
        </div>

        <div className="menu-item" id="leaderboard" onClick={() => {}}>
          <div className="active"></div>
          <img src={update} width="30px" height="auto" />
        </div>

        <div className="menu-item" id="leaderboard" onClick={() => {}}>
          <div className="active"></div>
          <img src={del} width="23px" height="auto" />
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
