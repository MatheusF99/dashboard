import React from 'react';

import { BiDollar } from 'react-icons/bi'
import { RiNewspaperLine } from 'react-icons/ri'

import { BsGraphUp, BsPerson } from 'react-icons/bs'

import './landing.css'
import Sidebar from '../../components/sidebar/sidebar';
import Headers from '../../components/header/header'
import { GoogleChartsBar, GoogleChartArea, GoogleChartDonut } from '../../components/googlecharts/googlecharts';

// import { Container } from './styles';

const Landing = () => {
  return (
    <div className="landingPage">

      <Sidebar />

      <div className="landing">

        <Headers />

        <div className="landing-content">

          <div className="cards-div">

            <div className="cards">
              <div className="cardInfo">
                <span>Revenue</span>
                <strong>$34k</strong>
              </div>
              <div className="cardIcon">
                <BiDollar size={30} color='white' />
              </div>
            </div>

            <div className="cards">
              <div className="cardInfo">
                <span>Orders</span>
                <strong>811</strong>
              </div>
              <div className="cardIcon">
                <RiNewspaperLine size={30} color='white' />
              </div>
            </div>

            <div className="cards">
              <div className="cardInfo">
                <span>Profits</span>
                <strong>$2.3k</strong>
              </div>
              <div className="cardIcon">
                <BsGraphUp size={30} color='white' />
              </div>
            </div>

            <div className="cards">
              <div className="cardInfo">
                <span>Users</span>
                <strong>762</strong>
              </div>
              <div className="cardIcon">
                <BsPerson size={30} color='white' />
              </div>
            </div>

          </div>

          <div className="graficos-div">

            <div className="graficos">
              <span>Progress</span>
              <div className="graficosInfo">
                <strong>$53k</strong>
                <span>Target</span>
              </div>
              <GoogleChartDonut />
            </div>

            <div className="graficos mid">
              <span>Earnings</span>
              <div className="divInfo">
                <div className="graficosInfo">
                  <strong>$34,533</strong>
                  <span>Revenue</span>
                </div>
                <div className="graficosInfo">
                  <strong>$2,345</strong>
                  <span>Profits</span>
                </div>
                <div className="graficosInfo">
                  <strong>$811</strong>
                  <span>Orders</span>
                </div>
              </div>
              <GoogleChartArea />
            </div>

            <div className="graficos">
              <span>Users</span>
              <div className="graficosInfo">
                <strong>234</strong>
                <span>Today</span>
                <GoogleChartsBar />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div >
  );
}

export default Landing;