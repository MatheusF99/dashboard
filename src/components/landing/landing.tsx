import React from 'react';
import './landing.css'

// import { Container } from './styles';

const Landing = () => {
  return (
    <div className="landingPage">
      <div className="sidebar">
        {/* logo | home | menu | mensagens | logout */}
        <h1>hello world</h1>
      </div>
      <div className="landing">
        <header>
          {/* caminho | pesquisa | configuração | notificacao | perfil */}
          <h1>hello world</h1>
        </header>

        <div className="cards-div">
          <div className="cards">
            <h1>hello world</h1>
          </div>
        </div>

        <div className="graficos-div">
          <div className="graficos">
            <h1>hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;