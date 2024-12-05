const db = require('../config/dbConfig');

// Obtener todas las carpetas
const getFolders = (req, res) => {
  const query = "SELECT id, title FROM f8fxu_categories";
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las carpetas:', err);
      return res.status(500).send('Error al obtener las carpetas');
    }
    res.json(results);  // Responder con las carpetas en formato JSON
  });
};

module.exports = {
  getFolders
};
