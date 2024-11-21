import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPageComponent from './Components/LandingPage';
import SideMenu from './Components/SideMenu';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import FolderView from './Components/FolderView';
import Carousel3D from './Components/Carousel3D';

function App() {
  const images = [
    'https://inabie.gob.do/images/banners/banners2023/12/cita.jpg',
    'https://inabie.gob.do/images/banners/4-1.jpg',
    'https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%205.jpg',
    'https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%206.jpg',
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="carousel-container">
          <Carousel3D images={images} />
        </div>
        <div className="side-menu-container">
          <SideMenu />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<LandingPageComponent />} />
            <Route path="/folders" element={<FolderView />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
