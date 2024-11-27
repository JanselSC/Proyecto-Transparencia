import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirección
import "./HeaderComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Header = ({ availableContent = [] }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const navigate = useNavigate(); // Hook para redirección
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const found = availableContent.some((item) =>
    item.toLowerCase().includes(lowerCaseSearchTerm)
  );
  // Maneja el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Realiza la búsqueda y redirige al componente FolderView
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      const availableContent = ["Constitución Actual", "Reporte Financiero 2024", "Plan de Proyecto"]; // Lista de contenidos disponibles
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const found = availableContent.some((item) =>
        item.toLowerCase().includes(lowerCaseSearchTerm)
      );
  
      if (!found) {
        // Si no se encuentra el término, muestra un alert
        alert(`No se encontró ningún resultado para "${searchTerm}"`);
      } else {
        // Redirige a la página de FolderView con el término de búsqueda como parámetro
        navigate(`/folders/${searchTerm}`);
      }
    }
  };

  const enlaces = [
    {
      url: "https://inabie.gob.do/contacto",
      text: "Contáctanos",
      type: "text", // Tipo de enlace para texto
    },
    {
      url: "https://www.facebook.com/INABIERD",
      icon: faFacebook,
      type: "icon", // Tipo de enlace para iconos
    },
    {
      url: "https://www.instagram.com/inabierd/?hl=es",
      icon: faInstagram,
      type: "icon",
    },
    {
      url: "https://x.com/INABIERD",
      icon: faXTwitter,
      type: "icon",
    },
    {
      url: "https://www.youtube.com/channel/UCUZMgsP1Om3Qw57Vc3vxEmAm",
      icon: faYoutube,
      type: "icon",
    },
  ];

  return (
    <header
      className="header"
      style={{
        backgroundColor: "",
        paddingBottom: "50px",
        borderBottom: "10px #003870 solid",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <div className="logo-container">
        <img
          src="https://inabie.gob.do/transparencia/images/Logo-inabie.png"
          alt="Logo"
          className="logo"
          style={{ height: "158px", marginTop: "20px" }}
        />
      </div>

      <div
        className="escudo-container"
        style={{
          marginLeft: "1295px",
          marginRight: "-50px",
          marginBottom: "40px",
        }}
      >
        <img
          src="https://inabie.gob.do/transparencia/images/escudordinabie.png"
          alt="Escudo"
          style={{ width: "293px", height: "60px" }}
        />
      </div>

      <div
        className="search-social-container"
        style={{ marginTop: "60px", marginRight: "545px" }}
      >
        <div
          className="search-container"
          style={{
            marginTop: "50px",
            marginLeft: "-220px",
            width: "550px",
          }}
        >
          <div className="search-input-wrapper">
            <input style={{width:'280px', marginLeft:'-20px'}}
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown} // Detecta la tecla Enter
              className="search-input"
              placeholder="Buscar..."
            />
          </div>
        </div>

        <div className="social-icons" style={{ marginLeft: "-150px" }}>
          {enlaces.map((enlace, index) => (
            <a
              key={index}
              href={enlace.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                enlace.type === "icon" ? "social-icon" : "contact-link"
              }
              style={
                enlace.type === "text"
                  ? { textDecoration: "none", marginTop: "7px" }
                  : {}
              }
            >
              {enlace.type === "text" ? (
                <span className="contact-text">{enlace.text}</span>
              ) : (
                <FontAwesomeIcon icon={enlace.icon} />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
