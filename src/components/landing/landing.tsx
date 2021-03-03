import React from 'react';
import './landing.css'

// import { Container } from './styles';

const Landing = () => {
  return (
    <div className="landingPage">
      <div className="sidebar">
        {/* logo | home | menu | mensagens | logout */}
      </div>

      <div className="landing">

        <header>
          {/* caminho | pesquisa | configuração | notificacao | perfil */}
        </header>

        <div className="landing-content">

          <div className="cards-div">
            <div className="cards">
            </div>
            <div className="cards">

            </div>
            <div className="cards">

            </div>
            <div className="cards">
            </div>
          </div>

          <div className="graficos-div">
            <div className="graficos">
            </div>
            <div className="graficos mid">
            </div>
            <div className="graficos">
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Landing;