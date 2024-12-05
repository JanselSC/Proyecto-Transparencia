const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Ruta para obtener los documentos
router.get('/', documentController.getDocuments);

module.exports = router;
