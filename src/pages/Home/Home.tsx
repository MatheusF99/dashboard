import React from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import Headers from '../../components/header/header'

// import { Container } from './styles';
import './Home.css'
import { GoogleChartTimeline } from '../../components/googlecharts/googlecharts';

import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div className="homePage">
      <Sidebar />

      <div className="homeContent">

        <Headers />

        {/* 
          - active feed(fazer o log da aplicação)
          - fazer um planer
          - fazer um todo tipo milstone
          ex: https://dribbble.com/shots/14728602-Paligo-Dashboard/attachments/6429877?mode=media
         */}

        <div className="home">

          <div className="homeCards">

            <div className="activeFeed">
              <span>
                Activity Feed
              </span>

              <div className="activity">

                <div className="perfil">
                  <div className="perfilFoto">
                    {/* imagem */}
                  </div>

                  <div className="perfilInfo">
                    <span>1 minute ago / Stion J.</span>
                    <span>User Stion J. logs in</span>
                  </div>
                </div>

                <div className="perfil">
                  <div className="perfilFoto">
                    {/* imagem */}
                  </div>

                  <div className="perfilInfo">
                    <span>3 hours ago / Lana O.</span>
                    <span>Document Step 2 has been created</span>
                  </div>

                  <div className="perfilButton">
                    <button> <MdKeyboardArrowRight /> </button>
                  </div>
                </div>

                <div className="perfil">
                  <div className="perfilFoto">
                    {/* imagem */}
                  </div>

                  <div className="perfilInfo">
                    <span>3 hours ago / Lana O.</span>
                    <span>Document Step 2 has been created</span>
                  </div>

                  <div className="perfilButton">
                    <button> <MdKeyboardArrowRight /> </button>
                  </div>
                </div>

                <div className="perfil">
                  <div className="perfilFoto">
                    {/* imagem */}
                  </div>

                  <div className="perfilInfo">
                    <span>1 minute ago / Stion J.</span>
                    <span>User Stion J. logs in</span>
                  </div>
                </div>


              </div>

            </div>

            <div className="to-dos">
              Hello world
            </div>
          </div>
          <div className="planer">
            <GoogleChartTimeline />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;