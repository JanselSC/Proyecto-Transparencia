import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Eliminamos el import de BrowserRouter
import "./App.css";
import LandingPageComponent from "./Components/LandingPage";
import SideMenu from "./Components/SideMenu";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import FolderView from "./Components/FolderView";
import DocumentView from "./Components/DocumentView"; // Asegúrate de crear este componente para mostrar los documentos
import Carousel3D from "./Components/Carousel3D";

function Layout({ children, searchQuery, setSearchQuery }) {
  const images = [
    'https://inabie.gob.do/images/banners/banners2023/12/cita.jpg',
    'https://inabie.gob.do/images/banners/4-1.jpg',
    'https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%205.jpg',
    'https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%206.jpg',
  ];

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="carousel-container">
        <Carousel3D images={images} />
      </div>
      <div className="side-menu-container">
        <SideMenu />
      </div>
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [folders, setFolders] = useState([]); // Estado para las carpetas
  const [documents, setDocuments] = useState([]); // Estado para los documentos

  // Cargar las carpetas desde el backend
  

  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
            <LandingPageComponent />
          </Layout>
        }
      />
      {/* Ruta para ver carpetas con búsqueda opcional */}
      <Route
       path="/folders/:searchQuery?"
        element={
          <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
            <FolderView  />
          </Layout>
        }
      />
      {/* Ruta para ver documentos */}
      <Route
        path="/documents/:documentId"
        element={
          <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
            <DocumentView documents={documents} />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
