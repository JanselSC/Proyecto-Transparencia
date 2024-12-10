import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageComponent from "./Components/LandingPage";
import SideMenu from "./Components/SideMenu";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import FolderView from "./Components/FolderView";
import DocumentView from "./Components/DocumentView";
import Carousel3D from "./Components/Carousel3D";
import axios from "axios";

function Layout({ children, searchQuery, setSearchQuery, setSelectedCategory }) {
  const images = [
    "https://inabie.gob.do/images/banners/banners2023/12/cita.jpg",
    "https://inabie.gob.do/images/banners/4-1.jpg",
    "https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%205.jpg",
    "https://inabie.gob.do/images/banners/Banners2024/10/BANNERS%20WEB%206.jpg",
  ];

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="carousel-container">
        <Carousel3D images={images} />
      </div>
      <div className="side-menu-container">
        <SideMenu onCategorySelect={setSelectedCategory} /> {/* Pasamos setSelectedCategory */}
      </div>
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [folders, setFolders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para el tema seleccionado

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get("http://10.100.0.123:5210/Carpetas");
        setFolders(response.data);
      } catch (error) {
        console.error("Error al cargar las carpetas:", error);
      }
    };

    fetchFolders();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          >
            <LandingPageComponent />
          </Layout>
        }
      />
      <Route
        path="/folders/:searchQuery?"
        element={
          <Layout
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          >
            <FolderView
              folders={folders}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory} // Pasamos el tema seleccionado
            />
          </Layout>
        }
      />
      <Route
        path="/documents/:documentId"
        element={
          <Layout
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          >
            <DocumentView />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
