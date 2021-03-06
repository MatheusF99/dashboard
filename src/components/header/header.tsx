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
        <Link to='/'><AiOutlineSetting size={25} /></Link>
        <Link to='/'><BiBell size={25} /></Link>
        <Link to='/'>
          <svg height="50" width="100">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="blue" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Headers;