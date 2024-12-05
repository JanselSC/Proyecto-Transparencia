import express from 'express';

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Para habilitar CORS (comunicación entre cliente y servidor)

const app = express();
const port = 3001;

// Configuración de CORS para permitir solicitudes desde el frontend (React)
app.use(cors());

// Configuración de la base de datos (ajustar los parámetros según tu configuración)
const db = createConnection({
  host: '10.100.0.123',        // Dirección del servidor de base de datos
  user: 'INABIE\\OPDBD11',     // Usuario con el dominio, usando doble barra invertida
  password: '0123456789J*',    // Contraseña
  database: 'joomla_db',       // Nombre de la base de datos
  charset: 'utf8mb4',          // Conjunto de caracteres para compatibilidad
});


// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Ruta para obtener las categorías de Phoca Download
app.get("/phoca-folders", (req, res) => {
  const query = "SELECT id, title FROM f8fxu_phocadownload_categories";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error al obtener las categorías de Phoca Download");
    } else {
      res.json(results);
    }
  });
});

// Ruta para obtener los documentos de una categoría específica
app.get("/phoca-documents/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const query = "SELECT id, title, filename FROM f8fxu_phocadownload WHERE categoryid = ? AND published = 1";
  db.query(query, [categoryId], (err, results) => {
    if (err) {
      res.status(500).send("Error al obtener los documentos de la categoría");
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
