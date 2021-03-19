import React from 'react';

import Logo from '../../assets/images/logo.png';

import './index.css';

function Header() {
  return (
    <header className="header">
        <img src={Logo} className="header--logo" alt="logo do sistema"/>
        <img 
            src="https://suap.ifrn.edu.br/media/alunos/75x100/198740.hIduBpokcbUj.jpg" 
            className="header--user"
            alt="imagem do usuario"
        />
    </header>

  );
}

export default Header;