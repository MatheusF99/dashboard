import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBell, BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

import './header.css'

const Headers = () => {
  return (
    <header>
      {/* caminho | pesquisa | configuração | notificacao | perfil */}
      <span>Home/<strong>Dashboard</strong></span>

      <div className='headerMenu'>
        <div className="headerSearch">
          <BiSearchAlt size={25} />
          <input type="text" placeholder="Search..." />
        </div>
        <a href='http'><AiOutlineSetting size={25} /></a>
        <a href='http'><BiBell size={25} /></a>
      </div>
    </header>
  );
}

export default Headers;