import React from 'react';

import logo from '../../assets/face_white.png'
import icon from '../../assets/icon.png'

function Menu() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt=""/>
        <div>
          <a href="">Meu perfil</a>
          <img className="icon" src={icon} />  
        </div>
      </nav>
    </header> 
  )
}

export default Menu;