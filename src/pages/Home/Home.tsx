import React from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import Headers from '../../components/header/header'

// import { Container } from './styles';
import './Home.css'

const Home = () => {
  return (
    <div className="homePage">
      <Sidebar />

      <div className="homeContent">

        <Headers />

        <div className="home">
          <h1>Hello world</h1>
        </div>

      </div>
    </div>
  );
}

export default Home;