import React from 'react';

import { IoMdLogOut } from 'react-icons/io'
import { BiHomeAlt, BiMessageAltDetail, BiSearchAlt, BiBell, BiDollar } from 'react-icons/bi'
import { RiDashboardLine, RiNewspaperLine } from 'react-icons/ri'
import { DiJqueryUiLogo } from 'react-icons/di'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsGraphUp, BsPerson } from 'react-icons/bs'

import './landing.css'

// import { Container } from './styles';

const Landing = () => {
  return (
    <div className="landingPage">
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

      <div className="landing">

        <header>
          {/* caminho | pesquisa | configuração | notificacao | perfil */}
          <span>Home/<strong>Dashboard</strong></span>

          <div className='headerMenu'>
            <div className="headerSearch">
              <BiSearchAlt size={25} />
              <input type="text" placeholder="Search..." />
            </div>
            <a href='//'><AiOutlineSetting size={25} /></a>
            <a href='//'><BiBell size={25} /></a>
          </div>
        </header>

        <div className="landing-content">

          <div className="cards-div">
            <div className="cards">
              <span>Revenue</span>
              <strong>$34k</strong>
              <BiDollar />
            </div>
            <div className="cards">
              <span>Orders</span>
              <strong>811</strong>
              <RiNewspaperLine />
            </div>
            <div className="cards">
              <span>Profits</span>
              <strong>$2.3k</strong>
              <BsGraphUp />
            </div>
            <div className="cards">
              <span>Users</span>
              <strong>762</strong>
              <BsPerson />
            </div>
          </div>

          <div className="graficos-div">
            <div className="graficos">
              <span>Progress</span>
              <strong>$53k</strong>
              <span>Target</span>
            </div>
            <div className="graficos mid">
              <span>Earnings</span>

              <strong>$34,533</strong>
              <span>Revenue</span>

              <strong>$2,345</strong>
              <span>Profits</span>

              <strong>$811</strong>
              <span>Orders</span>
            </div>
            <div className="graficos">
              <span>Users</span>
              <strong>234</strong>
              <span>Today</span>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Landing;