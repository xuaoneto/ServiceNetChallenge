import React from "react";
import update from "../../images/update.svg";
import create from "../../images/create.svg";
import del from "../../images/delete.svg";
import logo from "../../images/logo.svg";

const SideMenu = () => {
  return (
    <div class="menu-container">
      {/* LOGO */}
      <div class="logo" href="#">
        <img src={logo} width="50px" height="auto" />
      </div>
      {/* Itens Menu */}
      <div class="menu">
        <div class="menu-item" id="home" onClick={() => {}}>
          <div class="active"></div>
          <img src={create} width="30px" height="auto" />
        </div>

        <div class="menu-item" id="leaderboard" onClick={() => {}}>
          <div class="active"></div>
          <img src={update} width="30px" height="auto" />
        </div>

        <div class="menu-item" id="leaderboard" onClick={() => {}}>
          <div class="active"></div>
          <img src={del} width="30px" height="auto" />
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
