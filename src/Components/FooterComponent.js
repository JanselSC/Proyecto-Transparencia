import React from 'react';
import nortice1 from '../Img/nortice1.png'

const Footer = () => {
  return (
    <footer
      style={{
        lineHeight: '18px',
        color: 'rgb(0, 0, 0)',
        fontSize: '12px',
        backgroundColor: '#142e52',
        color: '#ffffff',
        width: '100%',
        maxWidth:'100%',
        paddingTop: '120px',
        paddingBottom: '30px',
        borderTopLeftRadius:'50px',
        borderTopRightRadius:'50px',
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
      }}
    >
      {/* Sección sobre la línea divisoria */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          paddingBottom: '30px',
          textAlign: 'center',
          color: '#D3D3D3',
        }}
      >

<div style={{ marginBottom: '18px' }}>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px' }}>Sobre Nosotros</h3>
  <div><a href="#mision" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Misión, Visión y Valores</a></div>
  <div><a href="#estructura" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Estructura del INABIE</a></div>
  <div><a href="#glosario" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Glosario de Términos</a></div>
  <div><a href="#faq" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Preguntas Frecuentes</a></div>
</div>
<div style={{ marginBottom: '18px' }}>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px' }}>Servicios</h3>
  <div><a href="#alimentacion" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Servicio de Alimentación Escolar</a></div>
  <div><a href="#salud" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Servicio de Salud Escolar</a></div>
  <div><a href="#nutricion" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Servicio de Nutrición Escolar</a></div>
  <div><a href="#sociales" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Servicios Sociales</a></div>
</div>
<div style={{ marginBottom: '18px' }}>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px' }}>Enlaces</h3>
  <div><a href="#reclamacion" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Portal de reclamación y sugerencias 311</a></div>
  <div><a href="#informacion" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Portal de solicitud de acceso a la información pública</a></div>
  <div><a href="#emergencia" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Portal de emergencia 911</a></div>
</div>
<div style={{ marginBottom: '18px' }}>
  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px' }}>Publicaciones Oficiales</h3>
  <div><a href="#transparencia" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Transparencia</a></div>
  <div><a href="#observatorio" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Observatorio Nacional</a></div>
  <div><a href="#licitaciones" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Licitaciones</a></div>
  <div><a href="#comunicaciones" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Comunicaciones</a></div>
  <div><a href="#noticias" style={{ fontSize: '18px', color: '#D3D3D3', marginBottom: '10px', display: 'block', textDecoration:'none' }}>Noticias</a></div>
</div>


</div>
      {/* Línea divisoria ubicada sobre el contenido */}
      <div
        style={{
          borderTop: '1px solid #ffffff',
          marginBottom: '30px',
        }}
      ></div>

      <div style={{ paddingBottom: '30px' }}>
        <p>
          <img
            style={{
              width: '35%',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            src="https://inabie.gob.do/transparencia/images/escudo.png"
            alt="Escudo INABIE"
            width="1201"
            height="113"
          />
        </p>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <span>Instituto Nacional de Bienestar Estudiantil</span>
        </div>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <span>Av. 27 de Febrero No. 559, Manganagua, Santo Domingo, R. D.</span>
        </div>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <span>TEL: (809) 732-2750 | (809) 732-2756</span>
        </div>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <span>
            Email:{' '}
            <a href="mailto:libreacceso@inabie.gob.do" style={{ color: '#FFF', fontSize:'18px' }}>
              libreacceso@inabie.gob.do
            </a>
          </span>
        </div>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <span>Horario: De 8:00 a.m. a 4:30 p.m. de Lunes a Viernes.</span>
        </div>
        <div className="caption" style={{ textAlign: 'center', color: '#D3D3D3', fontSize:'18px' }}>
          <a
            href="http://10.100.0.120/index.php?id=29"
            style={{ color: '#fff' }}
          >
            TÉRMINOS DE USO
          </a>{' '}
          |{' '}
          <a
            href="http://10.100.0.120/index.php?id=30"
            rel="alternate"
            style={{ color: '#fff', fontSize:'18px' }}
          >
            POLÍTICAS DE PRIVACIDAD
          </a>{' '}
          |{' '}
          <a
            href="http://10.100.0.120/index.php?id=31"
            style={{ color: '#fff', fontSize:'18px' }}
          >
            PREGUNTAS FRECUENTES
          </a>
          <br />
          <span style={{ fontSize:'18px'}}>© 2024 Todos los Derechos Reservados</span>
        </div>

        {/* Contenedor de las imágenes alineadas a la derecha */}
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '20px',
            alignItems: 'center',
           
          }}
        >
          <div
            style={{
              position: 'relative',
              top: '-90px', // Ajuste para subir la imagen A3
            }}
          >
            <a
              className="logo-nortic-A3"
              href="https://nortic.ogtic.gob.do/instituciones/INABIE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://inabie.gob.do/transparencia/images/LOGO-NORTIC-A3-FONDO-AZUL.PNG"
                alt="Logo NORTIC A3"
              />
            </a>
          </div>

          <div
            style={{
              position: 'relative',
              top: '-90px', // Ajuste para subir la imagen A2
            }}
          >
            <a
              className="logo-nortic-A2"
              href="https://nortic.ogtic.gob.do/instituciones/INABIE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://inabie.gob.do/transparencia/images/LOGO_NORTIC_A2.PNG"
                alt="Logo NORTIC A2"
              />
            </a>
          </div>

          <div
            style={{
              position: 'relative',
              top: '-98px', // Ajuste para subir la imagen E1
            }}
          >
            <a
              className="logo-nortic-E1"
              href="https://nortic.ogtic.gob.do/instituciones/INABIE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={nortice1}
                alt="Logo NORTIC E1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
