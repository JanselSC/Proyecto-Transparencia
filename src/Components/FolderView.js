import React, { useState } from 'react';
import './FolderView.css';

const FolderView = ({ menuSection, folders = [] }) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    // Filtrar carpetas según el término de búsqueda y el filtro seleccionado
    const filteredFolders = folders
        ?.filter(folder => folder.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(folder => filter === 'all' || folder.type === filter);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="folder-view">
            <h2>Sección: {menuSection}</h2>

            {/* Campo de búsqueda */}
            <input
                type="text"
                placeholder="Buscar carpeta..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />

            {/* Filtros */}
            <div className="filters">
                <label>Filtrar por tipo:</label>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="all">Todas</option>
                    <option value="document">Documentos</option>
                    <option value="folder">Carpetas</option>
                    <option value="image">Imágenes</option>
                    {/* Agregar más opciones de filtro si es necesario */}
                </select>
            </div>

            {/* Lista de carpetas */}
            <div className="folder-list">
                {filteredFolders.map(folder => (
                    <Folder key={folder.id} name={folder.name} type={folder.type} />
                ))}
            </div>
        </div>
    );
};

const Folder = ({ name, type }) => {
    return (
        <div className="folder-item">
            <span className={`folder-icon ${type}`}></span>
            <span className="folder-name">{name}</span>
        </div>
    );
};

export default FolderView;
