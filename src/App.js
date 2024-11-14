import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPageComponent from './Components/LandingPage';
import SideMenu from './Components/SideMenu';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        </div>
      <div className="side-menu-container">
        <SideMenu />
      </div>
      <div className="landing-page-container">
        <LandingPageComponent />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
