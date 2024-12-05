import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3001;

// Configuración de CORS
app.use(cors());

// Configuración de la conexión a la base de datos MariaDB
const db = mysql.createConnection({
  host: '127.0.0.1',        // Dirección del servidor de base de datos
  user: 'root',             // Usuario de la base de datos
  password: '',             // Contraseña (deja vacía si no hay)
  database: 'joomla_db',    // Nombre de la base de datos
  charset: 'utf8mb4',       // Conjunto de caracteres para compatibilidad
  port: 3306                // Puerto de MariaDB (puedes omitirlo si es el por defecto 3306)
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MariaDB.');
});

// Middleware para asegurarnos de que todas las respuestas son JSON
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Endpoint para obtener las categorías de Phoca Download
app.get('/phoca-folders', (req, res) => {
  const query = "SELECT id, title FROM f8fxu_phocadownload_categories";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error al obtener las categorías de Phoca Download" });
    } else {
      res.json(results);  // Responde en formato JSON
    }
  });
});

// Ruta para obtener los documentos de una categoría específica
app.get('/phoca-documents/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const query = "SELECT id, title, filename FROM f8fxu_phocadownload WHERE categoryid = ? AND published = 1";
  db.query(query, [categoryId], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error al obtener los documentos de la categoría" });
    } else {
      res.json(results);  // Responde en formato JSON
    }
  });
});

// Iniciar el servidor en el puerto 3001
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
