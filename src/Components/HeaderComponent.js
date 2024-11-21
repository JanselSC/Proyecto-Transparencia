import React, { useState } from "react";
import "./HeaderComponent.css"; // Asegúrate de tener el archivo CSS correspondiente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube,faMagnifyingGlass } from '@fortawesome/free-brands-svg-icons';
import { RiSearchEyeLine } from "react-icons/ri";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      alert(`Buscando: ${searchTerm}`);
    } else {
      alert("Por favor, ingresa un término de búsqueda.");
    }
  };

  return (
    <header className="header">
      
      <div className="logo-container">
        <img src="https://inabie.gob.do/transparencia/images/Logo-inabie.png" alt="Logo" className="logo"  style={{ height:'128px', marginTop:'20px'}}/>
      </div>

 
      {/* Contenedor para los elementos de búsqueda y redes sociales */}
      <div className="escudo-container" style={{marginLeft:'1290px', marginRight:'-50px', marginBottom:'50px'}}>
          <img src="https://inabie.gob.do/transparencia/images/escudordinabie.png"/>
        </div>
        
      <div className="search-social-container" style={{marginTop:'50px', marginRight:'545px'}}>
        <div className="search-container" style={{marginTop:'50px', marginLeft:'-220px',   width: '550px' /* Fijamos un ancho constante */
}}>


  <div className="search-input-wrapper">
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
           className="search-input"
           
    />
  
    <RiSearchEyeLine className="search-icon" onClick={handleSearchSubmit}  style={{marginTop:'-5px'}}/>
  </div>
</div>

        {/* Contenedor de iconos sociales */}
        <div className="social-icons" style={{marginLeft:'-150px'}}>
        <a href="https://inabie.gob.do/contacto" style={{textDecoration:'none', marginTop:'7px'}}>
          <span className="contact-text">Contáctanos</span>
          </a>
          <a href="https://www.facebook.com/INABIERD" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/inabierd/?hl=es" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FINABIERD" className="social-icon">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.youtube.com/channel/UCUZMgsP1Om3Qw57Vc3vxEmAm" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
      
        </div>
      </div>
    </header>
  );
};

export default Header;
