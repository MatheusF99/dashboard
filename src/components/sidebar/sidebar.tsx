import React from 'react';

import { BiHomeAlt, BiMessageAltDetail } from 'react-icons/bi';
import { DiJqueryUiLogo } from 'react-icons/di';
import { IoMdLogOut } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';

import './sideabar.css'

// import { Container } from './styles';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* logo | home | menu | mensagens | logout */}

      <ul>
        <DiJqueryUiLogo size={40} />
        <li>
          <BiHomeAlt size={40} />
        </li>
        <li>
          <RiDashboardLine size={40} />
        </li>
        <li>
          <BiMessageAltDetail size={40} />
        </li>
      </ul>

      <IoMdLogOut size={40} />
    </div>
  );
}

export default Sidebar;