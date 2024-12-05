const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController');

// Ruta para obtener las carpetas
router.get('/', folderController.getFolders);

module.exports = router;
