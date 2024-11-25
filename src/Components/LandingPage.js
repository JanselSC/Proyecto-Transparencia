import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileInvoiceDollar, faComments, faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import banner from '../Img/banner.png'

const LandingPageComponent = () => {
  const handleNavigation = (index) => {
    const links = [
      'https://saip.gob.do/apps/sip/?step=one',           // Enlace externo para "Solicitud de Información SAIP"
      'https://311.gob.do/',           // Enlace externo para "Sugerencias y Quejas 311"
      'https://comunidad.comprasdominicana.gob.do/Public/Tendering/ContractNoticeManagement/Index?currentLanguage=es&Country=DO&Theme=DGCP&Page=Login', // Enlace externo para "Compras y Contrataciones"
      'https://inabie.gob.do/transparencia/index.php/recursos-humanos/nomina-de-empleados'         // Enlace externo para "Nómina Institucional"
    ];

    window.open(links[index], '_blank'); // '_blank' asegura que se abra en una nueva pestaña
  };
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', marginTop:'-310px' }}>
      <div style={{ border: '2px solid grey', padding: '10px', marginTop: '200px ',marginLeft:'320px', borderRadius: '10px', backgroundColor: 'linear-gradient(#003870 35%, #003870 50%, #ffffff 50%)', minHeight: '1190px',maxWidth: '2200px',boxShadow: '4px 4px 20px rgba(0, 56, 112, 0.6)', /* sombra azul más sobresaliente */
}}>

<div style={{ width: '45%', textAlign: 'center' }}>
<img src={banner} alt="Logo" style={{maxWidth:'878px', marginLeft:'-10px', marginTop:'-10px', borderRadius:'5px'}} />



</div>
  
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', width: '100%', margin: '0 auto' }}>
          <div style={{ width: '150%', padding: '0 20px', marginTop:'10px' }}>
            <p style={{ color: '#000', fontFamily: "'SairaMedium, sans-serif", fontSize: '13px', textAlign: 'justify', marginRight: '8px' }}>
              <span style={{ fontSize: '14pt', marginRight: '10px' }}>
                En aras de promover el cumplimiento a la Ley General de Libre Acceso a la Información Pública, No. 200-04 de fecha 28 de julio de 2004, y al Decreto No. 130-05, que aprueba su Reglamento de Aplicación, el Instituto Nacional De Bienestar Estudiantil pone a disposición de la ciudadanía los contenidos que, según el artículo 5 de la referida ley, establecen deben publicarse en las páginas Web de los organismos del Estado.
              </span>
            </p>
            <p style={{ fontSize: '14pt', color: '#000', fontFamily: "'SairaMedium, sans-serif", marginLeft: '-1px', marginRight:'0px', textAlign: 'justify' }}>
              <strong>Artículo 5.-</strong> "Se dispone la informatización y la incorporación al sistema de comunicación por Internet, o a cualquier otro sistema similar que en el futuro se establezca, de todos los organismos públicos centralizados y descentralizados del Estado, incluyendo el Distrito Nacional y los Municipios, con la finalidad de garantizar a través de éste un acceso directo del público a la información del Estado."
            </p>
            <p style={{ fontSize: '14pt', color: '#000', fontFamily: "'SairaMedium, sans-serif", marginLeft: '-1px', marginRight:'0px', textAlign: 'justify' }}>
              Todos los poderes y organismos del Estado deberán instrumentar la publicación de sus respectivas "Páginas Web" a los siguientes fines:
            </p>
          </div>
        
        </div>
        <div style={{ width: '100%', maxWidth: '800px', paddingBottom: '5px', color: '#000', fontFamily: "'SairaMedium, sans-serif", fontSize: '14px', justifyContent: 'left' }}>
          <p style={{ color: '#000000', fontFamily: "'SairaMedium, sans-serif", fontSize: '16px', marginLeft: '-1px', marginLeft:'20px', textAlign: 'justify' }}>
            <strong>Difusión de Información</strong>: Estructura, integrantes, normativas de funcionamiento, proyectos, informes de gestión, base de datos;
          </p>
          <p style={{ color: '#000000', fontFamily: "'SairaMedium, sans-serif", fontSize: '16px', textAlign: 'justify', marginLeft:'20px' }}>
            <strong>Centro de Intercambio y Atención al Cliente o Usuario:</strong> Consultas, quejas y sugerencias;
          </p>
          <p style={{ color: '#000000', fontFamily: "'SairaMedium, sans-serif", fontSize: '16px', textAlign: 'justify', marginLeft:'20px' }}>
            <strong>Trámites o Transacciones Bilaterales:</strong> "La información a que hace referencia el párrafo anterior será de libre acceso al público sin necesidad de petición previa".
          </p>
          <p style={{ color: '#000', fontFamily: "'SairaMedium, sans-serif", fontSize: '16px' }}></p>
        </div>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'SairaMedium, sans-serif", textAlign: 'justify', marginLeft:'20px' }}>
          <strong>"Nuestro Portal cumple con las especificaciones contempladas en la Ley 200-04, la cual establece la actualización permanente de las informaciones ofrecidas en el mismo".</strong>
        </p>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'SairaMedium, sans-serif", textAlign: 'justify' }}></p>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'SairaMedium, sans-serif", textAlign: 'justify' }}></p>

        {/* Datos más consultados Section */}
        <div style={{marginTop:'50px'}}>
          <h2 style={{ textAlign: 'center', fontSize: '30px', fontFamily: "'Open Sans', 'SairaMedium, sans-serif", color: '#003870', marginTop:'40px'}}>
            <strong>Datos más consultados</strong>
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '60px' }}>
          {['Solicitud de Información SAIP', 'Sugerencias y Quejas 311', 'Compras y Contrataciones', 'Nómina Institucional'].map((title, index) => (
        <div key={index} className="button-container" onClick={() => handleNavigation(index)} style={{ cursor: 'pointer' }}>
          {index === 2 ? (
            <FontAwesomeIcon icon={faCartPlus} bounce style={{ color: "#FFF", fontSize: "40px", paddingBottom: '20px' }} />
          ) : index === 1 ? (
            <FontAwesomeIcon icon={faComments} bounce style={{ color: "#FFF", fontSize: "40px", paddingBottom: '20px' }} />
          ) : index === 0 ? (
            <FontAwesomeIcon icon={faFileCircleExclamation} bounce style={{ color: "#FFF", fontSize: "40px", paddingBottom: '20px' }} />
          ) : (
            <FontAwesomeIcon icon={faFileInvoiceDollar} bounce style={{ color: "#FFF", fontSize: "40px", paddingBottom: '20px' }} />
          )}


                <div className="title">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
