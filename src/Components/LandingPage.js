import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileInvoiceDollar, faComments, faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

const LandingPageComponent = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ border: '2px solid grey', padding: '10px', marginTop: '200px ',marginLeft:'320px', borderRadius: '10px', backgroundColor: '#fff', minHeight: '1190px',maxWidth: '2200px'}}>
        <h1 className="title-transparencia" style={{ margin: '10px 0px', fontFamily: "'Roboto', sans-serif", lineHeight: '40px', color: '#003870', fontSize: '70px', textAlign: 'center' }}></h1>
        <h1 className="title-transparencia" style={{ margin: '10px 0px', fontFamily: "'Roboto', sans-serif", lineHeight: '40px', color: '#003870', fontSize: '70px', textAlign: 'center' }}>
          Portal de Transparencia
        </h1>
        <p></p>
        <h3 className="title-transparencia" style={{ margin: '10px 0px', fontFamily: "'Roboto', sans-serif", lineHeight: '40px', color: '#ca0714', fontSize: '30px', textAlign: 'center' }}>
          del Instituto Nacional de Bienestar Estudiantil
        </h3>
        <p></p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', width: '100%', margin: '0 auto' }}>
          <div style={{ width: '50%', padding: '0 20px' }}>
            <p style={{ color: '#000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '13px', textAlign: 'justify', marginRight: '8px' }}>
              <span style={{ fontSize: '12pt', marginRight: '10px' }}>
                En aras de promover el cumplimiento a la Ley General de Libre Acceso a la Información Pública, No. 200-04 de fecha 28 de julio de 2004, y al Decreto No. 130-05, que aprueba su Reglamento de Aplicación, el Instituto Nacional De Bienestar Estudiantil pone a disposición de la ciudadanía los contenidos que, según el artículo 5 de la referida ley, establecen deben publicarse en las páginas Web de los organismos del Estado.
              </span>
            </p>
            <p style={{ fontSize: '12pt', color: '#000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", marginLeft: '-1px', marginRight:'0px', textAlign: 'justify' }}>
              <strong>Artículo 5.-</strong> "Se dispone la informatización y la incorporación al sistema de comunicación por Internet, o a cualquier otro sistema similar que en el futuro se establezca, de todos los organismos públicos centralizados y descentralizados del Estado, incluyendo el Distrito Nacional y los Municipios, con la finalidad de garantizar a través de éste un acceso directo del público a la información del Estado."
            </p>
            <p style={{ fontSize: '12pt', color: '#000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", marginLeft: '-1px', marginRight:'0px', textAlign: 'justify' }}>
              Todos los poderes y organismos del Estado deberán instrumentar la publicación de sus respectivas "Páginas Web" a los siguientes fines:
            </p>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <img style={{ borderRadius: '10px', maxWidth: '100%' }} src="https://attachments.office.net/owa/jansel.sanchez%40inabie.gob.do/service.svc/s/GetAttachmentThumbnail?id=AAMkADE1YmIxNWE1LWI5Y2EtNGRjZC05MmZhLWRkMGQ1NDliMGM1NgBGAAAAAABALw%2FlOI5NRqUBklibwphqBwBpZ5M%2FnXRWSJib8cfUGVorAAAAAAEMAABpZ5M%2FnXRWSJib8cfUGVorAAI4LvTkAAABEgAQAMCjiCFlKgFNmOZHBsKWwz4%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkEzMDVCMkU1Q0ZERjFGQTFBODgyNTU2MzM3NDhCQkNBRTAxNUU5OTIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJvd1d5NWNfZkg2R29nbFZqTjBpN3l1QVY2WkkifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiMTY4OGRmOGJhMGZjNDQ2MjkxYWM2MWU4ODIxMTc2ZGMiLCJzaWduaW5fc3RhdGUiOlsiZHZjX21uZ2QiLCJkdmNfZG1qZCJdLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDE2ZWY0NGQ3LWNlMGUtNDM5MC1iMTQ4LTVkMTNhZjI2OGIxOCIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTEyMjcyNDE3NTA4OVwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImI5OGNjMzhiLTRjZjMtNDRmYS1iNDcxLTcxZDkwNmVjMzJkNFwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMjc2Nzk1NDY2OC04NDUwNzU1Mi00MTQ0MjIyNjU5LTExNzc0MTc1XCJ9IiwibmJmIjoxNzMxNTI3MTc1LCJleHAiOjE3MzE1Mjc0NzUsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEAxNmVmNDRkNy1jZTBlLTQzOTAtYjE0OC01ZDEzYWYyNjhiMTgiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEAxNmVmNDRkNy1jZTBlLTQzOTAtYjE0OC01ZDEzYWYyNjhiMTgiLCJoYXBwIjoib3dhIn0.z11QUneUMd8VhfgUAL4B8vW4NiKLJqq92IbtVcZomuBHvZZmMA2rBQkQD6Z2_1BORMOL8VsKAJ0XblBcsx85rmkusYOR0evuk_R034YQfn0e3vx1UVpnt4cpH6bZw4ifFphumSFW6frcPfCaLOfs0h0YdOqZlmDD9wKNRz8kn-VtnhMhRxH9u5tmyIIVZgh3Kw7AWJoBnVam-PJuRqSJIcbt8Dk2PoqnNd6vZpK9u6imscV-L3lj-TtvqHywOQQBsaU1zuy0jLnLpQFUAgwVS8S0IkOXIaKfMJUm_hZDgNbDBB6nfEJ6l1Ovmov8oX73qQG3KCh2BiTTSWxuk66Dug&X-OWA-CANARY=X-OWA-CANARY_cookie_is_null_or_empty&owa=outlook.office.com&scriptVer=20241101001.31&clientId=C25D4A21845146EAAB38FEEED52A2038&animation=true&persistenceId=8be9710c-290e-4f81-8529-cf7aab817393" alt="Imagen de INABIE" />
          </div>
        </div>
        <div style={{ width: '100%', maxWidth: '800px', paddingTop: '20px', color: '#000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '13px', justifyContent: 'left' }}>
          <p style={{ color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '16px', marginLeft: '-1px', marginLeft:'20px', textAlign: 'justify' }}>
            <strong>Difusión de Información</strong>: Estructura, integrantes, normativas de funcionamiento, proyectos, informes de gestión, base de datos;
          </p>
          <p style={{ color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '16px', textAlign: 'justify', marginLeft:'20px' }}>
            <strong>Centro de Intercambio y Atención al Cliente o Usuario:</strong> Consultas, quejas y sugerencias;
          </p>
          <p style={{ color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '16px', textAlign: 'justify', marginLeft:'20px' }}>
            <strong>Trámites o Transacciones Bilaterales:</strong> "La información a que hace referencia el párrafo anterior será de libre acceso al público sin necesidad de petición previa".
          </p>
          <p style={{ color: '#000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '16px' }}></p>
        </div>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textAlign: 'justify', marginLeft:'20px' }}>
          <strong>"Nuestro Portal cumple con las especificaciones contempladas en la Ley 200-04, la cual establece la actualización permanente de las informaciones ofrecidas en el mismo".</strong>
        </p>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textAlign: 'justify' }}></p>
        <p style={{ fontSize: '14pt', color: '#000000', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textAlign: 'justify' }}></p>

        {/* Datos más consultados Section */}
        <div style={{marginTop:'50px'}}>
          <h2 style={{ textAlign: 'center', fontSize: '30px', fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#003870' }}>
            <strong>Datos más consultados</strong>
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '10px' }}>
            {['Compras y Contrataciones', 'Nómina Institucional', 'Solicitud de Información SAIP', 'Sugerencias y Quejas 311'].map((title, index) => (
              <div key={index} className="button-container">
                {/* Replace the image with FontAwesome icon for each section */}
                {index === 0 ? (
                  <FontAwesomeIcon icon={faCartPlus} bounce style={{ color: "#87CEFA", fontSize: "40px", paddingBottom: '20px' }} />
                ) : index === 1 ? (
                  <FontAwesomeIcon icon={faFileInvoiceDollar} bounce style={{ color: "#87CEFA", fontSize: "40px", paddingBottom: '20px' }} />
                ) : index === 2 ? (
                  <FontAwesomeIcon icon={faComments} bounce style={{ color: "#87CEFA", fontSize: "40px", paddingBottom: '20px' }} />
                ) : (
                  <FontAwesomeIcon icon={faFileCircleExclamation} bounce style={{ color: "#87CEFA", fontSize: "40px", paddingBottom: '20px' }} />
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
