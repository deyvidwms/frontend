import React from 'react';

import Logo from '../../assets/images/logo.png';

import { MdClose, MdDehaze } from "react-icons/md";

import { Link } from 'react-router-dom';

import './index.css';



function getData() {
  return JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
}

function handleMenuShow () {
  let menu = document.getElementById("menu");
  menu.setAttribute("class", "show");
}

function handleMenuHidden () {
  let menu = document.getElementById("menu");
  menu.removeAttribute("class");
}

function Header() {
  const dadosUsuario = getData();

  return (
    <div>
      <header className="header">
          <img src={Logo} className="header--logo" alt="logo do sistema"/>
          <div id="buttonMenu" onClick={ () => { handleMenuShow()} } >
            <MdDehaze />
          </div>
      </header>
      <div id="menu">
        <div id="buttonCloseMenu" onClick={ () => { handleMenuHidden() } } >
          <MdClose />
        </div>
        <div className="menu--image-profile">
          <img 
              src={dadosUsuario.foto}
              className="image-profile--user"
              alt="imagem do usuario"
          />
          <p>{dadosUsuario.nome}</p>
        </div>
        <div className="menu--navbar">
          <ul>
            <li>
              <Link tabIndex="-1" to="/">Inicio</Link>
            </li>
            <li>
              <Link tabIndex="-1" to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link tabIndex="-1" to="/login" >Sair</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;