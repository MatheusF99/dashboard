import React from 'react';

import { BiHomeAlt } from 'react-icons/bi';
import { DiJqueryUiLogo } from 'react-icons/di';
import { IoMdLogOut } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';


import './sideabar.css'
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* logo | home | menu | mensagens | logout */}

      <ul>
        <DiJqueryUiLogo size={40} />
        <li>
          <Link to='/home'>
            <BiHomeAlt size={40} />
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <RiDashboardLine size={40} />
          </Link>
        </li>
        <li>
          <Link to='/users'>
            <FiUsers size={40} />
          </Link>
        </li>
      </ul>

      <Link to='/'>
        <IoMdLogOut size={40} />
      </Link>
    </div>
  );
}

export default Sidebar;