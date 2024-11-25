import React from 'react';
import Header from './Components/HeaderComponent';
import SideMenu from './Components/SideMenu';
import Footer from './Components/FooterComponent';
import './Layout.css'; // Agrega estilos necesarios

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <SideMenu />
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
