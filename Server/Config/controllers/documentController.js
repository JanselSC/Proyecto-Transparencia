const db = require('../config/dbConfig');

// Obtener todos los documentos
const getDocuments = (req, res) => {
  const query = "SELECT id, title, fulltext, catid FROM f8fxu_content";
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los documentos:', err);
      return res.status(500).send('Error al obtener los documentos');
    }
    res.json(results);  // Responder con los documentos en formato JSON
  });
};

module.exports = {
  getDocuments
};
