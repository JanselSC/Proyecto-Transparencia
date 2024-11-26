import React from "react";
import { useParams } from "react-router-dom";

const DocumentView = () => {
  const { documentId } = useParams(); // Obtiene el ID del documento de la URL

  return (
    <div>
      <h2>Vista de Documento {documentId}</h2>
      {/* Aquí puedes mostrar los detalles del documento */}
      <p>Este es el contenido del documento con ID: {documentId}</p>
    </div>
  );
};

export default DocumentView;
