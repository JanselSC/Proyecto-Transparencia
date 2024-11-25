import React, { useState } from "react";
import "./HeaderComponent.css"; // Asegúrate de tener el archivo CSS correspondiente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { RiSearchEyeLine } from "react-icons/ri";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  // Maneja el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Maneja la búsqueda cuando se presiona Enter o se hace clic en el ícono
  const handleSearchSubmit = () => {
    if (searchTerm) {
      highlightTextInPage(searchTerm); // Resaltar el texto
    } else {
      alert("Por favor, ingresa un término de búsqueda.");
    }
  };

  // Maneja el evento de presionar Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit(); // Llama a la función de búsqueda cuando se presiona Enter
    }
  };

  // Función que resalta el texto en la página
  const highlightTextInPage = (term) => {
    removeHighlight(); // Eliminar resaltes previos

    if (!term) return;

    const regex = new RegExp(`(${term})`, "gi");
    const elements = document.body.getElementsByTagName("*");

    for (let el of elements) {
      if (el.children.length === 0) {
        const textContent = el.textContent || el.innerText;
        if (regex.test(textContent)) {
          el.innerHTML = el.innerHTML.replace(regex, `<mark>$1</mark>`);
        }
      }
    }
    setHighlightedText(term);
  };

  // Función para eliminar el resaltado de texto anterior
  const removeHighlight = () => {
    const marks = document.querySelectorAll("mark");
    marks.forEach((mark) => {
      mark.replaceWith(mark.textContent); // Eliminar el marcador <mark>
    });
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
 
    <header className="header"  style={{backgroundColor:'', paddingBottom:'50px', borderBottom:'10px #003870 solid', borderBottomLeftRadius:'50px', borderBottomRightRadius:'50px'}}>
   
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
        style={{ marginLeft: "1295px", marginRight: "-50px", marginBottom: "40px" }}
      >
        <img src="https://inabie.gob.do/transparencia/images/escudordinabie.png" alt="Escudo" style={{ width: '293px', height: '60px' }} />
      </div>

      <div className="search-social-container" style={{ marginTop: "60px", marginRight: "545px" }}>
        <div
          className="search-container"
          style={{
            marginTop: "50px",
            marginLeft: "-220px",
            width: "550px", // Fijamos un ancho constante
          }}
        >
          <div className="search-input-wrapper">
            <input
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
              className={enlace.type === "icon" ? "social-icon" : "contact-link"}
              style={enlace.type === "text" ? { textDecoration: "none", marginTop: "7px" } : {}}
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
