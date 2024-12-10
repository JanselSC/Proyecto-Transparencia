import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FolderView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faFolderOpen,
  faArrowRightFromBracket,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// Relación manual de temas con sus IDs
const temasMap = {
  "Constitución de la República Dominicana": 1, 
  "Leyes": 2, 
  "Decretos": 3,
  "Resoluciones": 5,
  "Otras Normativas": 7,
  "Marco legal Leyes":11,
  "Marco legal Decretos":12,
  "Marco legal Resoluciones":9,
  "Marco legal Normativas":113,
  "Estructura organica de la institucion":13,
  "Derecho de los Ciudadanos de Acceder a la información Pública":134,
  "Estructura Organizacional de la OAI":2649,
  "Manual de Organización de la OAI":91,
  "Manual de Procedimiento de la OAI":137,
  "Estadisticas y Balance de gestion de la OAI":138,
  "Responsable de la OAI":139,
  "Resolucion de Informacion Clasificada":84,
  "Indice de Documentos Disponibles para Entrega":92,
  "Indice de Transparencia Estandarizado":143,
  "Planificacion Estrategica Institucional":168,
  "Plan Operativo Anual POA":169,
  "Memorias Institucionales":170,
  "Publicaciones Oficiales":18,
  "Estadisticas Institucionales":25,
  "Informacion Basica sobre Servicios Publicos":32,
  "Estadisticas de las Quejas, Reclamaciones y Sugerencias del 311":179,
  "Declaraciones Juradas de Bienes":33,
  "Presupuesto aprobado del año":183,
  "Ejecucion de Presupuesto":184,
  "Nomina de Empleados":39,
  "Jubilaciones, Pensiones y Retiros":41,
  "Programas Asistenciales":42,
  "Como Registrarse como proveedor del estado":1593,
  "Plan Anual de Compras y Contrataciones PACC":1594,
  "Licitaciones Publicas":1595,
  "Licitaciones Restringidas":1624,
  "Sorteo de Obras":1687,
  "Comparaciones de precios":1707,
  "Compras Menores":1830,
  "Subasta Inversa":2231,
  "Relacion de Compras por debajo del umbral":2234,
  "Micro, Pequeñas y Medianas Empresas":2277,
  "Emergencia Nacional":2289,
  "Casos de Urgencias":2295,
  "Otros Casos de Excepción":2346,
  "Relación de Estado de Cuenta de Suplidores":2418,
  "Proyectos y Programas":59,

  "Estados Financieros":412,
  "Informes Financieros":2502,
  "Ingresos y Egresos":2526,
  "Informes de Auditorias":2575,
  "Activos Fijos":2588,
  "Inventario en Almacen":2595,

  "Listado de Miembros y medios de contactos":2628,
  "Compromiso Etico":2629,
  "Plan de Trabajo, Informe de Logros y Seguimiento del Plan":2234,
  "Relacion de Consultas Publicas":2641,
  "Relacion de Consultas Abiertas":2634,
}

const FolderView = ({ folders = [], searchQuery = "", setSearchQuery, selectedCategory }) => {
  const { searchQuery: urlSearchQuery = "" } = useParams();
  const [currentFolder, setCurrentFolder] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [filteredFolders, setFilteredFolders] = useState([]);
  const [temaId, setTemaId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    const temaIdSeleccionado = temasMap[selectedCategory];
    if (temaIdSeleccionado) {
      setTemaId(temaIdSeleccionado);
      fetchFoldersAndDocuments(temaIdSeleccionado);
    } else {
      console.error(`El tema "${selectedCategory}" no tiene un ID asignado en el mapa.`);
    }
  }, [selectedCategory]);

  const fetchFoldersAndDocuments = async (temaId) => {
    try {
      const foldersResponse = await axios.get("http://10.100.0.123:5210/Carpetas");
      const relatedFolders = foldersResponse.data.filter((folder) => folder.parent_id === temaId);
      setFilteredFolders(relatedFolders);

      const folderIds = relatedFolders.map((folder) => folder.id);
      const documentsResponse = await axios.get("http://10.100.0.123:5210/Documentos");
      const relatedDocuments = documentsResponse.data.filter((doc) => folderIds.includes(doc.catid));
      setDocuments(relatedDocuments);
    } catch (error) {
      console.error("Error al obtener carpetas y documentos:", error);
    }
  };

  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
    navigate(`/folders/${folder.title}`);
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
    navigate(`/folders`);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/folders/${query}`);
  };

  return (
    <div className="folder-view">
      {currentFolder && (
        <div className="back-icon" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faCircleLeft} />
          <span>Volver</span>
        </div>
      )}

      {!currentFolder && (
        <h2 className="folder-view-title">{selectedCategory || searchQuery || "Carpetas"}</h2>
      )}

      <div className="search-filter-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar carpeta..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {!currentFolder ? (
        <div className="folder-list">
          {filteredFolders.length > 0 ? (
            filteredFolders.map((folder) => (
              <div key={folder.id} className="folder-item" onClick={() => handleFolderClick(folder)}>
                <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
                <span className="folder-name">{folder.title}</span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </div>
            ))
          ) : (
            <p className="empty-message">No se encontraron carpetas.</p>
          )}
        </div>
      ) : (
        <div className="folder-contents">
          <h3 className="current-folder-name">{currentFolder.title}</h3>
          {documents.length > 0 ? (
            documents.map((doc) => (
              <div key={doc.id} className="file-item">
                <div className="file-details">
                  <a
                    className="file-name"
                    href={`http://10.100.0.123:5210/files/${doc.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.title}
                  </a>
                </div>
                <div className="file-actions">
                  <button className="preview-button">
                    <FontAwesomeIcon icon={faEye} /> 
                  </button>
                  <button className="download-button">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-folder">No se encontraron documentos en esta carpeta.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FolderView;