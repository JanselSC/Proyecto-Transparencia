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

const FolderView = ({ menuSection, folders = [] }) => {
  const { searchQuery: urlSearchQuery = "" } = useParams(); // Recibe el searchQuery desde la URL
  const [currentFolder, setCurrentFolder] = useState(null); // Carpeta seleccionada
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery); // Estado local para el campo de búsqueda
  const navigate = useNavigate();

  useEffect(() => {
    // Sincroniza el estado de búsqueda con el valor de la URL
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  // Función para filtrar documentos dentro de la carpeta actual
  const searchInFolder = (folder, query) => {
    if (!folder.children) return [];
    return folder.children.filter((file) =>
      file.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Filtrar las carpetas principales
  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrar los documentos dentro de la carpeta actual
  const filteredCurrentFolderFiles = currentFolder
    ? searchInFolder(currentFolder, searchQuery)
    : [];

  // Cambiar a la carpeta seleccionada
  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
  };

  // Volver al nivel raíz
  const handleBackClick = () => {
    setCurrentFolder(null);
  };

  // Manejar el cambio de búsqueda y actualizar la URL
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/folders/${query}`); // Actualiza la URL con el nuevo searchQuery
  };

  return (
    <div className="folder-view">
      {/* Botón de retroceso */}
      {currentFolder && (
        <div className="back-icon" onClick={handleBackClick}>
          <FontAwesomeIcon
            icon={faCircleLeft}
            style={{ color: "#0f3554", marginRight: "10px" }}
          />
          <span>Volver</span>
        </div>
      )}

      {/* Título de la vista principal */}
      {!currentFolder && (
        <h2 className="folder-view-title">
          Constitución de la República Dominicana
        </h2>
      )}

      {/* Buscador */}
      <div className="search-filter-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar carpeta..."
          value={searchQuery}
          onChange={handleSearchChange} // Cambiar el valor de búsqueda
        />
      </div>

      {/* Vista principal de carpetas */}
      {!currentFolder ? (
        <div className="folder-list">
          {filteredFolders.length > 0 ? (
            filteredFolders.map((folder) => (
              <div
                key={folder.id}
                className="folder-item"
                onClick={() => handleFolderClick(folder)}
              >
                <FontAwesomeIcon icon={faFolderOpen} style={{ color: "#0f3554" }} />
                <span className="folder-name" style={{ display: 'flex', flexDirection: 'row' }}>
                  {folder.name}
                </span>
                {folder.children && folder.children.length > 0 && (
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                )}
              </div>
            ))
          ) : (
            <p className="empty-message">No hay carpetas disponibles.</p>
          )}
        </div>
      ) : (
        // Vista de documentos dentro de una carpeta
        <div className="folder-contents">
          <h3 className="current-folder-name">{currentFolder.name}</h3>
          {filteredCurrentFolderFiles.length > 0 ? (
            filteredCurrentFolderFiles.map((file) => (
              <FileItem key={file.id} {...file} />
            ))
          ) : (
            <p className="empty-folder">No se encontraron documentos.</p>
          )}
        </div>
      )}

      {/* Footer específico para FolderView */}
      <footer className="folder-view-footer"></footer>
    </div>
  );
};

const FileItem = ({ name, type, date, previewUrl, downloadUrl }) => (
  <div className="file-item">
    <span className={`file-icon ${getIconClass(type)}`}></span>
    <div className="file-details">
      <span className="file-name">{name}</span>
      <span className="file-date">Publicado: {date}</span>
    </div>
    <div className="file-actions">
      <button
        className="preview-button"
        onClick={() => window.open(previewUrl, "_blank")}
        title="Previsualizar"
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
      <button
        className="download-button"
        onClick={() => window.open(downloadUrl, "_blank")}
        title="Descargar"
      >
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </div>
  </div>
);

const getIconClass = (type) => {
  switch (type) {
    case "document":
      return "fa fa-file-alt";
    case "image":
      return "fa fa-image";
    default:
      return "fa fa-file";
  }
};

const sampleFolders = [
  {
    id: 1,
    name: "Constitución Actual",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Reporte Financiero 2024",
        type: "document",
        date: "2024-11-20",
        previewUrl: "#",
        downloadUrl: "#",
      },
      {
        id: 3,
        name: "Imagen de Producto",
        type: "image",
        date: "2024-11-19",
        previewUrl: "#",
        downloadUrl: "#",
      },
      {
        id: 4,
        name: "Manual Técnico",
        type: "document",
        date: "2024-11-18",
        previewUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: 5,
    name: "Historico",
    type: "folder",
    children: [
      {
        id: 6,
        name: "Plan de Proyecto",
        type: "document",
        date: "2024-11-17",
        previewUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: 7,
    name: "Archivos de Imagen",
    type: "folder",
    children: [],
  },
];

FolderView.defaultProps = {
  folders: sampleFolders,
};

export default FolderView;
